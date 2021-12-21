import React from 'react';
import { connect } from "react-redux";
import { setSelectedOption, setSelectedFilter } from "../../redux/Shopping/shopping-actions";
import { Autocomplete, Button, TextField } from '@mui/material';

function Filter ({ options, setSelectedOption, setSelectedFilter, selectedFilter, tags }) {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ width: '64%' }}>
                <Autocomplete
                    disablePortal
                    id="cases-by-date-filter"
                    options={options}
                    getOptionLabel={(option) => option}
                    onChange={(event, value) => {
                       setSelectedOption(value);
                    }}
                    renderInput={(params) => <TextField {...params} label={`Search by ${selectedFilter}`} />}
                />
            </div>
            <div style={{ width: '36%', height: 55, textAlign: 'right', display: 'flex', justifyContent: 'right', paddingTop: 6 }}>
                <span style={{ padding: '11px 6px 0px 0px' }}>
                    Filter by: 
                </span>
                {tags?.map((tag) => (
                    <span style={{ margin: '5px 2px' }} key={tag}>
                        <Button
                            variant="contained"
                            size="small"
                            value={tag}
                            style={{ marginBottom: 10, backgroundColor: tag === selectedFilter ? '#4eb5f5' : '#282c34' }}
                            onClick={(e) => {
                                setSelectedFilter(e.target.value);
                            }}>
                            {tag}
                        </Button>
                    </span>
                ))}
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
  return {
    setSelectedOption: (item) => dispatch(setSelectedOption(item)),
    setSelectedFilter: (item) => dispatch(setSelectedFilter(item))
  };
};

const mapStateToProps = (state) => {
    return {
        selectedFilter: state.shop.selectedFilter
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter)