import './App.css';
import Form from './components/Form';
import Banner from './components/Banner';
import Team from './components/Team';
import { useState } from 'react';

function App() {

  const [cardInfo, setCardInfo] = useState([]);

  const teams = [
    {
      name: 'Programação',
      primary_color: '#57C278',
      secondary_color: '#D9F7E9'
    },

    {
      name: 'Front',
      primary_color: '#82CFFA',
      secondary_color: '#E8F8FF'
    },

    {
      name: 'Devops',
      primary_color: '#A6D157',
      secondary_color: '#F0F8E2'
    }
  ]

  const onCreateCard = (newCardInfo) => {
    setCardInfo([...cardInfo, newCardInfo])
    console.log(cardInfo)
  }

  return (
    <div className="App">
      <Banner /> 
      <Form teams={teams.map(team => team.name)} onCreateCard={cardInfo => onCreateCard(cardInfo)}/>

      {teams.map(team => {
        return (
          <Team name={team.name} 
            primary_color={team.primary_color}
            secondary_color = {team.secondary_color}
            key={team.name}
            cards={cardInfo.filter(card => card.teamValue === team.name)}/>
        )
      })}
 
    </div>
  );
}

export default App;
