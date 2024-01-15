import React from 'react'
import CostumInput from '../components/CostumInput'

function ForgotPassword() {
  return (
    <div className="py-5 h-100 d-flex align-items-center justify-content-center" style={{ background: "#131921", minHeight: "100vh" }}>
      <div className="my-5 w-25 bg-white rounded-3 mx-auto p-3 ">
        <h3 className="text-center title">Forgot Password</h3>
        <p className="text-center">Please enter your registered email address</p>
        <form action="">
          <CostumInput type="text" label="Email Address" id="email" />
          <button
            style={{ background: "#131921" }}
            className="border-0 px-3 py-2 text-white fw-bold w-100"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default ForgotPassword
