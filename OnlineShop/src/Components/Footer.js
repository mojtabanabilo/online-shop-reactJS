import React from "react";
import styled from "styled-components";
import "./Footer.css";

// images
import img1 from "../assets/icons8-location-48.png";
import img2 from "../assets/icons8-phone-30.png";
import img3 from "../assets/icons8-mail-48.png";
import img4 from "../assets/icons8-facebook-30.png";
import img5 from "../assets/icons8-twitter-30.png";
import img6 from "../assets/icons8-instagram-24.png";
import img7 from "../assets/icons8-github-30.png";

const Footer = () => {
  return (
    <>
      <FOOTER className="footer_container">
        <F1 className="f1">
          <F1_ICONS>
            <F1_TEXT>
              <DIV_ICON>
                <IMG src={img1} alt="icon" />
              </DIV_ICON>
              <H3>
                21 revolution street <br />
                paris, france
              </H3>
            </F1_TEXT>
            <F1_TEXT>
              <DIV_ICON>
                <IMG src={img2} alt="icon" />
              </DIV_ICON>
              <H4>+1 555 847236</H4>
            </F1_TEXT>
            <F1_TEXT>
              <DIV_ICON>
                <IMG src={img3} alt="icon" />
              </DIV_ICON>
              <A href="#">support@gmail.com</A>
            </F1_TEXT>
          </F1_ICONS>
        </F1>
        <F2 className="f2">
          <TITLE>
            <h1>About the company</h1>
          </TITLE>
          <DESCRIPTION>
            <P_DESCRIPTION>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              <br /> Maiores ex et ea dicta quis totam, eaque incidunt quos{" "}
              <br />
              voluptas, corrupti consectetur aut aspernatur inventore <br />
              vero atque voluptatibus dolores officia illum!
            </P_DESCRIPTION>
          </DESCRIPTION>
          <F2_ICONS>
            <DIV_ICON2>
              <IMG2 src={img4} alt="icon" />
            </DIV_ICON2>
            <DIV_ICON2>
              <IMG2 src={img5} alt="icon" />
            </DIV_ICON2>
            <DIV_ICON2>
              <IMG2 src={img6} alt="icon" />
            </DIV_ICON2>
            <DIV_ICON2>
              <IMG2 src={img7} alt="icon" />
            </DIV_ICON2>
          </F2_ICONS>
        </F2>
      </FOOTER>
    </>
  );
};

export default Footer;

// Css
const FOOTER = styled.footer`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #343434;
  margin-top: 50px;
  color: #ffffff;
  position: relative;
  @media (max-width: 821px) {
    height: 550px;
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
  }
`;
const DIV_ICON = styled.div`
  background: #434343;
  border-radius: 50%;
  width: 45px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 10px 0;
`;
const IMG = styled.img`
  width: 30px;
  height: 30px;
  transition: all 0.5s;
  :hover {
    transform: rotateY(180deg);
  }
`;
const F1 = styled.div`
  width: 30vw;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 50px;
  @media (max-width: 821px) {
    width: 100vw;
  }
  @media (max-width: 312px) {
    margin-top: 50px;
  }
`;
const F1_ICONS = styled.div`
  width: 300px;
  @media (max-width: 821px) {
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 60px;
  }
  @media (max-width: 669px) {
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
  }
`;
const F1_TEXT = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @media (max-width: 821px) {
    width: 250px;
  }
  @media (max-width: 669px) {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
`;
const H3 = styled.h3`
  position: absolute;
  left: 20%;
  @media (max-width: 821px) {
    position: absolute;
    left: 20%;
    font-size: 1rem;
  }
`;
const H4 = styled.h4`
  position: absolute;
  left: 20%;
`;
const A = styled.a`
  text-decoration: none;
  color: #36b8ed;
  position: absolute;
  left: 20%;
`;
const F2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-right: 80px;
  @media (max-width: 821px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 0;
    margin-top: 20px;
  }
`;
const F2_ICONS = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  overflow: hidden;
`;
const DIV_ICON2 = styled.div`
  background: #434343;
  border-radius: 5px;
  width: 45px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px 10px 5px 0;
`;
const IMG2 = styled.img`
  width: 30px;
  height: 30px;
  transition: all 0.5s;
  :hover {
    transform: rotateY(180deg);
  }
`;
const DESCRIPTION = styled.div`
  color: #bababa;
  margin-top: 30px;
  overflow: hidden;
`;
const TITLE = styled.div`
  font-size: 0.8rem;
  overflow: hidden;
`;
const P_DESCRIPTION = styled.p`
  @media (max-width: 403px) {
    text-align: center;
  }
`;
