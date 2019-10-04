import React from "react";
import PlayerCard from "./PlayerCard";
import styled from 'styled-components';

const List = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 80%;
    margin: 10px auto;
    border: solid 2px grey;

`;

const PlayerList= ({players}) => {
    return (
      <List>
        {players.map( player => (
          <PlayerCard 
            key={player.id} 
            name={player.name} 
            country={player.country}
            searches={player.searches}
          />
        ))}
      </List>
    )
  }

export default PlayerList;