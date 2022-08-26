import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  const navigator = useNavigate();

  const buttonHandler = () => {
    navigator("/");
  };

  return (
    <div className="container">
      <DIV>
        <H1>Not Found</H1>
        <P>Page is not found. Please try again!</P>
        <BUTTON onClick={buttonHandler}>
          <b>Back</b>
        </BUTTON>
      </DIV>
    </div>
  );
};

export default NotFound;

// css
const DIV = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50vw;
  height: 40vh;
  border: 7px solid #ff8220;
  border-radius: 10px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: #f7f7f7;
  z-index: 1;
`;
const H1 = styled.h1`
  margin-bottom: 30px;
  ::first-letter {
    color: #ff8220;
  }
`;
const P = styled.p`
  font-size: 1.2rem;
  margin-bottom: 30px;
`;
const BUTTON = styled.button`
  width: 90px;
  height: 40px;
  background: #00b2ff;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.4s;
  :hover {
    background: #ffa657;
    transition: all 0.4s;
  }
`;
