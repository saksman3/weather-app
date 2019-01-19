import React from 'react';
const SearchForm = (props)=>{
    return (
        <form onSubmit={props.search}>
           <input type="text" name="country" placeholder="Country..."/>
           <input type="text" name="city" placeholder="City..."/>
           <button className="btn btn-primary">Search</button>
        </form>
     );
}
export default SearchForm; 