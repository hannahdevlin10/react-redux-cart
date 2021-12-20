import React from 'react';
import { connect } from "react-redux";
import { setSelectedBrand, setSelectedOption } from "../../redux/Shopping/shopping-actions";
import { Autocomplete, Button, TextField } from '@mui/material';

function Filter ({ options, setSelectedOption, tags }) {

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ width: '65%' }}>
                <Autocomplete
                    disablePortal
                    id="cases-by-date-filter"
                    options={options}
                    getOptionLabel={(option) => option}
                    onChange={(event, value) => {
                       setSelectedOption(value);
                    }}
                    renderInput={(params) => <TextField {...params} label="Select Product" />}
                />
            </div>
            <div style={{ width: '35%', height: 55, padding: '10px 0px 10px 5px', textAlign: 'right' }}>
                {
                    tags?.map((tag) => (
                        <span style={{ margin: 5 }} key={tag}>
                            <Button
                                variant="contained"
                                size="small"
                                value={tag}
                                onClick={(e) => {
                                    setSelectedBrand(e.target.value);
                                }}>
                                {tag}
                            </Button>
                        </span>
                    ))
                }
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
  return {
    setSelectedOption: (item) => dispatch(setSelectedOption(item)),
    setSelectedBrand: (item) => dispatch(setSelectedBrand(item))
  };
};

export default connect(null, mapDispatchToProps)(Filter)