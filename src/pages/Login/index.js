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
  Checkbox,
  CheckboxContainer,
} from "./style";

export default function Index() {
  const [login, setLogin] = useState(true);
  const [checked, setChecked] = useState(false);

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
              {/* <div>
                <input id="checkbox" type="checkbox" />
                <label for="checkbox" style={{color: "var(--font-color)", paddingLeft: "10px"}}>
                  Concordo com os <a>termos</a>
                </label>
              </div> */}
              <CheckboxContainer>
                <Checkbox
                  checked={checked}
                  onClick={() => {
                    setChecked(!checked);
                  }}
                />
                <a href="https://google.com" target="_blank">
                  Concordo com os termos
                </a>
              </CheckboxContainer>
              <Button>Cadastrar</Button>
            </>
          )}
        </Form>
      </Container>
    </Background>
  );
}
