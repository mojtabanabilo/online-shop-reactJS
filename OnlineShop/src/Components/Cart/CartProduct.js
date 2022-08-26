import React, {useContext} from 'react';
import styled from 'styled-components';

// function
import { shorten } from '../Functions';

// image
import trash from "../../assets/icons8-trash-can-24.png";

// context
import { ReduserContext } from '../Reduser';

const CartProduct = ({data}) => {

    const { image, title, quantity, price } = data;

    const { dispatch } = useContext(ReduserContext);
    
    return (
            <DIV>
                <IMG src={image} alt="img-cart"/>
                <h3>{shorten(title)}</h3>
                <P_QUANTITY><b>{quantity}</b></P_QUANTITY>
                <P><b>{price * quantity} $</b></P>
                <BUTTON onClick={() => dispatch({type: "Reset", payload: data})}><img src={trash} alt='icon'/></BUTTON>
            </DIV>
    );
};

export default CartProduct;

const DIV = styled.div`
    width: 50vw;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background: #F5F5F5;
    padding: 15px 20px;
    margin-top: 40px;
    border-radius: 20px;
    box-shadow: 0px 0px 10px #C6C6C6 inset;
    position: relative;
    @media (max-width: 741px) {
        width: 65vw;
    }
`;
const IMG = styled.img`
    width: 100px;
    height: 100px;
    @media (max-width: 845px) {
        width: 60px;
        height: 60px;
    }
`;
const P_QUANTITY = styled.p`
    width: 20px;
    height: 20px;
    border-radius: 5px;
    background: #FF6818;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    @media (max-width: 1024px) {
        position: absolute;
        left: 65%;
        top: 67%;
    }
    @media (max-width: 845px) {
        position: absolute;
        left: 60%;
        top: 67%;
    }
`;
const BUTTON = styled.button`
    width: 30px;
    height: 30px;
    border: none;
    background: #00B2FF;
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 0px 7px #626262;
`;
const P = styled.p`
    @media (max-width: 1024px) {
        position: absolute;
        left: 45%;
        top: 67%;
    }
    @media (max-width: 845px) {
        position: absolute;
        left: 40%;
        top: 68%;
    }
`;