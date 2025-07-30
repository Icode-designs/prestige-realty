import { supabase } from "@/api/Superbase";
import { redirect } from "react-router-dom";

export const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.error("Sign out error:", error);
    return { error: "Failed to sign out. Please try again." };
  }
  return redirect("/");
};
