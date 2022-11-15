import styled from "styled-components";

const CenterContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.p`
  font-family: "Saira Stencil One";
  color: #fff;
  font-size: 30px;
`;

const FormConteiner = styled.div`
  margin-top: 50px;
`;

const Form = styled.div`
  margin-bottom: 10px;
  input {
    width: 326px;
    height: 58px;
    border-radius: 5px;
    background: #fef2e4;
    ::placeholder {
      font-size: 15px;
    }
  }
`;

const SignUp = styled.div`
  margin-top: 35px;
  font-size: 15px;
  font-family: "Raleway";
  font-weight: 700;
  color: #fff;
`;

export { CenterContent, Logo, FormConteiner, Form, SignUp };
