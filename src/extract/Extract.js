import styled from "styled-components";
import Body from "../assets/constants/Body";
import {
  ExitOutline,
  AddCircleOutline,
  RemoveCircleOutline,
} from "react-ionicons";
import { useNavigate } from "react-router-dom";
import {
  Conteiner,
  Header,
  Display,
  Bottom,
  Select,
  Values,
  Date,
  Name,
  ValueAndType,
  Line,
  DisplayScroll,
  Total,
} from "./ExtractStyle";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Extract() {
  const [extracts, setExtracts] = useState();
  let [total, setTotal] = useState();
  let navigate = useNavigate();
  const name = sessionStorage.getItem("name");
  const email = sessionStorage.getItem("email");

  useEffect(() => {
    const config = {
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("token"),
        email,
      },
    };
    console.log(email);
    axios
      .get("http://localhost:3333/extract", config)
      .then((res) => readData(res))
      .catch((err) => console.log(err));
  }, []);

  function readData(res) {
    let newTotal = 0;
    for (let i = 0; i < res.data.length; i++) {
      console.log(res.data[i].value);
      newTotal += res.data[i].value;
    }
    setTotal(newTotal);
    setExtracts(res.data);
    console.log(res.data);
  }

  function ChoicePath(valor) {
    switch (valor) {
      case "remove":
        navigate("/Remove");
        break;
      case "add":
        navigate("/Add");
        break;
      default:
        console.log("switch case did not work properly");
    }
  }

  return (
    <Body>
      <Conteiner>
        <Header>
          <p>Olá, {name}</p>
          <ExitOutline color={"#eeeeec"} height="30px" width="30px" />
        </Header>
        <Display>
          <Values>
            {extracts ? (
              extracts.map((obj, objIndex) => (
                <DisplayScroll>
                  <Line>
                    <Date>{obj.day}/</Date>
                    <Date>{obj.month}</Date>
                    <Name>{obj.text}</Name>
                    <ValueAndType
                      color={obj.type === "debit" ? "#cc0000" : "#33cc33"}
                    >
                      {obj.value}
                    </ValueAndType>
                  </Line>
                </DisplayScroll>
              ))
            ) : (
              <>
                {console.log(extracts)}
                <Name>deu ruim</Name>
              </>
            )}
          </Values>
          <Total>
            <p>SALDO</p>
            <div>{total}</div>
          </Total>
        </Display>
        <Bottom>
          <Select onClick={() => ChoicePath("remove")}>
            <span></span>
            <div>
              <RemoveCircleOutline
                color={"#eeeeec"}
                height="25px"
                width="25px"
              />
              <p>Nova</p>
              <p>Saida</p>
            </div>
          </Select>
          <Select onClick={() => ChoicePath("add")}>
            <h1></h1>
            <div>
              <AddCircleOutline color={"#eeeeec"} height="25px" width="25px" />
              <p>Nova</p>
              <p>Entrada</p>
            </div>
          </Select>
        </Bottom>
      </Conteiner>
    </Body>
  );
}
