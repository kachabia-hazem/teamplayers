import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styled from 'styled-components';

// Définition des éléments stylisés
const PlayerCard = styled(Card)`
  width: 300px; // Largeur fixe pour toutes les cartes
  height: 550px; // Hauteur fixe pour toutes les cartes, plus courte
  border-radius: 15px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  background: linear-gradient(135deg, #00A3E1, #0047AB);
  color: white;
  position: relative;
  margin: 20px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 150px; // Hauteur fixe pour l'image
  object-fit: cover; // Assure que l'image s'adapte bien à la taille
  border-bottom: 3px solid #FFD700;
`;

const PlayerInfo = styled(Card.Body)`
  padding: 15px;
  background: rgba(255, 255, 255, 0.1);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between; // Aligne les éléments de manière équilibrée
  height: calc(100% - 150px); // S'assure que la hauteur du body remplit l'espace restant
`;

const PlayerName = styled(Card.Title)`
  font-size: 1.4rem;
  font-weight: bold;
  text-transform: uppercase;
`;

const PlayerDetails = styled(Card.Text)`
  font-size: 1rem;
  color: #FFD700;
  margin: 5px 0;
`;

const StyledButton = styled(Button)`
  background-color: #FFD700;
  border: none;
  color: #0047AB;
  font-weight: bold;
  padding: 5px 10px;
  margin-top: 10px;

  &:hover {
    background-color: #ffcf40;
  }
`;

// Composant MyCard avec des props
function MyCard({ name, pos, team, nation, number, age, image }) {
  return (
    <PlayerCard>
      <CardImage
        src={image}
        alt={name}
      />
      <PlayerInfo>
        <PlayerName>{name}</PlayerName>
        <PlayerDetails>Position: {pos}</PlayerDetails>
        <PlayerDetails>Team: {team}</PlayerDetails>
        <PlayerDetails>Nation: {nation}</PlayerDetails>
        <PlayerDetails>Number: {number}</PlayerDetails>
        <PlayerDetails>Age: {age}</PlayerDetails>
        <StyledButton>More Info</StyledButton>
      </PlayerInfo>
    </PlayerCard>
  );
}

export default MyCard;
