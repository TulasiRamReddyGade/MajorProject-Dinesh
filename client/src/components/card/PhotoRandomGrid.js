import React from "react";
import styled from "styled-components";
import { photoData } from "./PhotoData";

const PhotoGridDiv = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 2rem;
  width: max-content;
  height: max-content;
`;

const Photo = styled.img`
  width: 6rem;
  height: 6rem;
  &:hover {
    cursor: pointer;
  }
`;

const PhotoRandomGrid = (props) => {
  //   const data = photoData.((el,index) => <Photo src={el.url} />);

  const data = [];

  props.photoIndices.forEach((el) =>
    data.push(<Photo src={photoData[el].url} />)
  );

  return <PhotoGridDiv>{data}</PhotoGridDiv>;
};

export default PhotoRandomGrid;
