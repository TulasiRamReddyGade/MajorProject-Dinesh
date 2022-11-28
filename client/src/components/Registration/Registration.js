import React from "react";
import styled from "styled-components";
import { useReducer, useRef, useState, useEffect } from "react";
import SecureText from "./SecureText";
import { Redirect } from "react-router";
import { photoData } from "../card/PhotoData";
import PhotoGrid from "../card/PhotoGrid";

const RegistrationDiv = styled.div`
  width: 50vw;
  height: 1000px;
  /* background-color: red; */
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px solid #a21caf;
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

const reducerFunction = (prevState, action) => {
  if (action.type === "submitted" && !prevState.visible) {
    const secureText = [];
    for (let i = 0; i < 5; i++) {
      const num = Math.trunc(Math.random() * 25 + 1);
      const char = String.fromCharCode(97 + num);
      const id = Math.trunc(Math.random() * 26);
      secureText.push(char);
      secureText.push(id);
    }
    console.log(secureText);
    return {
      visible: true,
      secureText: secureText,
    };
  }
  return prevState;
};
let count = 0;
export const Registration = () => {
  const name = useRef();
  const dob = useRef();
  const mobile = useRef();
  const mail = useRef();
  const password = useRef();

  const [passwordState, passwordStateUpdate] = useState("");

  const updatePassword = (value) => {
    console.log(value);
    if (value !== undefined) passwordStateUpdate((prev) => prev + value);
    else passwordStateUpdate((prev) => prev.substring(0, prev.length - 2));
  };

  useEffect(() => {
    password.current.value += passwordState.substring(passwordState.length - 1);
    console.log(
      `passwordRef = ${password.current.value} passwordState = ${passwordState}`
    );
  }, [passwordState]);
  const [secureState, secureStateUpdate] = useReducer(reducerFunction, {
    visible: false,
    secureText: [],
  });
  count++;
  console.log(count);
  console.log(secureState);
  const submitHandler = (event) => {
    if (!secureState.visible) {
      event.preventDefault();
      secureStateUpdate({ type: "submitted" });
    } else {
      event.preventDefault();
      // getting form data
      const securePassword = [];
      for (let i = 0; i < 10; i++) {
        securePassword.push(secureState.secureText[i]);
        i++;
        securePassword.push(photoData[secureState.secureText[i]].name);
      }
      console.log(name);
      const data = {
        name: name.current.value,
        dob: dob.current.value,
        mobile: mobile.current.value,
        password: password.current.value,
        securePassword,
      };
      console.log(data);
      // api to call

      // if api call success back to home page
    }
  };

  return (
    <RegistrationDiv>
      <Form onSubmit={submitHandler}>
        <FormDiv>
          <Label for="Name">Name</Label>
          <Input id="Name" type="text" ref={name} />
        </FormDiv>
        <FormDiv>
          <Label for="DOB">DOB</Label>
          <Input id="DOB" type="date" ref={dob} />
        </FormDiv>
        <FormDiv>
          <Label for="MobileNumber">MobileNumber</Label>
          <Input id="MobileNumber" type="text" ref={mobile} />
        </FormDiv>
        <FormDiv>
          <Label for="Mail">Mail</Label>
          <Input id="Mail" type="email" ref={mail} />
        </FormDiv>
        <FormDiv>
          <Label for="Password">Password</Label>
          <Input id="Password" type="Password" ref={password} />
        </FormDiv>
        <PhotoGrid updatePassword={updatePassword} />
        <FormDiv>
          <Input
            type="submit"
            value="Register"
            style={{ backgroundColor: "#b91c1c" }}
          />
        </FormDiv>
      </Form>
      {secureState.visible && (
        <SecureText arr={secureState.secureText}></SecureText>
      )}
    </RegistrationDiv>
  );
};
