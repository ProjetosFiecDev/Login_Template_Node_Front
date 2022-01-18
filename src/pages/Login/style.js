import styled from "styled-components";

export const Background = styled.div`
  background: var(--background-color);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 450px;
  /* min-height: 500px; */
  max-height: 900px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 1rem;
  background: var(--surface-color);
  /* transition: all 5s linear; */
  transition: max-height 4s ease-in-out;
`;

export const Menu = styled.div`
  width: 100%;
  display: grid;
  grid-template-areas: "l r";
  text-align: center;
  justify-items: center;
  margin-top: 5%;
`;

export const Login = styled.div`
  border-bottom: ${(props) =>
    props.login
      ? "2px solid var(--secondary-color)"
      : "2px solid var(--auxiliary-color)"};
  color: ${(props) =>
    props.login ? "var(--secondary-color)" : "var(--auxiliary-color)"};
  width: 35%;
  grid-area: l;
  cursor: pointer;
`;

export const Register = styled.div`
  border-bottom: ${(props) =>
    props.login
      ? "2px solid var(--auxiliary-color)"
      : "2px solid var(--secondary-color)"};
  color: ${(props) =>
    props.login ? "var(--auxiliary-color)" : "var(--secondary-color)"};
  width: 35%;
  grid-area: r;
  cursor: pointer;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  color: var(--font-color);
  line-height: 1.43;
  font-size: 20px;
  font-weight: 500;
  margin-top: 10%;
`;

export const Input = styled.input`
  background: none;
  color: var(--font-color);
  border: 2px solid var(--secondary-color);
  border-radius: 0.3rem;
  padding: 0.5rem;
  width: 300px;
  margin-top: 10%;

  ::placeholder {
    color: var(--font-color);
  }
`;

export const Button = styled.button`
  border-radius: 0.3rem;
  cursor: pointer;
  text-transform: uppercase;
  border: none;
  color: none;
  background: var(--primary-color);
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;
  margin-top: 30px;
  margin-bottom: 30px;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  color: var(--font-color);
  margin-top: 10%;
  font-size: 0.9em;
  align-items: center;

  a {
    text-decoration: none;
    color: var(--font-color);
  }
`;

export const Checkbox = styled.div`
  border: 2px solid var(--secondary-color);
  width: 15px;
  height: 15px;
  border-radius: 25%;
  margin-right: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  background-color: ${(props) =>
    props.checked ? "var(--secondary-color)" : "transparent"};
`;
