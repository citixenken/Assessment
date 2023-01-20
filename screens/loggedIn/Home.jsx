import React from "react";
import Navbar from "../../src/components/Navbar/Navbar";
import { UserAuth } from "../../context/AuthContext";

const Home = () => {
  const { user } = UserAuth();

  return (
    <>
      <Navbar />
      <h4 className="font-bold text-2xl text-darkBlue">
        Welcome {user ? user.email : null}!
      </h4>
      <p className="text-md mt-4 py-4 text-darkGrayishBlue">
        Ready to test out your SD Ninja moves?
      </p>
    </>
  );
};

export default Home;
