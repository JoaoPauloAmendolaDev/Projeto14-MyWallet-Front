import styled from "styled-components";

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
  flex-direction: column;
  justify-content: space-between;
  width: 326px;
  height: min-content;
  height: 450px;
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

export const DisplayScroll = styled.div`
  height: fit-content;
  width: 100%;
  overflow-y: scroll;
  display: flex;
  justify-content: center;
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
    width: 250px;
    height: 250px;
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
    width: 250px;
    height: 250px;
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
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding-bottom: 15px;
    padding-left: 15px;
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
    p {
      font-family: "Raleway";
      font-weight: 700;
      font-size: 17px;
      color: #fff;
    }
  }
  h1 {
    position: absolute;
    inset: 5px;
    border-radius: 16px;
    z-index: 1;
  }
  span {
    position: absolute;
    left: 10px;
    top: 10px;
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
  width: 10%;
  height: 15px;
`;

const Name = styled.div`
  width: 65%;
  height: 15px;
  font-family: Raleway;
  font-weight: 500;
`;

const ValueAndType = styled.div`
  color: ${(props) => props.color};
  width: 15%;
  height: 15px;
  font-family: Raleway;
  font-weight: 500;
`;

const Line = styled.div`
  display: flex;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 90%;
`;

export const Total = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  height: 20px;
  margin-bottom: 10px;
  margin-left: 10px;
  p {
    font-weight: 700;
    font-family: "Raleway";
  }
`;

export {
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
};
