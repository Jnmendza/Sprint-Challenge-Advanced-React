import React from 'react';
import './App.css';
import axios from 'axios'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      player: []
    }
  }

    componentDidMount() {
      axios
        .get(`http://localhost:5000/api/players`)
        .then(response => {
          console.log(response)
          let playerData = response.data;
          this.state({
            player: playerData
          })
        })
        .catch(err => {
          console.log(err)
        })
    }
  
  render() {
  return (
    <div className="App">
      Player List goes here
    </div>
   );
  }
}

export default App;
