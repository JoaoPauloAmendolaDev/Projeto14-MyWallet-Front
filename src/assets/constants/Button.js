import styled from "styled-components";

const Button = styled.div`
  width: 326px;
  height: 56px;
  position: relative;
  :hover p {
    letter-spacing: 3px !important;
  }
  :hover p::before {
    transform: skewX(45deg) translateX(200%);
  }
  :hover p::after {
    transform: skewX(45deg) translateX(200%);
  }
  ::before {
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -5%;
    width: 50px;
    height: 10px;
    background-color: #f00;
    border-radius: 10px;
    transition: 0.5s;
    backdrop-filter: blur(10px);
    background: #990099;
    box-shadow: 0 0 5px #990099, 0 0 15px #990099, 0 0 30px #990099,
      0 0 60px #990099;
  }
  ::after {
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: -5%;
    width: 50px;
    height: 10px;
    background-color: #f00;
    border-radius: 10px;
    transition: 0.5s;
    backdrop-filter: blur(10px);
    background: #990099;
    box-shadow: 0 0 5px #990099, 0 0 15px #990099, 0 0 30px #990099,
      0 0 60px #990099;
  }
  :hover::before {
    bottom: 0;
    height: 50%;
    width: 90%;
    border-radius: 30px;
    transition-delay: 0.5s;
  }
  :hover::after {
    top: 0;
    height: 50%;
    width: 90%;
    border-radius: 30px;
    transition-delay: 0.5s;
  }
  p {
    font-family: "Raleway";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(255, 255, 255, 0.05);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
    border-top: 1px solid sikud rgba(255, 255, 255, 0.1);
    border-bottom: 1px solid sikud rgba(255, 255, 255, 0.1);
    border-radius: 30px;
    color: #fff;
    z-index: 1;
    font-weight: 400;
    letter-spacing: 1px;
    text-decoration: none;
    overflow: hidden;
    transition: 0.5s;
    backdrop-filter: blur(15px);
    :hover {
      letter-spacing: 3px;
    }
    ::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 50%;
      height: 100%;
      background: linear-gradient(
        to left,
        rgba(255, 255, 255, 0.15),
        transparent
      );
      transform: skewX(45deg) translateX(0);
      transition: 0.5s;
    }
    ::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 50%;
      height: 100%;
      background: linear-gradient(
        to left,
        rgba(255, 255, 255, 0.15),
        transparent
      );
      transform: skewX(45deg) translateX(0);
      transition: 0.5s;
    }
  }
`;

export default Button;
