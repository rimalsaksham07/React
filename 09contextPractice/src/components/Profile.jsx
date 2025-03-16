import React, { useContext, useState } from "react";
// hamro main chai aba value pathauba ko lagi use hune bhaneko chau useContext ho
// usecontext use garera value pathaune ho hmale
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);
  if (!user) return <div>please login</div>;
  return <div>Welcome {user.username}</div>
}

export default Profile;
