import React from "react";
import useAuth from "../auth/useAuth";

const Home = () => {
  const user = useAuth();
  console.log({ user });

  return <div>Home</div>;
};

export default Home;
