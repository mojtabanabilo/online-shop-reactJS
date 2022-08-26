import React, { createContext, useReducer } from "react";

// functions
import { counter } from "./Functions";

const initialState = {
  selectItem: [],
  itemsCounter: 0,
  total: 0,
  checkOut: false,
};

const reduser = (state, action) => {
  switch (action.type) {
    case "Add":
      if (!state.selectItem.find((item) => item.id === action.payload.id)) {
        state.selectItem.push({
          ...action.payload,
          quantity: 1,
        });
      }
      return {
        ...state,
        selectItem: [...state.selectItem],
        ...counter(state.selectItem),
      };
    case "Up":
      const increase = state.selectItem.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectItem[increase].quantity++;
      return {
        ...state,
      };
    case "Reset":
      const cartShop2 = document.querySelector(".cart_shopping");
      if (state.selectItem.length === 0)
        cartShop2.style.border = "solid black 3px";
      const remove = state.selectItem.filter(
        (item) => item.id !== action.payload.id
      );
      const res = { ...state, selectItem: [...remove] };
      console.log(res);
      return {
        ...state,
        selectItem: [...remove],
        ...counter(res.selectItem),
      };
    case "Down":
      const decrease = state.selectItem.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectItem[decrease].quantity--;
      return {
        ...state,
        ...counter(state.selectItem),
      };
    case "CheckOut":
      return {
        selectItem: [],
        itemsCounter: 0,
        total: 0,
        checkOut: true,
      };
    default:
      return state;
  }
};

export const ReduserContext = createContext();

const Reduser = (props) => {
  const [number, dispatch] = useReducer(reduser, initialState);

  return (
    <ReduserContext.Provider value={{ number, dispatch }}>
      {props.children}
    </ReduserContext.Provider>
  );
};

export default Reduser;
