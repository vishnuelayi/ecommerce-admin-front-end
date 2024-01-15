import React from "react";
import CostumInput from "../components/CostumInput";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div
      className="py-5 h-100 d-flex align-items-center justify-content-center"
      style={{ background: "#131921", minHeight: "100vh" }}
    >
      <div className="my-5 w-25 bg-white rounded-3 mx-auto p-3 ">
        <h3 className="text-center title">Login</h3>
        <p className="text-center">Login to continue</p>
        <form action="">
          <CostumInput type="text" label="Email Address" id="email" />
          <CostumInput type="password" label="Password" id="pass" />
          <div className="mb-3 text-end">
            <Link to={"/forgot-password"}>Forgot password?</Link>
          </div>

          <button
            style={{ background: "#131921" }}
            className="border-0 px-3 py-2 text-white fw-bold w-100"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
