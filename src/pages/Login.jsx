import React from "react";
import CostumInput from "../components/CostumInput";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../features/auth/authSlice";

function Login() {
  const despatch = useDispatch();

  let schema = Yup.object().shape({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string().required("Required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      despatch(login(values));
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div
      className="py-5 h-100 d-flex align-items-center justify-content-center"
      style={{ background: "#131921", minHeight: "100vh" }}
    >
      <div className="my-5 w-25 bg-white rounded-3 mx-auto p-3 ">
        <h3 className="text-center title">Login</h3>
        <p className="text-center">Login to continue</p>
        <form action="" onSubmit={formik.handleSubmit}>
          <CostumInput
            type="text"
            label="Email Address"
            id="email"
            name="email"
            onChange={formik.handleChange("email")}
            value={formik.values.email}
          />

          <div className="error">
            {formik.touched.email && formik.errors.email ? (
              <div>{formik.errors.email}</div>
            ) : null}
          </div>

          <CostumInput
            type="password"
            label="Password"
            id="pass"
            name="password"
            onChange={formik.handleChange("password")}
            value={formik.values.password}
          />
          <div className="error">
            {formik.touched.password && formik.errors.password ? (
              <div>{formik.errors.password}</div>
            ) : null}
          </div>
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
