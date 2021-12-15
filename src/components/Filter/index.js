import React from 'react';
import { Autocomplete, TextField } from '@mui/material';
import { connect } from "react-redux";
import { setSelectedOption } from "../../redux/Shopping/shopping-actions";

function Filter ({ options, setSelectedOption }) {
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
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
  return {
    setSelectedOption: (item) => dispatch(setSelectedOption(item))
  };
};

export default connect(null, mapDispatchToProps)(Filter)