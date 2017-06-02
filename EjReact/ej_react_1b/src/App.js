import React, { Component } from 'react';
import Menu from './Menu';
import Container from './Container';
import Content from './Content';
import Foot from './Foot';
import './App.css';



const myProduct = {
  name: "Product Name",
  price: "$24.99",
  desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
  reviews: [{
    usr: "Anonymous",
    time: "10 days ago",
    text: "This product was great in terms of quality. I would definitely buy another!"
  },
  {
    usr: "Anonymous",
    time: "12 days ago",
    text: "I've alredy ordered another one!"
  },
  {
    usr: "Anonymous",
    time: "15 days ago",
    text: "I've seen some better than this, but not at this price. I definitely recommend this item."
  }]
};

class App extends Component {


  render() {
    return (
      <div className="App">
        <Menu />
        <Container>
          <Content {...myProduct} />
        </Container>
        <Container>
          <hr />
          <Foot text='Copyright &copy; Your Website 2014' />
        </Container>
      </div>
    );
  }
}

export default App;
