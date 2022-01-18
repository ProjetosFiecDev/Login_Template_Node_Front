import React, { useState, useEffect } from "react";
import {
  Background,
  Container,
  Title,
  Input,
  Button,
  Form,
  Menu,
  Login,
  Register,
} from "./style";

export default function Index() {
  const [login, setLogin] = useState(true);

  return (
    <Background>
      <Container>
        <Menu>
          <Login
            login={login}
            onClick={() => {
              setLogin(true);
            }}
          >
            Login
          </Login>
          <Register
            login={login}
            onClick={() => {
              setLogin(false);
            }}
          >
            Cadastro
          </Register>
        </Menu>
        <Form>
          {login ? (
            <>
              <Title>Login</Title>
              <Input type="email" placeholder="Email" />
              <Input type="password" placeholder="Senha" />
              <Button>Entrar</Button>
            </>
          ) : (
            <>
              <Title>Cadastro</Title>
              <Input type="name" placeholder="Nome" />
              <Input type="email" placeholder="Email" />
              <Input type="password" placeholder="Senha" />
              <Input type="password" placeholder="Confirmar Senha" />
              {/* <Input type="checkbox" /> */}
              {/* <p style={{ color: "var(--font-color)" }}>
                Concordo com os termos
              </p> */}
              <div
                style={{
                  backgroundColor: "var(--auxiliary-color)",
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  marginTop: "10%",
                  color: "transparent",
                }}
              ></div>
              <div
                style={{
                  backgroundColor: "var(--secondary-color)",
                  width: "20px",
                  height: "20px",
                  borderRadius: "25%",
                  marginTop: "10%",
                  color: "transparent",
                }}
              ></div>
              <Button>Cadastrar</Button>
            </>
          )}
        </Form>
      </Container>
    </Background>
  );
}
