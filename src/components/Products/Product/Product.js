import React from "react";
import { Link } from "react-router-dom";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { connect } from "react-redux";
import {
  loadCurrentItem,
  addToCart,
} from "../../../redux/Shopping/shopping-actions";

const Product = ({ product, addToCart, loadCurrentItem }) => {
  function truncate (str, limit) {
    let sub = str.substring(0, limit);
    return (
      <div> 
        {sub.length > 27 ? (
          <div>
            {sub} ...
          </div>
          ) : (
          <div>
            {sub}
          </div>
          )}
      </div>
    );
  }

  return (
    <div style={{ margin: '35px 0px' }}>
      <Card sx={{ width: 385, maxWidth: 385, height: 430, maxHeight: 430, paddingTop: 5 }}>
        <img src={product?.image} height={185} style={{ maxWidth: 310 }} alt={`${product?.title}`} /> 
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product?.title && truncate(product?.title, 27)}
          </Typography>
          <Typography gutterBottom variant="h8" component="div" style={{ marginBottom: 12 }}>
            By {product?.author && product?.author}
          </Typography>
          <Typography gutterBottom variant="h8" component="div" color="text.secondary">
            € {product?.price && product?.price}
          </Typography>
        </CardContent>
        <div style={{ textAlign: 'center' }}>
          <span style={{ marginRight: 10 }}>
            <Link to={`/product/${product.id}`}>
              <Button
                variant="contained"
                size="small"
                onClick={() => loadCurrentItem(product)}
                style={{
                  backgroundColor: 'lightgrey',
                  color: 'black'
                }}>View</Button>
            </Link>
          </span>
          <span style={{ marginLeft: 10 }}>
            <Button
              onClick={() => addToCart(product.id)}
              variant="contained"
              size="small"
              style={{
                backgroundColor: '#282c34'
              }}>Add</Button>
          </span>
        </div>
      </Card>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
  };
};

export default connect(null, mapDispatchToProps)(Product);