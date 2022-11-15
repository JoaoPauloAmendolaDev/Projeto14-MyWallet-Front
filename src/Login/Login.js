import axios from "axios";
import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../assets/constants/Button";
import Body from "../assets/constants/Body";
import { CenterContent, Logo, FormConteiner, Form, SignUp } from "./LoginStyle";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  let navigate = useNavigate();

  function goTo(Where) {
    switch (Where) {
      case "SignUp":
        navigate("/SignUp");
        break;
    }
  }

  return (
    <Body>
      <CenterContent>
        <Logo>
          <p>MyWallet</p>
        </Logo>
        <FormConteiner>
          <Form>
            <input
              type={"email"}
              placeholder="E-mail"
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
              avaible={loading ? "#F2F2F2" : "#fff"}
            ></input>
          </Form>
          <Form>
            <input
              type={"password"}
              placeholder="Senha"
              onChange={(e) => setPassword(e.target.value)}
              disabled={loading}
              avaible={loading ? "#F2F2F2" : "#fff"}
            ></input>
          </Form>
        </FormConteiner>
        <Button>
          <p>Entrar</p>
        </Button>
        <SignUp onClick={() => goTo("SignUp")}>
          Primeira vez? Cadastre-se!
        </SignUp>
      </CenterContent>
    </Body>
  );
}
