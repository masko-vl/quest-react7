import React, {Component, Fragment} from 'react';
import axios from 'axios';

import Simpson from './components/simpson/simpson'
class App extends Component {

  state = {
      simpson: '',
      isLoading: true
    
    };
  componentDidMount(){
    axios.get('https://simpsons-quotes-api.herokuapp.com/quotes')
    // Extract the DATA from the received response
    .then(response => response.data)
    // Use this data to update the state
    .then(data => {
      console.log(data[0]);
      
      this.setState({
        simpson: data[0],
        isLoading:false
      });
  });
}
getSimpson=()=>{
  axios.get('https://simpsons-quotes-api.herokuapp.com/quotes')
    // Extract the DATA from the received response
    .then(response => response.data)
    // Use this data to update the state
    .then(data => {
      console.log(data[0]);
      
      this.setState({
        simpson: data[0],
        isLoading:false
      });
  });
}
  

  render() {
    return (
      <div className="App">
      {this.state.isLoading ? <h1>API IS LOADING...</h1> : <Fragment><Simpson simpson={this.state.simpson}/> 
        <button type="button" onClick={this.getSimpson}>Get simpson</button></Fragment>}
       
      </div>
    );
  }
}

export default App;
