import styled from "styled-components";
import Body from "../assets/constants/Body";
import Button from "../assets/constants/Button";
import Content from "../Add/AddStyle";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Remove() {
  const [value, setValue] = useState();
  const [name, setName] = useState("");
  let navigate = useNavigate();

  useEffect(() => {
    setValue(Number(value));
  }, [value]);
  console.log(value);

  function submit() {
    if (name.length < 3) {
      alert("A descrição deve ter no mínimo 3 caracteres");
    }
    if (!name) {
      alert("Preencha a descrição");
    }
    if (!value || typeof value != "number") {
      console.log(value, typeof value);
      alert("preencha o valor corretamente");
    }

    const email = sessionStorage.getItem("email");
    const config = {
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("token"),
        email,
      },
    };

    axios
      .post(
        "http://localhost:3333/extract",
        {
          text: name,
          value,
          type: "debit",
        },
        config
      )
      .then((res) => {
        console.log("sucesso");
        navigate("/extract");
      })
      .catch((err) => console.log(err, "deu erro"));
  }

  return (
    <Body>
      <Content>
        <p>Nova saída</p>
        <div>
          <InputBox>
            <input
              onChange={(e) => setValue(e.target.value)}
              required="required"
            ></input>
            <span>Valor</span>
          </InputBox>
          <InputBox>
            <input
              onChange={(e) => setName(e.target.value)}
              required="required"
            ></input>
            <span>Descrição</span>
          </InputBox>
        </div>
        <Button onClick={() => submit()}>
          <p>Salvar saida</p>
        </Button>
      </Content>
    </Body>
  );
}

const InputBox = styled.div`
  position: relative;
`;
