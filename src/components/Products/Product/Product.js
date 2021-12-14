import React from "react";
import { Link } from "react-router-dom";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
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
        {
          sub.length >= 48 ? (
          <div>
            {sub} ...
          </div>
          ) : (
          <div>
            {sub}
          </div>
          )
        }
      </div>
    );
  }

  return (
    <div style={{ margin: '65px 0px' }}>
      <Card sx={{ width: 375, maxWidth: 375, height: 420, maxHeight: 420 }}>
        <CardMedia
          component="img"
          height="180"
          image={product?.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {truncate(product?.title, 48)}
            {product.title.length <= 25 ? <br></br> : ''}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {truncate(product?.description, 125)}
          </Typography>
        </CardContent>
        <div style={{ textAlign: 'center', padding: 20 }}>
          <span>
            <Link to={`/product/${product.id}`}>
              <Button onClick={() => loadCurrentItem(product)} color="primary"size="small">View</Button>
            </Link>
          </span>
          <span>
            <Button onClick={() => addToCart(product.id)} color="success" variant="contained" size="small">Add to Cart</Button>
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