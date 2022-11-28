import React, { useRef } from "react";
import styled from "styled-components";
import PhotoRandomGrid from "../card/PhotoRandomGrid";
import AlphabetRandomGrid from "../card/AlphabetRandomGrid";
import { useParams } from "react-router";

const StepOneDiv = styled.div`
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
  gap: 2rem;
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

const StepOne = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const params = useParams();

  console.log();

  return (
    <StepOneDiv>
      <Form>
        <FormDiv>
          <Label for="name">Mail</Label>
          <Input
            id="name"
            type="email"
            ref={emailRef}
            value={params.username}
          ></Input>
        </FormDiv>
        <FormDiv>
          <Label for="password">Password</Label>
          <Input id="password" type="password" ref={passwordRef}></Input>
        </FormDiv>
        <FormDiv>
          <PhotoRandomGrid photoIndices={[1, 2, 3, 4, 5, 6, 7, 8, 9]} />
          <AlphabetRandomGrid
            alphabets={["A", "D", "E", "K", "O", "P", "Q", "B", "V"]}
          />
        </FormDiv>
        <FormDiv>
          <Input
            type="submit"
            value="Login"
            style={{ backgroundColor: "#166534" }}
          />
        </FormDiv>
      </Form>
    </StepOneDiv>
  );
};

export default StepOne;
