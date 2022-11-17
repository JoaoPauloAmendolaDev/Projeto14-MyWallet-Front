import styled from "styled-components";
import Body from "../assets/constants/Body";
import { ExitOutline } from "react-ionicons";

const fakeAPI = [
  {
    date: "10/03",
    text: "Jantar iFood",
    value: "30.90",
    type: "debit",
  },
  {
    date: "10/03",
    text: "Jantar iFood",
    value: "30.90",
    type: "debit",
  },
  {
    date: "10/03",
    text: "Jantar iFood",
    value: "30.90",
    type: "debit",
  },
  {
    date: "10/03",
    text: "Jantar iFood",
    value: "30.90",
    type: "debit",
  },
];

export default function Extract() {
  return (
    <Body>
      <Conteiner>
        <Header>
          <p>Olá, Fulano</p>
          <ExitOutline color={"#eeeeec"} height="30px" width="30px" />
        </Header>
        <Display>
          <Values>
            {fakeAPI.map((obj, objIndex) => (
              <Line>
                <Date>{obj.date}</Date>
                <Name>{obj.text}</Name>
                <ValueAndType>{obj.value}</ValueAndType>
              </Line>
            ))}
          </Values>
        </Display>
        <Bottom>
          <Select>
            <span></span>
            <div></div>
          </Select>
          <Select>
            <span></span>
            <div></div>
          </Select>
        </Bottom>
      </Conteiner>
    </Body>
  );
}

const Conteiner = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px auto;
  padding-bottom: 10px;
  width: 80%;
  p {
    font-size: 26px;
    font-family: "Raleway";
    font-weight: 700;
    color: #fff;
  }
`;

const Display = styled.div`
  display: flex;
  justify-content: center;
  width: 326px;
  height: 446px;
  margin: auto auto;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(213, 195, 224, 1) 50%,
    rgba(154, 113, 173, 1) 100%
  );
  border-radius: 5px;
`;

const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto auto;
  padding-top: 20px;
  width: 87%;
`;

const Select = styled.div`
  width: 156px;
  height: 114px;
  border-radius: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;

  z-index: 2;
  ::after {
    content: "";
    position: absolute;
    width: 500px;
    height: 500px;
    background-image: conic-gradient(
      transparent,
      transparent,
      transparent,
      #621881
    );
    animation: animate 4s linear infinite;
    animation-delay: -2s;
  }
  ::before {
    content: "";
    position: absolute;
    width: 500px;
    height: 500px;
    background-image: conic-gradient(
      transparent,
      transparent,
      transparent,
      #621881
    );
    animation: animate 4s linear infinite;
  }

  @keyframes animate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  div {
    width: 96%;
    height: 96%;
    z-index: 3;
    border-radius: 10px;
    background: rgb(125, 58, 158);
    background: linear-gradient(
      180deg,
      rgba(125, 58, 158, 1) 0%,
      rgba(166, 123, 191, 1) 50%,
      rgba(189, 157, 195, 1) 100%
    );
  }
  span {
    position: absolute;
    inset: 5px;
    border-radius: 16px;
    z-index: 1;
  }
`;

const Values = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  height: fit-content;
  flex-wrap: wrap;
`;

const Date = styled.div`
  width: 20%;
  height: 15px;
`;

const Name = styled.div`
  width: 65%;
  height: 15px;
  font-family: Raleway;
  font-weight: 500;
`;

const ValueAndType = styled.div`
  width: 15%;
  height: 15px;
  font-family: Raleway;
`;

const Line = styled.div`
  display: flex;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 100%;
`;
