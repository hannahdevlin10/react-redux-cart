import * as actionTypes from "./shopping-types";

export const addToCart = (itemID) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: {
      id: itemID,
    },
  };
};

export const removeFromCart = (itemID) => {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    payload: {
      id: itemID,
    },
  };
};

export const adjustItemQty = (itemID, qty) => {
  return {
    type: actionTypes.ADJUST_ITEM_QTY,
    payload: {
      id: itemID,
      qty,
    },
  };
};

export const loadCurrentItem = (item) => {
  return {
    type: actionTypes.LOAD_CURRENT_ITEM,
    payload: item,
  };
};

export const setSelectedOption = (item) => {
  return {
    type: actionTypes.SET_SELECTED_OPTION,
    payload: item,
  };
};

export const setSelectedFilter = (item) => {
  return {
    type: actionTypes.SET_SELECTED_FILTER,
    payload: item,
  };
};

export const clearCart = () => {
  return {
    type: actionTypes.CLEAR_CART
  };
};