import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import "./Products.css";

// functions
import { counter } from "./Functions";

// image
import logo from "../assets/logo.png";
import cart from "../assets/icons8-fast-cart-48.png";
import image from "../assets/icons8-search-60.png";
import hamburger from "../assets/icons8-menu-48.png";

// context
import { ReduserContext } from "./Reduser";
import { ProductsProvider } from "../App";

// components
import ProductsCart from "./ProductsCart";
import Loading from "./Loading";
import ImageSlider from "./ImageSlider";
import Footer from "./Footer";

// imageSRC
import pic1 from "../assets/img/1.jpg";
import pic2 from "../assets/img/2.jpg";
import pic3 from "../assets/img/3.jpg";
import pic4 from "../assets/img/4.jpg";
import pic5 from "../assets/img/5.jpg";
import pic6 from "../assets/img/6.jpg";
const imageSRC = [
  { url: pic1, title: "picSlider1", id: 1 },
  { url: pic2, title: "picSlider2", id: 2 },
  { url: pic3, title: "picSlider3", id: 3 },
  { url: pic4, title: "picSlider4", id: 4 },
  { url: pic5, title: "picSlider5", id: 5 },
  { url: pic6, title: "picSlider6", id: 6 },
];

const Products = ({ loading }) => {
  const [change, setChange] = useState("");

  const { number } = useContext(ReduserContext);

  const ProductsData = useContext(ProductsProvider);

  const CounterItem = counter(number.selectItem);

  const { itemsCounter } = CounterItem;

  const navigator = useNavigate();

  const searchHandler = ProductsData.filter((item) =>
    item.title.toLowerCase().includes(change.toLowerCase())
  );

  if (number.checkOut === true) window.location.reload();

  let menu = true;

  const hamburgerMenuHandler = () => {
    const hamburgerMenu = document.querySelector(".hamburger_menu");
    if (menu) {
      hamburgerMenu.style.display = "flex";
      menu = false;
    } else if (!menu) {
      hamburgerMenu.style.display = "none";
      menu = true;
    }
  };

  return (
    <div>
      {/* <h1>&#128578;</h1>
            <h1>&#128526;</h1> */}
      <HEADER>
        <UL>
          <LI>Home</LI>
          <LI>About us</LI>
          <LI>
            <Link
              to="/signup"
              style={{ textDecoration: "none", color: "#ffffff" }}
            >
              Signup
            </Link>
          </LI>
        </UL>
        <HAMBURGER className="hamburger" onClick={hamburgerMenuHandler}>
          <img src={hamburger} alt="icon" />
        </HAMBURGER>
        <H1>
          <i>Online Shop</i>
        </H1>
        <ICON src={logo} alt="logo" />
      </HEADER>
      <div className="hamburger_menu">
        <ul className="ul2">
          <li>Home</li>
          <li>About us</li>
          <li>
            <Link
              to="/signup"
              style={{ textDecoration: "none", color: "#ffffff" }}
            >
              Signup
            </Link>
          </li>
        </ul>
      </div>
      <div className="cart_container">
        <CART onClick={() => navigator("/cart")} className="cart_shopping">
          <CART_ICON src={cart} alt="cart" />
        </CART>
        {itemsCounter > 0 && (
          <COUNTER>
            <b>{itemsCounter}</b>
          </COUNTER>
        )}
      </div>
      <ImageSlider srcImage={imageSRC} />
      <DIV_SEARCH>
        <IMG_SEARCH src={image} />
        <INPUT_SEARCH
          value={change}
          type="text"
          spellCheck="true"
          placeholder="Search"
          onChange={(event) => setChange(event.target.value)}
        />
      </DIV_SEARCH>
      <PRODUCTS>
        <H2>Products</H2>
        {loading.length ? (
          <DIV>
            {searchHandler.map((i) => (
              <ProductsCart key={i.id} data={i} />
            ))}
          </DIV>
        ) : (
          <Loading />
        )}
        {!searchHandler.length && (
          <h3 style={{ color: "#FF0000" }}>No products found</h3>
        )}
      </PRODUCTS>
      <Footer />
    </div>
  );
};

export default Products;

// Css
const DIV_SEARCH = styled.div`
  width: 100%;
  height: 200px;
  background: #00b2ff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;
const INPUT_SEARCH = styled.input`
  width: 50vw;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 10px;
  font-size: 2rem;
  padding: 2px 20px 0 60px;
  box-shadow: 0px 0px 10px;
  transition: all 0.4s;
  :hover {
    background: #ffe4d0;
    transition: all 0.4s;
  }
  :focus {
    outline: none;
  }
  ::placeholder {
    font-size: 2rem;
    text-align: start;
    align-items: center;
  }
  @media (max-width: 759px) {
    width: 60vw;
    font-size: 1.5rem;
    ::placeholder {
      font-size: 1.5rem;
      text-align: start;
      align-items: center;
    }
  }
  @media (max-width: 675px) {
    width: 60vw;
    font-size: 1.5rem;
    ::placeholder {
      font-size: 1.5rem;
      text-align: start;
      align-items: center;
    }
  }
`;
const IMG_SEARCH = styled.img`
  position: absolute;
  left: 26vw;
  width: 40px;
  @media (max-width: 759px) {
    position: absolute;
    left: 22vw;
    width: 35px;
  }
  @media (max-width: 675px) {
    position: absolute;
    left: 22vw;
    width: 35px;
  }
`;
const HEADER = styled.header`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  background: #00b2ff;
  padding: 30px;
  width: 100%;
`;
const H1 = styled.h1`
  font-size: 2rem;
  color: #ffffff;
  ::first-letter {
    color: #ff6818;
  }
  @media (max-width: 468px) {
    font-size: 1.5rem;
  }
`;
const UL = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  text-decoration: none;
  list-style: none;
  color: #ffffff;
  font-size: 1.2rem;
  @media (max-width: 1247px) {
    display: none;
  }
`;
const LI = styled.li`
  margin-left: 20px;
  border: 2px solid #ffffff;
  padding: 5px;
  border-radius: 10px;
  transition: all 0.2s;
  cursor: pointer;
  :hover {
    transform: translateY(-5px);
    transition: all 0.2s;
  }
  ::first-letter {
    color: #ff6818;
    font-size: 1.5rem;
    font-style: oblique;
  }
`;
const ICON = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 4px 4px 10px #000000;
  @media (min-width: 1247px) {
    width: 100px;
    height: 100px;
  }
  @media (max-width: 931px) {
    display: none;
  }
`;
const CART = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: solid #ff6818 3px;
  box-shadow: 0px 0px 7px #999999;
  background: #fff;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 20px;
  cursor: pointer;
  transition: all 0.2s;
  z-index: 1;
  overflow: hidden;
  :hover {
    transition: all 0.2s;
    box-shadow: 0px 0px 0px #ffffff;
  }
`;
const CART_ICON = styled.img`
  width: 30px;
  height: 30px;
`;
const COUNTER = styled.span`
  width: 18px;
  height: 18px;
  position: absolute;
  left: 60%;
  top: 55%;
  background: #ff6818;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 11px;
  z-index: 3;
`;
const DIV = styled.div`
  width: calc(100% - 5%);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding: 30px 0 10px 6px;
  @media (max-width: 1330px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
    margin-top: 30px;
  }
  @media (max-width: 986px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
    margin-top: 30px;
  }
  @media (max-width: 624px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    margin-top: 30px;
  }
`;
const H2 = styled.h2`
  text-align: center;
  margin-top: 30px;
  ::first-letter {
    color: #ff6818;
  }
`;
const PRODUCTS = styled.div`
  width: calc(100vw - 70px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  box-shadow: 0px 0px 15px #c1c1c1;
  border-radius: 10px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  padding-bottom: 50px;
`;
const HAMBURGER = styled.div`
  cursor: pointer;
  display: none;
  @media (max-width: 1247px) {
    display: block;
  }
`;
