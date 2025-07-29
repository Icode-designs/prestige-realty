import Button from "@/components/ui/Button";
import InputField from "@/components/ui/InputFeild";
import { AuthWrapper, FormCardBox, Heading2 } from "@/styles/Ui.styles";
import React from "react";
import { Form, Link, useActionData } from "react-router-dom";

const SignupPage = () => {
  const errors = useActionData();
  return (
    <AuthWrapper>
      <FormCardBox>
        <Heading2>Welcome user, Signup</Heading2>
        <Form method="post">
          <InputField
            placeHolder="enter your first name"
            name="firstName"
            label="first name"
            type="text"
            error={errors?.firstName || null}
          />
          <InputField
            placeHolder="enter your last name"
            name="lastName"
            label="last name"
            type="text"
            error={errors?.lastName || null}
          />
          <InputField
            placeHolder="enter your email "
            name="email"
            label="email"
            type="text"
            error={errors?.email || null}
          />
          <InputField
            placeHolder="enter your password"
            name="password"
            label="password"
            type="password"
            error={errors?.password || null}
          />
          <InputField
            placeHolder="confirm your password"
            name="confirmPassword"
            label="confirm password"
            type="password"
            error={errors?.confirmPassword || null}
          />
          <Button>Submit</Button>
        </Form>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </FormCardBox>
    </AuthWrapper>
  );
};

export default SignupPage;
