import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {name, commerce} from "faker"

import Navbar from './components/Navbar.js';
import Home from './components/Home.js';
import Cat from '../src/components/Cats.js'

import Basket from './components/pages/Basket'

import '../src/index.css';
import '../src/App.css';

function App() {
  const [data, setData] = useState({})
  // const names = ["Fluffy", "Tiger", "Bob"]

  const handleFetch = async () => {
    const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=15')
    const data = await response.json()
    for (let i = 0; i < data.length; i++) {
      const item = data[i];
      // item.name = "Bob"
      item.name = name.firstName()
      item.price = commerce.price()
      // https://www.npmjs.com/package/faker
    } 
    setData(data)
  }

  useEffect(() => {
    handleFetch()
  }, [])
  const {products}=Cats;
  const [BasketItems, setBasketItems] = useState([]);
  const AddItems = (product) => {
  const exist = BasketItems.find((x) => x.id === product.id);
  if (exist) {
    setBasketItems(
      BasketItems.map((x) =>
        x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
      )
    );
  } else {
    setBasketItems([...BasketItems, { ...product, qty: 1 }]);
  }
};
const RemoveItems = (product) => {
  const exist = BasketItems.find((x) => x.id === product.id);
  if (exist.qty === 1) {
    setBasketItems(BasketItems.filter((x) => x.id !== product.id));
  } else {
    setBasketItems(
      BasketItems.map((x) =>
        x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
      )
    );
  }
};

  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
        </Switch>
        {/* <Cat /> */}
        {data.length > 0 && data.map((item, index) => {
          return <CatCard item={item} />
        })}
      </Router>
    </>
  );
};

const CatCard = ({item}) => {
  return (
    <div>
      <img src={item.url} />
      <p>{item.name}</p>
      <p>£{item.price}</p>
    </div>
  )
}

export default App;
