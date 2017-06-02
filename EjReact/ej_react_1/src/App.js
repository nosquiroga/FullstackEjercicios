import React, { Component } from 'react';
import Menu from './Menu';
import Header from './Header';
import Container from './Container';
import Features from './Features';
import Foot from './Foot';
import './App.css';

const myFeatures = [
  {
    title: "Feature Label",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
  },
  {
    title: "Feature Label",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
  },
  {
    title: "Feature Label",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
  },
  {
    title: "Feature Label",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
  }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <Container>
          <Header title="A Warm Welcome!" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid similique quaerat nam nobis illo aspernatur vitae fugiat numquam repellat." btnText="Call to action!" />
          <hr />
          <div className="row">
              <div className="col-lg-12">
                  <h3>Latest Features</h3>
              </div>
          </div>
          <Features data={myFeatures} />
          <hr />
          <Foot text="Copyright &copy; Your Website 2014" />
        </Container>
      </div>
    );
  }
}

export default App;
