import React from "react";
import { Header, Footer } from "../../component/common";
// import signin_bg from "../../image/signin-bg.png";

export function Login() {
  return (
    <>
      <Header />
      <div className="d-flex justify-evenly align-center">
        <div>
          <h2>Welcome Back</h2>
          <p>
            Need an account?
            <span className="text-decoration font-weight-700">Sign up</span>
          </p>
          <form>
            <div class="ui form">
              <div class="fields">
                <div class="field error">
                  <label>Email</label>
                  <input type="email" placeholder="Email" required />
                </div>
              </div>
            </div>
          </form>
        </div>
        {/* <img className="width-50" src={"signin_bg"} alt="sigin-bg" /> */}
      </div>
      <Footer />
    </>
  );
}
