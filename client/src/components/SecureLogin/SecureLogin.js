import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import PhotoGrid from "../card/PhotoGrid";
import { useState } from "react";
import { useHistory } from "react-router";

const SimpleLoginDiv = styled.div`
  width: 40vw;
  height: 600px;
  /* background-color: red; */
  margin: 10rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px solid #a21caf;
  padding: 2rem;
  &:hover {
    box-shadow: #e2e8f0 0px 5px 15px;
  }
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 80%;
  justify-content: space-around;
  align-items: center;
`;
const FormDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Label = styled.label`
  font-size: 2.5rem;
  display: block;
`;

const Input = styled.input`
  width: 20rem;
  height: 3rem;
  border-radius: 0.5rem;
  background-color: transparent;
  border: 0.1rem solid white;
  color: white;
  font-size: 2rem;
`;

function SecureLogin() {
  const passwordRef = useRef();
  const emailRef = useRef();
  const [passwordState, passwordStateUpdate] = useState("");
  const history = useHistory();

  const updatePassword = (value) => {
    console.log(value);
    if (value !== undefined) passwordStateUpdate((prev) => prev + value);
    else passwordStateUpdate((prev) => prev.substring(0, prev.length - 2));
  };

  useEffect(() => {
    passwordRef.current.value += passwordState.substring(
      passwordState.length - 1
    );
    console.log(
      `passwordRef = ${passwordRef.current.value} passwordState = ${passwordState}`
    );
  }, [passwordState]);

  const submitHandler = (event) => {
    event.preventDefault();
    const data = {
      email: emailRef.current.value,
      passwordRef: passwordRef.current.value,
    };
    // Do Api call
    // if it is valid
    history.push("/login-secure/step-1/Tulasi");
  };

  return (
    <SimpleLoginDiv>
      <Form onSubmit={submitHandler}>
        <FormDiv>
          <Label for="name">Mail</Label>
          <Input id="name" type="email" ref={emailRef}></Input>
        </FormDiv>
        <FormDiv>
          <Label for="name">Key</Label>
          <Input id="name" type="password" ref={passwordRef}></Input>
        </FormDiv>
        <FormDiv>
          <Input
            type="submit"
            value="Login    "
            style={{ backgroundColor: "#166534" }}
          />
        </FormDiv>
      </Form>
      <PhotoGrid updatePassword={updatePassword}></PhotoGrid>
    </SimpleLoginDiv>
  );
}

export default SecureLogin;
