import './App.css';
import Form from './components/Form';
import Banner from './components/Banner';
import { useState } from 'react';

function App() {

  const [cardInfo, setCardInfo] = useState([]);

  const teams = [
    {
      nome: 'Programação',
      primary_color: '#57C278',
      secondary_color: '#D9F7E9'
    },

    {
      nome: 'Front',
      primary_color: '#82CFFA',
      secondary_color: '#E8F8FF'
    },

    {
      nome: 'Devops',
      primary_color: '#A6D157',
      secondary_color: '#F0F8E2'
    }
  ]

  const onCreateCard = (newCardInfo) => {
    setCardInfo([...cardInfo, newCardInfo])
  }

  return (
    <div className="App">
      <Banner /> 
      <Form onCreateCard={cardInfo => onCreateCard(cardInfo)}/>
    </div>
  );
}

export default App;
