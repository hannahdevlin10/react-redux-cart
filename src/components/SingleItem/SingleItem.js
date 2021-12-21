import React from "react";
import styles from "./SingleItem.module.css";

import { connect } from "react-redux";
import { addToCart } from "../../redux/Shopping/shopping-actions";
import { Button, Paper } from "@mui/material";

const SingleItem = ({ current, addToCart }) => {
  return (
    <Paper style={{ width: '60%', marginLeft: '20%', marginRight: '20%', minWidth: "820px", marginTop: '116px', padding: '20px 0px' }}>
      <div className={styles.singleItem}>
        <img
          className={styles.singleItem__image}
          src={current.image}
          alt={current.title}
        />
        <div className={styles.singleItem__details}>
          <span style={{ display: 'flex', justifyContent: 'space-between' }}>
            <p className={styles.details__title}>{current.title}</p>
            <p className={styles.details__price}>€ {current.price}</p>
          </span>
        
          <p style={{ color: 'grey', marginTop: -25 }}>Author: {current.author}</p>
          <p style={{ color: 'grey', marginTop: -50 }}>Genre: {current.genre}</p>
          <p className={styles.details__description}>{current.description}</p> 
          <span style={{ width: '60%', display: 'flex', justifyContent: 'right' }}>
            <Button
              onClick={() => addToCart(current.id)}
              color="success"
              variant="contained"
            >
              Add To Cart
            </Button>
          </span>
        </div>
      </div>
    </Paper>
    
  );
};

const mapStateToProps = (state) => {
  return {
    current: state.shop.currentItem,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleItem);