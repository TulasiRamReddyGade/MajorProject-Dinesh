import React from "react";
import styled from "styled-components";
import { photoData } from "./PhotoData";

const PhotoGridDiv = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto auto auto;
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

const PhotoGrid = (props) => {
  let photoChilds = photoData.map((el, index) => (
    <Photo
      src={el.url}
      onClick={() => {
        clickHandler(el.specialChar);
      }}
    />
  ));
  console.log(photoChilds);

  const clickHandler = (index) => {
    console.log(index);
    props.updatePassword(index);
  };
  return <PhotoGridDiv>{photoChilds}</PhotoGridDiv>;
};

export default PhotoGrid;
