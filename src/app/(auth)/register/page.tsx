"use client";
import React, { useState, useEffect } from "react";
import authClient from "@/utils/auth";

const Register = () => {
  const [UserData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleRegister = async () => {
    try {
      const { data, error } = await authClient.signUp.email({
        name: UserData.name,
        email: UserData.email,
        password: UserData.password,
        callbackURL: "/login",
      });
      if (error) {
        console.error("Error during registration:", error);
      } else {
        console.log("Registration successful:", data);
      }
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Name"
        value={UserData.name}
        onChange={(e) => setUserData({ ...UserData, name: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        value={UserData.email}
        onChange={(e) => setUserData({ ...UserData, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        value={UserData.password}
        onChange={(e) => setUserData({ ...UserData, password: e.target.value })}
      />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Register;
