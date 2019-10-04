import React from "react";
import styled from 'styled-components';

const Card = styled.div`
    width: 30%;
    background: #666666;
    margin: 10px auto;
`;

const PlayerInfo = styled.div`
    text-align: center;
`;

const PlayerCard = ({ key, name, country, searches }) => {
    return (
        <Card key={key}>
            <PlayerInfo>
                <h2>Name: {name}</h2>
                <h3>Country: {country}</h3>
                <h3>Searches: {searches}</h3> 
            </PlayerInfo>

        </Card>
    )
}
export default PlayerCard;