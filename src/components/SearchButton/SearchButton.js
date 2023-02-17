import React, { useState } from 'react';
import './SearchButton.css'
import searchButton from '../../media/magnifying-glass-solid.svg'



const SearchButton = () => {


    const [inputValue, setInputValue] = useState("");

    // Input Field handler
    const handleUserInput = (e) => {
        setInputValue(e.target.value);
    };

    // Reset Input Field handler
    const resetInputField = () => {
        setInputValue("");
    };

    return (
        <div className='search-container'>
            <h2>Search Country</h2>
            <div className='flex-container1'>
                <input type="text" value={inputValue} onChange={handleUserInput} placeholder='Search...' />
                <img onClick={resetInputField} src={searchButton} alt="" width={20} />
            </div>
        </div >
    );

};

export default SearchButton;





