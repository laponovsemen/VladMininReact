import React, {useState} from 'react';
import {Product} from "./components/Product";
import {products} from "./data/products";


function App() {
  //const  [] = useState()
  return (
  <div className="container mx-auto max-w-2xl pt-5">
    <Product product={products[0]} />

  </div>
  );
}

export default App;
