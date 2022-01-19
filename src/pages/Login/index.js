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
import api from "../../services/api";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";

export default function Index() {
  const history = useHistory();
  const [login, setLogin] = useState(true);
  const [checked, setChecked] = useState(false);
  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");
  const [senhaConfirmacao, setSenhaConfirmacao] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    if (login) {
      if (email === "" || senha === "") {
        Swal.fire({
          title: "Alerta!",
          text: "Preencha todos os campos!",
          icon: "warning",
          confirmButtonText: "OK",
          confirmButtonColor: "var(--primary-color)",
          background: "var(--surface-color)",
          color: "var(--font-color)",
        });
      } else {
        const data = {
          email: email,
          senha: senha,
        };
        const response = await api.post("/login", { data });
        if (response.data.error) {
          Swal.fire({
            title: "Alerta!",
            text: response.data.error,
            icon: "warning",
            confirmButtonText: "OK",
            confirmButtonColor: "var(--primary-color)",
            background: "var(--surface-color)",
            color: "var(--font-color)",
          });
        } else {
          localStorage.setItem("token", response.data.token);
          history.push("/");
          window.location.reload();
        }
      }
    } else {
      if (
        email === "" ||
        senha === "" ||
        senhaConfirmacao === "" ||
        nome === ""
      ) {
        Swal.fire({
          title: "Alerta!",
          text: "Preencha todos os campos!",
          icon: "warning",
          confirmButtonText: "OK",
          confirmButtonColor: "var(--primary-color)",
          background: "var(--surface-color)",
          color: "var(--font-color)",
        });
      } else {
        if (!checked) {
          Swal.fire({
            title: "Alerta!",
            text: "Necessário concordar com os termos!",
            icon: "warning",
            confirmButtonText: "OK",
            confirmButtonColor: "var(--primary-color)",
            background: "var(--surface-color)",
            color: "var(--font-color)",
          });
        } else {
          if (senha != senhaConfirmacao) {
            Swal.fire({
              title: "Alerta!",
              text: "As senhas devem ser iguais!",
              icon: "warning",
              confirmButtonText: "OK",
              confirmButtonColor: "var(--primary-color)",
              background: "var(--surface-color)",
              color: "var(--font-color)",
            });
          } else {
            const data = {
              email: email,
              senha: senha,
              nome: nome,
            };
            const response = await api.post("/register", { data });
            if (response.data.error) {
              Swal.fire({
                title: "Alerta!",
                text: response.data.error,
                icon: "warning",
                confirmButtonText: "OK",
                confirmButtonColor: "var(--primary-color)",
                background: "var(--surface-color)",
                color: "var(--font-color)",
              });
            } else {
              localStorage.setItem("token", response.data.token);
              Swal.fire({
                title: "Sucesso!",
                text: response.data.success,
                icon: "success",
                confirmButtonText: "OK",
                confirmButtonColor: "var(--primary-color)",
                background: "var(--surface-color)",
                color: "var(--font-color)",
              });
              setTimeout(() => {
                history.push("/");
                window.location.reload();
              }, 2000);
            }
          }
        }
      }
    }
  }

  /**
   * Limpa os inputs
   */
  function clear() {
    setEmail("");
    setNome("");
    setSenha("");
    setSenhaConfirmacao("");
    setChecked(false);
  }

  return (
    <Background>
      <Container>
        <Menu>
          <Login
            login={login}
            onClick={() => {
              setLogin(true);
              clear();
            }}
          >
            Login
          </Login>
          <Register
            login={login}
            onClick={() => {
              setLogin(false);
              clear();
            }}
          >
            Cadastro
          </Register>
        </Menu>
        <Form onSubmit={handleSubmit}>
          {login ? (
            <>
              <Title>Login</Title>
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <Input
                type="password"
                placeholder="Senha"
                value={senha}
                onChange={(e) => {
                  setSenha(e.target.value);
                }}
              />
              <Button>Entrar</Button>
            </>
          ) : (
            <>
              <Title>Cadastro</Title>
              <Input
                type="name"
                placeholder="Nome"
                value={nome}
                onChange={(e) => {
                  setNome(e.target.value);
                }}
              />
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <Input
                type="password"
                placeholder="Senha"
                value={senha}
                onChange={(e) => {
                  setSenha(e.target.value);
                }}
              />
              <Input
                type="password"
                placeholder="Confirmar Senha"
                value={senhaConfirmacao}
                onChange={(e) => {
                  setSenhaConfirmacao(e.target.value);
                }}
              />
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
