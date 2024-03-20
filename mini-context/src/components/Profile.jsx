import React, { useContext } from "react";
import userContext from "../context/userContext";

export default function Profile() {
  const { user } = useContext(userContext);
  if (!user) return <div>please login</div>;

  return <div>welcome {user.username}</div>;
}
