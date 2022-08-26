import React, { useState } from "react";
import styled from "styled-components";
import "./ImageSlider.css";

// icons
import right from "../assets/icons8-right-30.png";
import left from "../assets/icons8-left-30.png";

const ImageSlider = ({ srcImage }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goNext = () => {
    setCurrentIndex((preventCount) => preventCount + 1);
    if (currentIndex === srcImage.length - 1) setCurrentIndex(0);
  };

  const goPrevious = () => {
    setCurrentIndex((preventCount) => preventCount - 1);
    if (currentIndex === 0) setCurrentIndex(5);
  };

  return (
    <>
      <DIV style={{ backgroundImage: `url(${srcImage[currentIndex].url})` }}>
        <LEFT className="icon" onClick={goNext}>
          <img src={left} alt="iconLeft" />
        </LEFT>
        <RIGHT className="icon" onClick={goPrevious}>
          <img src={right} alt="iconRight" />
        </RIGHT>
      </DIV>
    </>
  );
};

export default ImageSlider;

// css
const DIV = styled.div`
  width: 100vw;
  height: 350px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 800px;
  margin-top: 40px;
  @media (min-width: 881px) and (max-width: 2105px) {
    width: 800px;
    height: 350px;
    background-repeat: no-repeat;
    background-position: center;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }
  @media (min-width: 617px) and (max-width: 880px) {
    width: 600px;
    height: 350px;
    background-repeat: no-repeat;
    background-position: center;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }
  @media (max-width: 616px) {
    width: calc(100vw - 10vw);
    height: 350px;
    background-repeat: no-repeat;
    background-position: center;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }
`;
const LEFT = styled.div`
  position: absolute;
  left: 17vw;
  top: 51%;
  transform: translate(-17%, -50%);
  transition: all 0.2s ease-in;
  :hover {
    background: #ff6818;
    transition: all 0.2s ease-in;
  }
  @media (min-width: 881px) and (max-width: 2105px) {
    position: absolute;
    left: 15px;
  }
  @media (min-width: 617px) and (max-width: 880px) {
    position: absolute;
    left: 15px;
  }
  @media (max-width: 616px) {
    position: absolute;
    left: 15px;
  }
`;
const RIGHT = styled.div`
  position: absolute;
  left: 84%;
  top: 51%;
  transform: translate(-84%, -50%);
  transition: all 0.2s ease-in;
  :hover {
    background: #ff6818;
    transition: all 0.2s ease-in;
  }
  @media (min-width: 881px) and (max-width: 2105px) {
    position: absolute;
    left: 785px;
  }
  @media (min-width: 617px) and (max-width: 880px) {
    position: absolute;
    left: 585px;
  }
  @media (max-width: 616px) {
    position: absolute;
    left: 97%;
  }
`;
