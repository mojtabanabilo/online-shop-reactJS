import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// images
import trash from "../assets/icons8-trash-can-24.png";
import plus from "../assets/icons8-plus-24.png";
import minus from "../assets/icons8-minus-48.png";

// Functions
import { quantityInput, shorten } from "./Functions";

// context
import { ReduserContext } from "./Reduser";

const ProductsCart = ({ data }) => {
  const { number, dispatch } = useContext(ReduserContext);

  const { image, title, price, id, category } = data;

  return (
    <DIV>
      <IMAGE src={image} />
      <H2>{shorten(title)}</H2>
      <P>
        <b>
          <i>{category}</i>
        </b>
      </P>
      <DIV_BUTTON>
        {quantityInput(number, id) > 0 ? (
          <DIV_CART_REDUSER>
            <BUTTON_CART_REDUSER
              onClick={() => dispatch({ type: "Up", payload: data })}
            >
              <img
                src={plus}
                alt="icon"
                style={{ width: "20px", height: "20px" }}
              />
            </BUTTON_CART_REDUSER>
            <P_NUM>
              <b>{quantityInput(number, id)}</b>
            </P_NUM>
            {quantityInput(number, id) <= 1 && (
              <BUTTON_CART_REDUSER
                onClick={() => dispatch({ type: "Reset", payload: data })}
              >
                <img
                  src={trash}
                  alt="icon"
                  style={{ width: "20px", height: "20px" }}
                />
              </BUTTON_CART_REDUSER>
            )}
            {quantityInput(number, id) > 1 && (
              <BUTTON_CART_REDUSER
                onClick={() => dispatch({ type: "Down", payload: data })}
              >
                <img
                  src={minus}
                  alt="icon"
                  style={{ width: "20px", height: "20px" }}
                />
              </BUTTON_CART_REDUSER>
            )}
          </DIV_CART_REDUSER>
        ) : (
          <BUTTON
            className="add_button"
            onClick={() => dispatch({ type: "Add", payload: data })}
          >
            <b>add to cart</b>
          </BUTTON>
        )}
      </DIV_BUTTON>
      <DIV_PRICE_DETAILS>
        <Link
          to={`/cart/${id}`}
          style={{ textDecoration: "none", color: "#8627FF" }}
        >
          <b>Details</b>
        </Link>
        <PRICE>{price} $</PRICE>
      </DIV_PRICE_DETAILS>
    </DIV>
  );
};

export default ProductsCart;

// Css
const DIV = styled.div`
  width: 21vw;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  box-shadow: 0px 0px 15px #c1c1c1;
  /* margin: 10px 0; */
  @media (max-width: 1330px) {
    width: 28vw;
  }
  @media (max-width: 986px) {
    width: 40vw;
  }
  @media (max-width: 624px) {
    width: 70vw;
  }
`;
const IMAGE = styled.img`
  width: 150px;
  height: 150px;
  margin-top: -10px;
`;
const H2 = styled.h3`
  margin-top: 20px;
`;
const P = styled.p`
  margin-top: 10px;
  color: #808080;
`;
const DIV_BUTTON = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
`;
const BUTTON = styled.button`
  width: 100px;
  height: 35px;
  background: #ff6818;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.8rem;
  font-style: oblique;
  transition: all 0.2s;
  :hover {
    transition: all 0.2s;
    box-shadow: 0px 0px 10px #808080;
  }
  @media (max-width: 986px) {
    width: 80px;
  }
`;
const PRICE = styled.h4`
  font-size: 1rem;
`;
const DIV_PRICE_DETAILS = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  align-content: center;
  width: 20vw;
  margin-top: 30px;
  @media (max-width: 624px) {
    width: 50vw;
  }
`;
const DIV_CART_REDUSER = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;
const BUTTON_CART_REDUSER = styled.button`
  width: 30px;
  height: 30px;
  border: none;
  background: #00b2ff;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 7px #626262;
`;
const P_NUM = styled.p`
  width: 25px;
  height: 25px;
  background: #ffa657;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin: 0 5px 0 5px;
`;
