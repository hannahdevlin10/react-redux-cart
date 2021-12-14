import React from "react";

// Redux
import { connect } from "react-redux";

import Product from "./Product/Product";

const Products = ({ products }) => {
  const half = Math.ceil(products?.length / 2);
  const firstHalf = products.slice(0, half);
  const secondHalf = products.slice(-half);

  return (
    <div style={{ width: '60%', marginLeft: '20%', marginRight: '20%' }}>
      <div style={{ textAlign: 'center', display: 'flex', justifyContent: 'space-around' }}>
        <div>
          {firstHalf.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
        <div>
          {secondHalf.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
    
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};

export default connect(mapStateToProps)(Products);