import React from "react";
import styled from "styled-components";

const Img = styled.img`
  height: 5rem;
  width: 5rem;
`;

const SecureImage = (props) => {
  return <Img src={props.url} />;
};

export default SecureImage;
