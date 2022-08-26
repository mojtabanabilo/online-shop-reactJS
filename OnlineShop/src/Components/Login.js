import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css";

// library
import styled from "styled-components";

// image
import logo from "../assets/logo.png";
import user from "../assets/icons8-user-48.png";
import lock from "../assets/icons8-lock-48.png";

// function
import loginError from "./LoginErrors";

const notify = (text, type) => {
  if (type === "success") toast(text);
  else if (type === "invalid") toast(text);
};

const Login = () => {
  const [data, setData] = useState({
    massageUserName: "",
    massagePassword: "",
    isAccepted: false,
  });

  const [errors, setErrors] = useState({});

  const [touch, setTouch] = useState({});

  useEffect(() => {
    setErrors(loginError(data));
  }, [data, touch]);

  const changeHandler = (event) => {
    if (event.target.name === "isAccepted") {
      setData({ ...data, [event.target.name]: event.target.checked });
    } else {
      setData({ ...data, [event.target.name]: event.target.value });
    }
  };

  const focusHandler = (event) => {
    setTouch({ ...touch, [event.target.name]: true });
  };

  const navigate = useNavigate();
  const buttonHandler = () => {
    if (Object.keys(errors).length === 0) {
      notify("sign up successfully", "success");
      setTimeout(() => {
        navigate("/", { replace: true });
      }, 5000);
    } else if (Object.keys(errors).length > 0) {
      notify("invalid data", "invalid");
      setTimeout(() => {
        window.location.reload();
      }, 5000);
    }
  };

  return (
    <div className="content">
      <DIV>
        <DIV2>
          <IMG src={logo} alt="logo" />
        </DIV2>
        <TITLE>Sign up</TITLE>
        <DIV_INPUT1>
          <ICON src={user} alt="user-icon" />
          <INPUT
            type="text"
            name="massageUserName"
            placeholder="usename"
            value={data.massageUserName}
            onChange={changeHandler}
            onFocus={focusHandler}
          />
        </DIV_INPUT1>
        <div>
          {errors.massageUserName && touch.massageUserName && (
            <SPAN_INPUT>{errors.massageUserName}</SPAN_INPUT>
          )}
        </div>
        <DIV_INPUT2>
          <ICON src={lock} alt="lock-icon" />
          <INPUT
            type="password"
            name="massagePassword"
            placeholder="password"
            value={data.massagePassword}
            onChange={changeHandler}
            onFocus={focusHandler}
          />
        </DIV_INPUT2>
        <div>
          {errors.massagePassword && touch.massagePassword && (
            <SPAN_INPUT>{errors.massagePassword}</SPAN_INPUT>
          )}
        </div>
        <DIV_INPUT3>
          <DIV_INPUT3_DIV1>
            <P>Accept the rules</P>
            <input
              type="checkbox"
              name="isAccepted"
              value={data.isAccepted}
              onChange={changeHandler}
              onFocus={focusHandler}
            />
          </DIV_INPUT3_DIV1>
          <div>
            {errors.isAccepted && touch.isAccepted && (
              <SPAN_CHECKBOX>{errors.isAccepted}</SPAN_CHECKBOX>
            )}
          </div>
        </DIV_INPUT3>
        <BUTTON onClick={buttonHandler}>
          <b>submit</b>
        </BUTTON>
      </DIV>
      <ToastContainer />
    </div>
  );
};

export default Login;

// styles
const DIV = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #eaeaea;
  width: 400px;
  height: 550px;
  border-radius: 40px;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: -10px 10px 15px rgba(0, 0, 0, 0.5);
  @media (max-width: 1254px) {
  }
`;
const DIV2 = styled.div`
  margin-top: -50px;
  box-shadow: 3px 3px 1px #cfcfcf, -3px -3px 1px #cfcfcf, 3px -3px 1px #cfcfcf,
    -3px 3px 1px #cfcfcf, -5px 5px 10px #252525;
  border-radius: 50%;
`;
const DIV_INPUT1 = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 35px;
  position: relative;
`;
const DIV_INPUT2 = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 17px;
  position: relative;
`;
const DIV_INPUT3 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 40px;
`;
const DIV_INPUT3_DIV1 = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
`;
const INPUT = styled.input`
  :focus {
    outline: none;
  }
  ::placeholder {
    font-size: 0.9rem;
  }
  border: none;
  width: 300px;
  height: 40px;
  border-radius: 10px;
  font-size: 0.9rem;
  padding-left: 30px;
  box-shadow: inset 1px 1px 1px gray;
`;
const TITLE = styled.h1`
  font-size: 1.5rem;
  margin-top: 20px;
  ::first-letter {
    color: #ff6818;
  }
`;
const IMG = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
`;
const ICON = styled.img`
  width: 20px;
  height: 20px;
  position: absolute;
  left: 5px;
`;
const BUTTON = styled.button`
  width: 120px;
  height: 50px;
  background: #40cbff;
  transition: 0.5s;
  border: none;
  margin-top: 25px;
  font-size: 1.3rem;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: -5px 5px 7px rgba(0, 0, 0, 0.5);
  :hover {
    background: #65ff8f;
    transition: 0.5s;
  }
`;
const P = styled.p`
  margin-left: 5px;
  font-size: 0.9rem;
`;
const SPAN_INPUT = styled.span`
  background: #ffd8d8;
  font-size: 0.8rem;
  color: #ff0000;
  position: absolute;
  left: 20%;
  transform: translateX(-15%);
  z-index: 1;
`;
const SPAN_CHECKBOX = styled.span`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  background: #ffd8d8;
  font-size: 0.8rem;
  color: #ff0000;
`;
