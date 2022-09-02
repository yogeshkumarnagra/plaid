import React, { useRef } from "react";
import { Header, Footer } from "../../component/common";
import { useForm } from "react-hook-form";

export function Login() {
  const emailref = useRef();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <Header />
      <div className="d-flex justify-evenly align-center">
        <div>
          <h2 className="font-size-extra-large">Welcome Back</h2>
          <p className="font-large">
            Need an account?
            <span className="text-decoration font-weight-700 m-left-4">
              Sign up
            </span>
          </p>
          <form className="ui form" onSubmit={handleSubmit(onSubmit)}>
            <div className="field">
              <label>Email</label>
              <input
                style={
                  errors.email ? { border: " 1px solid red" } : { border: "" }
                }
                type="text"
                name="email"
                placeholder="Email"
                {...register("email", {
                  required: "email is required",
                  pattern: {
                    value: /[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$/,
                    message: "Email is invalid.",
                  },
                })}
              />
              {errors.email && (
                <p style={{ color: "red" }}>{errors.email.message}</p>
              )}
              <label>Password</label>
              <input
                style={
                  errors.password ? { border: "1px solid red" } : { border: "" }
                }
                type="password"
                name="password"
                placeholder="Password"
                // required
                {...register("password", {
                  required: "password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be atleast 6 character",
                  },
                  maxLength: {
                    value: 12,
                    message: "Password must not more than 12 character",
                  },
                })}
              />
              {errors.password && (
                <p style={{ color: "red" }}>{errors.password.message}</p>
              )}
            </div>
            <button className="ui button" type="submit">
              Submit
            </button>
          </form>
          <div className="text-decoration font-weight-700 m-top-2 font-large">
            Reset Password
          </div>
        </div>
        <img
          className="width-50"
          src={"/images/signin-bg.png"}
          alt="sigin-bg"
        />
      </div>
      <Footer />
    </>
  );
}
