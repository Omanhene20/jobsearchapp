import React from "react";

function Search(onSearchWord) {
   function handleInput(e) {
    onSearchWord(e.target.value);

   }
    
    
    
    
    
    
    return(
        <div className="search">
            <input type="text" onInput={handleInput}/>

        </div>
        )

    }
    export default Search;
