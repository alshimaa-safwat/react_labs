import React, { useReducer } from 'react';
import axios from 'axios';
import List from '../../components/List/List';
const Search = () => {
    const reducer = (prev,next) => ({...prev,...next});
    const [{loading, error,data,searchText, searchType} , setState] = useReducer(reducer, {
        data:[],
        loading: false,
        error: '',
        searchText: '',
        searchType: '',
    });
    const onInputChange = (e) => {
        const inputName = e.target.name;
        const value = e.target.value;
        setState({ [inputName] : value });
    };

    const onSubmit = async(e) => {
        e.preventDefault();
        setState({ loading : true});
        try{
            const response = await axios.get(
                `https://api.github.com/${searchType}?q=${searchText}`
            ).then((response) => response.data);
            setState({ data: response , loading: false});
        }catch (error){
            setState({error: 'Something went wrong', loading:false});
        }
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
            <label>Search text
            <input name="searchText" type="text" onChange={onInputChange} value={searchText}/>
            </label>
            <br/>
            <br/>
            <label>Search type
            <input name="searchType" type="text" onChange={onInputChange} value={searchType}/>
            </label>
            <br/>
            <br/>
            <input type="submit" value="Search"/>
        </form> 
        <List loading={loading} error={error} data={data}/>
        </div>
    );
}

export default Search;