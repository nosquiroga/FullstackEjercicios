import React, { Component } from 'react';
import Counter from './Counter';
import shortid from 'shortid';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      counters: []
    };
  }

  addCounter(){
    const counter = {
      id: shortid.generate(),
      initialValue: 0
    };

    this.setState(prevState => ({
        counters: [...prevState.counters, counter]
    }));
  }

  removeCounter(counter){
    this.setState(prevState => ({
      counters: prevState.counters.filter(c => c.id !== counter.id)
    }));
  }

  render() {
    const {counters} = this.state; 

    return (
      <div className="App">
        <h1>Counter App</h1>
        <button onClick={() => this.addCounter()}>Agregar Contador</button>
        <div className="App-Counters">
        {counters.map(counter =>(
          <div key={counter.id} className="App-counter-wrapper">
            <Counter initialValue={counter.initialValue} />
            <button onClick={() => this.removeCounter(counter)}>
              Quitar contador
            </button>
          </div>
        ))}
        </div>
      </div>
      
    );
  }
}

export default App;
