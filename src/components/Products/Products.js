import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Filter from "../Filter";
import Product from "./Product/Product";
import { Paper } from "@mui/material";

const Products = ({ products, selectedOption }) => {
  const half = Math.ceil(products?.length / 2);
  const firstHalf = products.slice(0, half);
  const secondHalf = products.slice(-half);
  const [selectedDataFirst, setSelectedDataFirst] = useState(null);
  const [selectedDataSec, setSelectedDataSec] = useState(null);

  let opts = products?.map((prod) => prod?.title)
  
  useEffect(() => {
    let resultFirst = firstHalf?.find((res) => res?.title === selectedOption)
    resultFirst ? setSelectedDataFirst(resultFirst) : setSelectedDataFirst(null);

    let resultSecond = secondHalf?.find((res) => res?.title === selectedOption)
    resultSecond ? setSelectedDataSec(resultSecond) : setSelectedDataSec(null);

  }, [selectedOption])

  return (
    <div style={{ width: '60%', marginLeft: '20%', marginRight: '20%' }}>
      <div style={{ margin: '30px 0px' }}>
        <Filter options={opts} />
      </div>
      <Paper>
        <div style={{ textAlign: 'center', display: 'flex', justifyContent: 'space-around' }}>
          <div>
            {selectedDataFirst ? (
                <Product key={selectedDataFirst?.id} product={selectedDataFirst} />
              ) : !selectedDataFirst && selectedOption ? (
                ''
              ) : (
                firstHalf.map((product) => (
                  <Product key={product.id} product={product} />
                ))
              )}
          </div>
          <div>
            {selectedDataSec ? (
                <Product key={selectedDataSec?.id} product={selectedDataSec} />
              ) : !selectedDataSec && selectedOption ? (
                ''
              ) : (
                secondHalf.map((product) => (
                  <Product key={product.id} product={product} />
                ))
              )}
          </div>
        </div>
      </Paper>
    </div>
    
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
    selectedOption: state.shop.selectedOption
  };
};

export default connect(mapStateToProps)(Products);