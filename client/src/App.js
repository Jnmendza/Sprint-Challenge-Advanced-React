import React from 'react';
import './App.css';
import axios from 'axios'
import PlayerList from './components/PlayerList';
import Navbar from './components/Navbar';
import styled from "styled-components";

const AppContainer = styled.div`
  margin: 0 auto;
`;

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
    <AppContainer>
      <Navbar />
      <PlayerList players={this.state.player}/>
    </AppContainer>
   );
  }
}

export default App;
