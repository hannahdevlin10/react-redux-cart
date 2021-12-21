import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Filter from "../Filter";
import Product from "./Product/Product";
import { Paper } from "@mui/material";

const Products = ({ products, selectedOption, selectedFilter }) => {
  const half = Math.ceil(products?.length / 2);
  const firstHalf = products.slice(0, half);
  const secondHalf = products.slice(-half);
  const [selectedDataFirst, setSelectedDataFirst] = useState(null);
  const [selectedDataSec, setSelectedDataSec] = useState(null);
  const [options, setOptions] = useState([]);
  
  let resultFirst;
  let resultSecond;

  useEffect(() => {
    setOptions(products?.map((prod) => prod?.title));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    switch (selectedFilter) {
      case 'Title':
        setOptions(products?.map((prod) => prod?.title));

        // eslint-disable-next-line react-hooks/exhaustive-deps
        resultFirst = firstHalf?.find((res) => res?.title === selectedOption)
        resultFirst ? setSelectedDataFirst(resultFirst) : setSelectedDataFirst(null);

        // eslint-disable-next-line react-hooks/exhaustive-deps
        resultSecond = secondHalf?.find((res) => res?.title === selectedOption)
        resultSecond ? setSelectedDataSec(resultSecond) : setSelectedDataSec(null);

        break;
      case 'Author':
        setOptions([...new Set(products?.map((prod) => prod?.author))]);

         // eslint-disable-next-line react-hooks/exhaustive-deps
         resultFirst = firstHalf?.find((res) => res?.author === selectedOption)
         resultFirst ? setSelectedDataFirst(resultFirst) : setSelectedDataFirst(null);
 
         // eslint-disable-next-line react-hooks/exhaustive-deps
         resultSecond = secondHalf?.find((res) => res?.author === selectedOption)
         resultSecond ? setSelectedDataSec(resultSecond) : setSelectedDataSec(null);
        break;
      case 'Genre':
        setOptions([...new Set(products?.map((prod) => prod?.genre))]);

         // eslint-disable-next-line react-hooks/exhaustive-deps
         resultFirst = firstHalf?.find((res) => res?.genre === selectedOption)
         resultFirst ? setSelectedDataFirst(resultFirst) : setSelectedDataFirst(null);
 
         // eslint-disable-next-line react-hooks/exhaustive-deps
         resultSecond = secondHalf?.find((res) => res?.genre === selectedOption);
         resultSecond ? setSelectedDataSec(resultSecond) : setSelectedDataSec(null);
        break;
      default:
        break;
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedOption, selectedFilter])
  
  return (
    <div style={{ width: '60%', marginLeft: '20%', marginRight: '20%', minWidth: "820px" }}>
      <div style={{ margin: '30px 0px' }}>
        <Filter options={options} tags={[ "Title", "Author", "Genre" ]} />
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
    selectedOption: state.shop.selectedOption,
    selectedFilter: state.shop.selectedFilter
  };
};

export default connect(mapStateToProps)(Products);