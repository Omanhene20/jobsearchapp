import React, { Component, useState } from 'react';
import Footer from './Footer.jsx';
import Logo from './logo.jsx';
import Joblisting from './joblisting.jsx';
import Logosearch from './logosearch.jsx';
 
const Home =() => {

    const[ searchWord, setSearchWord]= useState("");
    return(
      <>
      <Logo/>
      <div>
      <Logosearch/>
      </div>
      <Joblisting searchWord={searchWord}/>
   
      <Footer/>
      </>
      
    )
  
}
 
export default Home;