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
  EsqueciSenha,
} from "./style";
import api from "../../services/api";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";
import { IoMdCheckmark } from "react-icons/io";

export default function Index() {
  const history = useHistory();
  const [tela, setTela] =
    useState(0); /** 0 - login | 1 - cadastro | 2 - recuperação */
  const [checked, setChecked] = useState(false);
  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");
  const [senhaConfirmacao, setSenhaConfirmacao] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    if (tela === 0) {
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
          history.push("/home");
          window.location.reload();
        }
      }
    } else if (tela === 1) {
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
                history.push("/home");
                window.location.reload();
              }, 2000);
            }
          }
        }
      }
    } else if (tela === 2) {
      const data = {
        email: email,
      };
      const response = await api.post("/recover", { data });
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
        Swal.fire({
          title: "Sucesso!",
          text: response.data.success,
          icon: "success",
          confirmButtonText: "OK",
          confirmButtonColor: "var(--primary-color)",
          background: "var(--surface-color)",
          color: "var(--font-color)",
        });
        clear();
        setTela(0);
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
            tela={tela}
            onClick={() => {
              setTela(0);
              clear();
            }}
          >
            Login
          </Login>
          <Register
            tela={tela}
            onClick={() => {
              setTela(1);
              clear();
            }}
          >
            Cadastro
          </Register>
        </Menu>
        <Form onSubmit={handleSubmit}>
          {tela === 0 ? (
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
              <EsqueciSenha
                onClick={() => {
                  setTela(2);
                  clear();
                }}
              >
                Esqueci minha senha
              </EsqueciSenha>
              <Button>Entrar</Button>
            </>
          ) : tela === 1 ? (
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
                >
                  <IoMdCheckmark
                    style={{ transition: "all 0.3s ease-in-out" }}
                    color={checked ? "var(--secondary-color)" : "transparent"}
                  />
                </Checkbox>
                Concordo com os&nbsp;
                <a href="https://google.com" target="_blank">
                  termos
                </a>
              </CheckboxContainer>
              <Button>Cadastrar</Button>
            </>
          ) : (
            <>
              <Title>Recuperação</Title>
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <Button>Enviar</Button>
            </>
          )}
        </Form>
      </Container>
    </Background>
  );
}
