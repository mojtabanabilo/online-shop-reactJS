import React, {useContext} from 'react';
import styled from 'styled-components';
import {useNavigate} from "react-router-dom";

// style
import "./Cart.css";

// Context
import { ReduserContext } from '../Reduser';
import { ProductsProvider } from '../../App';

// Component
import CartProduct from './CartProduct';

const Cart = () => {

    const navigator = useNavigate();
    
    const { number, dispatch } = useContext(ReduserContext);

    const data = useContext(ProductsProvider);

    const { total, itemsCounter } = number;

    return (
        <div className="container">
            <HEADER>
                <H1>Your Orders</H1>
                <BUTTON_BACK_TO_SHOP onClick={() => navigator("/")}><b>back to shop</b></BUTTON_BACK_TO_SHOP>
            </HEADER>
            <DIV> 
                {
                    number.checkOut === false &&
                    number.selectItem.map(i => <CartProduct key={i.id} data={i} number={number} total={total}/>)
                }
                {
                    number.selectItem.length === 0 && <DIV_ALERT>
                        <h1>No item for purchase. <br /> Back to shop</h1>
                    </DIV_ALERT>
                }
                {
                    number.checkOut === true && 
                    <DIV_CHECKOUT>
                        <h1>The payment operation was completed successfully</h1>
                    </DIV_CHECKOUT>
                }
                {
                    number.selectItem.length > 0 && number.checkOut === false &&
                    <DIV_PURCHASE>
                        <DIV_COUNT>
                            <DIV_COUNT2>
                                <h4>The Number Of Purchases:</h4>
                                <SPAN>{itemsCounter}</SPAN>
                            </DIV_COUNT2>
                            <h4 style={{marginTop: "20px"}}>Total Price: {total} $</h4>
                        </DIV_COUNT>
                        <BUTTON_PURCHASE onClick={() => dispatch({type: "CheckOut", payload: data})}><b>Purchase</b></BUTTON_PURCHASE>
                    </DIV_PURCHASE>
                }
            </DIV>
        </div>
    );
};

export default Cart;    

// Css
const DIV = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const HEADER = styled.header`
    background: #00B2FF;
    width: 100vw;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    position: relative;
`;
const H1 = styled.h1`
    ::first-letter{
        color: #FF6818;
    }
`;
const BUTTON_BACK_TO_SHOP = styled.button`
    width: 120px;
    height: 40px;
    background: #FF6818;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    font-style: oblique;
    transition: all .2s;
    color: #fff;
    position: absolute;
    left: 93%;
    transform: translateX(-85%);
    :hover{
        transition: all .2s;
        box-shadow: 0px 0px 10px #808080;
    }
`;
const SPAN = styled.span`
    width: 20px;
    height: 20px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #FF6818;
    color: #fff;
    margin-left: 10px;
`;
const BUTTON_PURCHASE = styled.button`
    width: 130px;
    height: 50px;
    background: #00B2FF;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1.2rem;
    font-style: oblique;
    transition: all .2s;
    color: #fff;
    :hover{
        transition: all .2s;
        box-shadow: 0px 0px 10px #808080;
    }
    ::first-letter{
        color: #FF6818;
    }
    @media (max-width: 676px){
        margin-top: 20px;
    }
`;
const DIV_ALERT = styled.div`
    width: 700px;
    height: 150px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 20px;
    text-align: center;
    border: solid 3px #FF6818;
`;
const DIV_PURCHASE = styled.div`
    width: 600px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background: #EBEBEB;
    margin: 50px 0 25px 0;
    padding: 40px;
    border-radius: 20px;
    border: solid 4px #FF6818;
    @media (max-width: 676px) {
        width: 500px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;
const DIV_COUNT = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    /* margin-right: 30px; */
    @media (max-width: 676px){
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;
const DIV_COUNT2 = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const DIV_CHECKOUT = styled.div`
    width: 700px;
    height: 150px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 20px;
    text-align: center;
    border: solid 3px #FF6818;
    @media (max-width: 859px) {
        width: 500px;
        height: 150px;
    }
`;