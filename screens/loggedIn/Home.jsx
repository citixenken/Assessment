import React, { useState, useEffect } from "react";
import Navbar from "../../src/components/Navbar/Navbar";
import UserCard from "../../src/components/UserCard/UserCard";
import { UserAuth } from "../../context/AuthContext";

const Home = () => {
  const { user } = UserAuth();

  return (
    <>
      <Navbar />
      <h4 className="font-bold text-2xl text-darkBlue">
        Welcome {user ? user.email : null}!
      </h4>
      <p className="text-2xl mt-4 py-4 text-darkGrayishBlue">
        SIL Assessment Users
      </p>
      <UserCard />
    </>
  );
};

export default Home;
