import React from "react";
import styled from "styled-components";
import SecureImage from "./SecureImage";
import { photoData } from "../card/PhotoData";

const SecureDiv = styled.div`
  display: flex;
`;
const SecureLetter = styled.h1`
  font-size: 3rem;
  margin-left: 1rem;
  margin-right: 1rem;
`;

const SecureText = (props) => {
  const secureText = [];
  for (let i = 0; i < 10; i++) {
    secureText.push(<SecureLetter>{props.arr[i]}</SecureLetter>);
    i++;
    secureText.push(<SecureImage url={photoData[props.arr[i]].url} key={i} />);
  }
  console.log(`From secure text component ${secureText}`);
  return <SecureDiv>{secureText}</SecureDiv>;
};

export default SecureText;
