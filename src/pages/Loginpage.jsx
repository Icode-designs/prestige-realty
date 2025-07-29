import React from "react";
import { AuthWrapper, FormCardBox, Heading2 } from "@/styles/Ui.styles";
import { Form, Link, useActionData } from "react-router-dom";
import InputField from "@/components/ui/InputFeild";
import Button from "@/components/ui/Button";

const Loginpage = () => {
  const errors = useActionData();
  return (
    <AuthWrapper>
      <FormCardBox>
        <Heading2>Welcome back</Heading2>
        <Form method="post">
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

          <Button>Submit</Button>
        </Form>
        <p>
          Don't have an account? <Link to="/signup">Signup</Link>
        </p>
      </FormCardBox>
    </AuthWrapper>
  );
};

export default Loginpage;
