import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Body from "../assets/constants/Body";
import Button from "../assets/constants/Button";
import CenterContent from "../assets/constants/CenterContent";
import Form from "../assets/constants/Form";
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
    if (email && name && password && passwordConfirm) {
      let object = {
        email: email,
        name: name,
        password: password,
        passwordConfirm: passwordConfirm,
      };
    }
  }

  return (
    <Body>
      <CenterContent>
        <Logo>MyWallet</Logo>
        <FormConteiner>
          <Form>
            <input
              placeholder="Nome"
              onChange={(e) => setName(e.target.value)}
              disabled={loading}
              avaible={loading ? "#f2f2f2" : "#fff"}
            ></input>
          </Form>
          <Form>
            <input
              type={"email"}
              placeholder="E-mail"
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
              avaible={loading ? "#f2f2f2" : "#fff"}
            ></input>
          </Form>
          <Form>
            <input
              type={"password"}
              placeholder="Senha"
              onChange={(e) => setPassword(e.target.value)}
              disabled={loading}
              avaible={loading ? "#f2f2f2" : "#fff"}
            ></input>
          </Form>
          <Form>
            <input
              type={"password"}
              placeholder="Confirme a senha"
              onChange={(e) => setPasswordConfirm(e.target.value)}
              disabled={loading}
              avaible={loading ? "#f2f2f2" : "#fff"}
            ></input>
          </Form>
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
