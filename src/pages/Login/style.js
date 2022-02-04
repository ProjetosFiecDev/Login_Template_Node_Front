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

  @media (max-width: 500px) {
    width: 90%;
  }
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
    props.tela === 0
      ? "2px solid var(--secondary-color)"
      : "2px solid var(--auxiliary-color)"};
  color: ${(props) =>
    props.tela === 0 ? "var(--secondary-color)" : "var(--auxiliary-color)"};
  width: 35%;
  grid-area: l;
  cursor: pointer;
`;

export const Register = styled.div`
  border-bottom: ${(props) =>
    props.tela === 1
      ? "2px solid var(--secondary-color)"
      : "2px solid var(--auxiliary-color)"};
  color: ${(props) =>
    props.tela === 1 ? "var(--secondary-color)" : "var(--auxiliary-color)"};
  width: 35%;
  grid-area: r;
  cursor: pointer;
`;

export const EsqueciSenha = styled.div`
  margin-top: 3%;
  color: var(--font-color);
  font-size: 0.9rem;
  cursor: pointer;
  text-decoration: underline var(--secondary-color);
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
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
  /* width: 300px; */
  width: 65%;
  margin-top: 8%;

  ::placeholder {
    color: var(--font-color);
  }

  @media (max-width: 500px) {
    width: 80%;
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
    color: var(--secondary-color);
  }
`;

export const Checkbox = styled.div`
  border: 2px solid var(--secondary-color);
  width: 15px;
  height: 15px;
  border-radius: 25%;
  margin-right: 10px;
  cursor: pointer;
`;
