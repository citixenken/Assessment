import React, { useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const { forgotPassword } = UserAuth();

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  //forgot password
  const handlePasswordReset = async (e) => {
    e.preventDefault();
    try {
      await forgotPassword(email);
      navigate("/");
    } catch (err) {
      setError(err.message);
      console.log(err.message);
    }
  };
  return (
    <div className="max-w-[700px] mx-auto my-16 p-4">
      <h1 className="font-bold text-4xl text-brightRed">Forgot Password?</h1>
      {error && (
        <p className="text-brightRed bg-brightRedSupLight rounded-md p-1">
          {error}
        </p>
      )}
      <p className="text-md mt-4 py-4 text-darkGrayishBlue">
        Enter valid email credentials and check your inbox for password reset
        link
      </p>
      <form
        action=""
        className="flex flex-col px-8 gap-4"
        onSubmit={handlePasswordReset}
      >
        <input
          className="p-2 mt-4 rounded-md border"
          type="email"
          name="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button className="bg-brightRed rounded-md text-white py-2 hover:scale-105 duration-300">
          Submit
        </button>
      </form>
      <div className="text-md flex justify-around items-center py-4">
        <p>Already have an account?</p>
        {/* <button className="py-2 px-4 bg-brightRed rounded-md text-white hover:scale-105 duration-300">
          Sign In
        </button> */}
        <Link to="/" className="text-brightRed">
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default ForgotPassword;
