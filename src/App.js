import logo from './logo.svg';
import React, {Component} from 'react';
import Product from  './product';
import './App.css';
import Shopping from './shopping';
import Data from './Data';
import { Label } from 'semantic-ui-react';

function App() {
  return (
    <div className="App">
      
   <div>
     <h1>Product List</h1>
    <Product />

</div>
<div>
<h1>Shopping Cart</h1>
<Shopping />

</div>
<div>
  

</div>
    </div>

  );
}

export default App;
