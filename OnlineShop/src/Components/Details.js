import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";

// Context
import { ProductsProvider } from "../App";

const Details = () => {
  const id = useParams();
  const data = useContext(ProductsProvider);
  const productIndex = data[id.id - 1];
  const { image, title, description, category, price } = productIndex;

  return (
    <div className="container">
      <DIV>
        <IMG src={image} alt="PictureDetails" />
        <H3>{title}</H3>
        <DIV3>
          <p>{description}</p>
        </DIV3>
        <P2>
          <span>
            <b>category:</b>
          </span>{" "}
          {category}
        </P2>
        <DIV2>
          <p>
            <b>{price} $</b>
          </p>
          <Link to="/">
            <BUTTON>
              <b>back to shop</b>
            </BUTTON>
          </Link>
        </DIV2>
      </DIV>
    </div>
  );
};

export default Details;

// Css
const DIV = styled.div`
  width: 60vw;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  z-index: 1;
  border: 7px solid #ff8220;
  position: relative;
`;
const IMG = styled.img`
  width: 120px;
  height: 120px;
  margin-bottom: 30px;
`;
const H3 = styled.h3`
  margin-bottom: 10px;
  text-align: center;
  ::first-letter {
    color: #ff6818;
  }
`;
const P2 = styled.p`
  margin-top: 20px;
`;
const DIV2 = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 50px;
`;
const DIV3 = styled.div`
  width: 90%;
  height: 20%;
  margin-top: 10px;
  text-align: justify;
  background: #e6e6e6;
  overflow-y: scroll;
  padding: 10px;
  border-radius: 5px;
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    background: #e6e6e6;
  }
  ::-webkit-scrollbar-thumb {
    background: #ff6818;
  }
`;
const BUTTON = styled.button`
  width: 120px;
  height: 40px;
  border-radius: 5px;
  border: none;
  background: #ffa657;
  cursor: pointer;
  transition: all 0.3s;
  :hover {
    box-shadow: 0px 0px 10px #595959;
    transition: all 0.3s;
  }
`;
