import jwt, { decode } from "jsonwebtoken";
import jwt_decode from "jwt-decode";

export const isAuthenticated = () => {
  const token = localStorage.getItem("token");

  try {
    jwt.verify(token, "template@citec");
    var decoded = jwt_decode(token);
    return true;
  } catch (error) {
    localStorage.clear();
    return false;
  }
};
