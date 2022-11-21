import axios from "axios";
import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Button from "../assets/constants/Button";
import Body from "../assets/constants/Body";
import SignUp from "./LoginStyle";
import Logo from "../assets/constants/Logo";
import Form from "../assets/constants/Form";
import FormConteiner from "../assets/constants/FormConteiner";
import CenterContent from "../assets/constants/CenterContent";
import Content from "../assets/constants/Content";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  let navigate = useNavigate();

  function handleLogin() {
    if (!email || !password) {
      return alert("Preencha os campos solicitados");
    }

    axios
      .post("http://localhost:3333/sign-in", { email, password })
      .then((obj) => {
        sessionStorage.setItem("token", obj.data.token);
        sessionStorage.setItem("name", obj.data.name);
        sessionStorage.setItem("email", email);
        navigate("/extract");
      })
      .catch((err) => console.log(err));
  }

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
          <Content>
            <input
              type={"email"}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
              required="required"
              avaible={loading ? "#F2F2F2" : "#fff"}
            ></input>
            <span>E-mail</span>
          </Content>
          <Content>
            <input
              type={"password"}
              onChange={(e) => setPassword(e.target.value)}
              disabled={loading}
              required="required"
              avaible={loading ? "#F2F2F2" : "#fff"}
            ></input>
            <span>Senha</span>
          </Content>
        </FormConteiner>
        <Button>
          <p onClick={() => handleLogin()}>Entrar</p>
        </Button>
        <SignUp onClick={() => goTo("SignUp")}>
          Primeira vez? Cadastre-se!
        </SignUp>
      </CenterContent>
    </Body>
  );
}
