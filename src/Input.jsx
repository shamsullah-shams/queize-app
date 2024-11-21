import React, { useContext } from "react";
import { UserContext } from "./context/UserContext";

const Input = () => {
  const { user } = useContext(UserContext);
  return <input value={user.email} />;
};

export default Input;
