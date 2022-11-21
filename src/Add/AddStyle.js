import styled from "styled-components";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 400px;
  justify-content: space-between;
  position: relative;
  span {
    position: absolute;
    left: 0;
    padding: 20px;
    pointer-events: none;
    font-size: 1em;
    color: #990073;
    transition: 0.5s;
  }
  > p {
    font-family: "Raleway";
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;
    color: #fff;
    width: 90%;
    margin-left: 20px;
    margin-top: 40px;
    margin-bottom: 40px;
  }
  input {
    margin-bottom: 20px;
    width: 100%;
    height: 58px;
    border-radius: 5px;
    border: 1px solid rgba(255, 255, 255, 0.25);
    background: #f5eef6;
    outline: none;
    color: black;
    font-size: 1em;
    transition: 0.5s;
    ::placeholder {
      font-family: "Raleway";
      font-weight: 400;
      font-size: 20px;
      color: #000;
    }
    :valid {
      border: 1px solid #990073;
    }
    :focus {
      border: 1px solid #990073;
    }
  }
  input:valid ~ span {
    color: #990073;
    transform: translateX(10px) translateY(-4px);
    font-size: 0.65em;
    padding: 0 10px;
    background: #f5eef6;
    border-left: 1px solid #990073;
    border-right: 1px solid #990073;
    letter-spacing: 0.2em;
  }
  input:focus ~ span {
    color: #990073;
    transform: translateX(10px) translateY(-4px);
    font-size: 0.65em;
    padding: 0 10px;
    background: #f5eef6;
    border-left: 1px solid #990073;
    border-right: 1px solid #990073;
  }
`;

export default Content;
