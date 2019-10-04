import React from 'react';
import './App.css';
import axios from 'axios'
import PlayerList from './components/PlayerList';

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
          this.setState({
            player: playerData
          })
        })
        .catch(err => console.log(err))
    }
  
  render() {
  return (
    <div className="App">
      <PlayerList players={this.state.player}/>
    </div>
   );
  }
}

export default App;
