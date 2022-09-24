import React, {Component} from 'react'; 
import { render } from 'react-dom'; 
//add react router to all pages so clicks link directly via <route/>
import { BrowserRouter}  from 'react-router-dom'
import App from './App'; 

render (
    <BrowserRouter>
      <App/>
    </BrowserRouter>,
      document.getElementById('root') 
)

// render(<Index />, document.querySelector("#root"));