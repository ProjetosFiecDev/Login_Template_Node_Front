import jwt, { decode } from "jsonwebtoken";
import jwt_decode from "jwt-decode";

export const isAuthenticated = () => {
  const token = localStorage.getItem("token");

  try {
    jwt.verify(token, "acibike@citec");
    var decoded = jwt_decode(token);
    if (decoded) {
      return true;
    }
  } catch (error) {
    localStorage.clear();
    return false;
  }
};

export const isAuthenticatedCoordenador = () => {
  const token = localStorage.getItem("token");

  try {
    jwt.verify(token, "rh@citec");
    var decoded = jwt_decode(token);
    if (decoded.perfil === "COORD") return true;
    else return false;
  } catch (error) {
    localStorage.clear();
    return false;
  }
};

export const isAuthenticatedRh = () => {
  const token = localStorage.getItem("token");

  try {
    jwt.verify(token, "rh@citec");
    var decoded = jwt_decode(token);
    if (decoded.perfil === "RH") return true;
    else return false;
  } catch (error) {
    localStorage.clear();
    return false;
  }
};

export const isAuthenticatedSecretaria = () => {
  const token = localStorage.getItem("token");

  try {
    jwt.verify(token, "rh@citec");
    var decoded = jwt_decode(token);
    if (decoded.perfil === "SEC") return true;
    else return false;
  } catch (error) {
    localStorage.clear();
    return false;
  }
};

export const isAuthenticatedAdmin = () => {
  const token = localStorage.getItem("token");

  try {
    jwt.verify(token, "rh@citec");
    var decoded = jwt_decode(token);
    if (decoded.perfil === "ADM") return true;
    else return false;
  } catch (error) {
    localStorage.clear();
    return false;
  }
};

export const isAuthenticatedDev = () => {
  const token = localStorage.getItem("token");

  try {
    jwt.verify(token, "rh@citec");
    var decoded = jwt_decode(token);
    if (decoded.perfil === "DEV") return true;
    else return false;
  } catch (error) {
    localStorage.clear();
    return false;
  }
};

export const isAuthenticatedDiretor = () => {
  const token = localStorage.getItem("token");

  try {
    jwt.verify(token, "rh@citec");
    var decoded = jwt_decode(token);
    if (decoded.perfil === "DIR") return true;
    else return false;
  } catch (error) {
    localStorage.clear();
    return false;
  }
};

// export const isAuthenticated = () => {
//     return true;
// };

// export const isAuthenticatedAdmin = () => {
//     return true;
// };
