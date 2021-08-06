import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import faker from "faker"

import Navbar from './components/Navbar.js';
import Home from './components/Home.js';
import Cat from '../src/components/Cats.js'

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
      item.name = "Bob"
      // item.name = faker.name.firstname()
      // item.price = faker.commerce.price()
      // https://www.npmjs.com/package/faker
    }
    setData(data)
  }

  useEffect(() => {
    handleFetch()
  }, [])

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
      <p>{item.name}</p>
      <img src={item.url} />
    </div>
  )
}

export default App;
