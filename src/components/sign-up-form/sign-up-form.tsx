/* eslint-disable jsx-a11y/anchor-is-valid */
import "./sign-up-form-style.css";
import { Formik, Form } from "formik";
import { validationShema } from "./validation";
import { Input } from "./input/input";

export const SignUpForm = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  return (
    <div className="container">
      <div className="containerForm">
        <Formik
          initialValues={initialValues}
          validationSchema={validationShema}
          onSubmit={(values) => console.log(values)}
        >
          <Form>
            <h2>Sign Up</h2>
            <Input
              id="firstName"
              label="First Name"
              name="firstName"
              type="text"
              autoComplete="off"
            />
            <Input
              id="lastName"
              label="Last Name"
              name="lastName"
              type="text"
              autoComplete="off"
            />
            <Input id="email" label="Email" name="email" type="text" />
            <Input
              id="password"
              label="Password"
              name="password"
              autoComplete="off"
            />
            <Input
              id="confirmPassword"
              label="Confirm Password"
              name="confirmPassword"
              autoComplete="off"
            />
            <button className="custom" type="submit">
              Sign Up
            </button>
            <div className="signInLink">
              <p>
                Already registered <a href="#">sign in</a>
              </p>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};
