import { redirect } from "react-router-dom";
import { supabase } from "@/api/Superbase"; // adjust based on your project setup

export const signupFormAction = async ({ request }) => {
  const formData = await request.formData();
  const firstName = formData.get("firstName");
  const lastName = formData.get("lastName");
  const email = formData.get("email");
  const password = formData.get("password");
  const confirmPassword = formData.get("confirmPassword");

  const errors = {};

  // Basic validation
  if (!firstName || firstName.length < 2) {
    errors.firstName = "First name must be at least 2 characters long.";
  }

  if (!lastName || lastName.length < 2) {
    errors.lastName = "Last name must be at least 2 characters long.";
  }

  if (!email || !email.includes("@")) {
    errors.email = "Email must be valid.";
  }

  if (!password || password.length < 6) {
    errors.password = "Password must be at least 6 characters.";
  }

  if (password !== confirmPassword) {
    errors.confirmPassword = "Passwords do not match.";
  }

  if (Object.keys(errors).length > 0) {
    return errors;
  }

  // Create user in Supabase Auth
  const { data: authData, error: authError } = await supabase.auth.signUp({
    email,
    password,
  });

  if (authError) {
    return { email: authError.message };
  }

  const uid = authData.user?.id;
  console.log("User ID:", uid);

  if (!uid) {
    return { general: "Something went wrong. Try again." };
  }

  // Insert into custom `users` table
  const { error: dbError } = await supabase.from("users").insert({
    uid: uid,
    email,
    firstName: firstName,
    lastName: lastName,
    password,
  });

  if (dbError) {
    return { general: dbError.message };
  }

  return redirect("/login");
};

export const loginFormAction = async ({ request }) => {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");

  const errors = {};

  // Basic validation
  if (!email || !email.includes("@")) {
    errors.email = "Email must be valid.";
  }

  if (!password || password.length < 6) {
    errors.password = "Password must be at least 6 characters.";
  }

  if (Object.keys(errors).length > 0) {
    return errors;
  }

  // Sign in user with Supabase Auth
  const { data: authData, error: authError } =
    await supabase.auth.signInWithPassword({
      email,
      password,
    });

  if (authError) {
    return { email: authError.message };
  }

  console.log("Logged in user ID:", authData.user?.id);

  // Redirect to homepage after successful login
  if (authData.user) {
    return redirect("/");
  }

  return { general: "Something went wrong. Try again." };
};
