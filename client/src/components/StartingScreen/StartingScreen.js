import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StartingScreenDiv = styled.div`
  width: 40vw;
  height: 35rem;
  /* background-color: red; */
  margin: 20rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border: 2px solid #a21caf;
  &:hover {
    box-shadow: #e2e8f0 0px 5px 15px;
  }
`;
const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
const SimpleLoginButton = styled.button`
  color: white;
  background-color: #2563eb;
  display: block;
  padding: 1rem 2.1rem;
  border-radius: 0.5rem;
  & a:hover,
  & a:active,
  & a:visited,
  & a:link {
    font-size: 1.8rem;
    text-decoration: none;
    color: white;
  }
`;
const SecureLoginButton = styled.button`
  color: white;
  background-color: #22c55e;
  display: block;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  & a:hover,
  & a:active,
  & a:visited,
  & a:link {
    font-size: 1.8rem;
    text-decoration: none;
    color: white;
  }
`;
const StartingScreenSignUp = styled.h2`
  margin-top: 5rem;
  /* font-family: sans-serif; */
`;
const StartingScreen = () => {
  return (
    <StartingScreenDiv>
      <h1>Authentication Scheme</h1>
      <Div>
        <SimpleLoginButton>
          <NavLink to="/login-simple">Simple Login</NavLink>
        </SimpleLoginButton>
        <h2>or</h2>
        <SecureLoginButton>
          <NavLink to="/login-secure">Secure Login</NavLink>
        </SecureLoginButton>
        <StartingScreenSignUp>
          If new user <NavLink to="/register">Register</NavLink>
        </StartingScreenSignUp>
      </Div>
    </StartingScreenDiv>
  );
};

export default StartingScreen;
