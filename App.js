import React, {Component} from 'react'
import logo from './logo.svg'
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick';


class App extends Component {
  render() {
    return (
      <div className="App">
        <FunctionClick />
        {/* <Counter/> */}
        {/* <Message /> */}
        {/* <Greet name='App' heroName='Batman'>
          <p>This is children props</p>
        </Greet >
        <Greet name='Sai' heroName='Superman' />
        <Greet name='SAI' heroName='Spiderman'/> */}
      {/* <Welcome /> */}
      {/* <Hello /> */}
      </div>
    )
  }
};

export default App
