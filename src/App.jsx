import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Home from './component/home.jsx';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import Jobdetails from './component/jobdetails.jsx';

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
        <div>
        <Switch>
        <Route exact path="/" component= {Home}  />
        <Route exact path="/jobdetails/:id" component= {Jobdetails}  />
        </Switch>


        </div>
        
        
        
        
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
