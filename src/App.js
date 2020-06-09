import React,{Component} from 'react';
import {BrowserRouter} from 'react-router-dom';
import Routes from './routes'
import './App.css';

//O correto seria React.Component, mas fizemos um destruct
//Pode ser feito assim
//Export default class App extends Component{
//Ou assim
class App extends Component{
  render(){
    return(
      <BrowserRouter>
        <Routes/>
      </BrowserRouter>
    )
  };
}


//Se fizer a primeira linha, esta deve sumir
export default App;