import React from 'react';
import TextField from '@material-ui/core/TextField';

const SearchBar = (props) => {
    return (
        <>
        <TextField 
        label="Search Whatever" 
        value={props.value}
        onChange={(event)=> props.setSearchValue(event.target.value)}
        variant="outlined" />
        </>
    )
}

export default SearchBar;