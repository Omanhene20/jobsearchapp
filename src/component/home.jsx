import React, { useState } from 'react';
import Footer from './Footer.jsx';
import Logo from './logo.jsx';
import Joblisting from './joblisting.jsx';
import Logosearch from './logosearch.jsx';
 
const Home =() => {

    const[ query, setQuery]= useState("frontend");
    const[ loading, setLoading]=useState("false")
    return(
      <>
      <Logo/>
      <div>
      <Logosearch onQuery={setQuery} onLoading={setLoading}/>
      </div>
      <Joblisting query={query} loading={loading} onLoading={setLoading}/>
   
      <Footer/>
      </>
      
    )
  
}
 
export default Home;