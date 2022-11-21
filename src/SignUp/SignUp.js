import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Body from "../assets/constants/Body";
import Button from "../assets/constants/Button";
import CenterContent from "../assets/constants/CenterContent";
import Content from "../assets/constants/Content";
import FormConteiner from "../assets/constants/FormConteiner";
import Logo from "../assets/constants/Logo";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  let navigate = useNavigate();

  function goTo(text) {
    if (text === "Login") {
      navigate("/");
    }
  }

  function test() {
    setLoading(true);

    if (password !== passwordConfirm) {
      return alert("As senhas devem coincidir");
    }

    if (email && name && password && passwordConfirm) {
      axios
        .post("http://localhost:3333/sign-up", { email, password, name })
        .then((obj) => {
          sessionStorage.setItem("name", name);
          sessionStorage.setItem("token", obj.data.token);
          sessionStorage.setItem("email", email);
          navigate("/extract");
        })
        .catch((err) => console.log(err));
    } else {
      return alert("preencha corretamente os campos");
    }
  }

  return (
    <Body>
      <CenterContent>
        <Logo>MyWallet</Logo>
        <FormConteiner>
          <Content>
            <input
              onChange={(e) => setName(e.target.value)}
              disabled={loading}
              required="required"
              avaible={loading ? "#f2f2f2" : "#fff"}
            ></input>
            <span>Nome</span>
          </Content>
          <Content>
            <input
              type={"email"}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
              required="required"
              avaible={loading ? "#f2f2f2" : "#fff"}
            ></input>
            <span>E-mail</span>
          </Content>
          <Content>
            <input
              type={"password"}
              onChange={(e) => setPassword(e.target.value)}
              disabled={loading}
              required="required"
              avaible={loading ? "#f2f2f2" : "#fff"}
            ></input>
            <span>Senha</span>
          </Content>
          <Content>
            <input
              type={"password"}
              onChange={(e) => setPasswordConfirm(e.target.value)}
              disabled={loading}
              required="required"
              avaible={loading ? "#f2f2f2" : "#fff"}
            ></input>
            <span>Confirme a senha</span>
          </Content>
        </FormConteiner>
        <Button>
          <p onClick={() => test()}>Cadastrar</p>
        </Button>
        <Text onClick={() => goTo("Login")}>Já tem uma conta?</Text>
      </CenterContent>
    </Body>
  );
}

const Text = styled.div`
  padding-top: 30px;
  color: #fff;
  font-family: "Raleway";
  font-size: large;
  font-weight: 700;
`;
