import React from "react";
import styled from "styled-components";

const AphabetGridDiv = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 2rem;
  width: max-content;
  height: max-content;
`;

const AlphabetDiv = styled.div`
  width: 6rem;
  height: 6rem;
  font-size: 2rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    cursor: pointer;
  }
`;

const AlphabetRandomGrid = (props) => {
  const data = [];
  props.alphabets.forEach((el) => data.push(<AlphabetDiv>{el}</AlphabetDiv>));
  return <AphabetGridDiv>{data}</AphabetGridDiv>;
};

export default AlphabetRandomGrid;
