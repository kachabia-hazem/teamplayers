import ListGroup from 'react-bootstrap/ListGroup';
import {player1,player2,player3,player4,player5,player6,player7,player8,player9,player10,player11} from "../players"
import MyCard from './Player';
import styled from 'styled-components';

function HorizontalExample() {
  return (
    <ListGroup horizontal>
        <MyCard name={player1.name} pos={player1.pos} team={player1.team} nation={player1.nationality} n={player1.number} age={player1.age} image={player1.image}/>
        <MyCard name={player2.name} pos={player2.pos} team={player2.team} nation={player2.nationality} n={player2.number} age={player2.age} image={player2.image}/>
        <MyCard name={player3.name} pos={player3.pos} team={player3.team} nation={player3.nationality} n={player3.number} age={player3.age} image={player3.image}/>
        <MyCard name={player4.name} pos={player4.pos} team={player4.team} nation={player4.nationality} n={player4.number} age={player4.age} image={player4.image}/>
        <MyCard name={player5.name} pos={player5.pos} team={player5.team} nation={player5.nationality} n={player5.number} age={player5.age} image={player5.image}/>
        <MyCard name={player6.name} pos={player6.pos} team={player6.team} nation={player6.nationality} n={player6.number} age={player6.age} image={player6.image}/>
        <MyCard name={player7.name} pos={player7.pos} team={player7.team} nation={player7.nationality} n={player7.number} age={player7.age} image={player7.image}/>
        <MyCard name={player8.name} pos={player8.pos} team={player8.team} nation={player8.nationality} n={player8.number} age={player8.age} image={player8.image}/>
        <MyCard name={player9.name} pos={player9.pos} team={player9.team} nation={player9.nationality} n={player9.number} age={player9.age} image={player9.image}/>
        <MyCard name={player10.name} pos={player10.pos} team={player10.team} nation={player10.nationality} n={player10.number} age={player10.age} image={player10.image}/>
        <MyCard name={player11.name} pos={player11.pos} team={player11.team} nation={player11.nationality} n={player11.number} age={player11.age} image={player11.image}/>
      
    </ListGroup>
  );
}

export default HorizontalExample;