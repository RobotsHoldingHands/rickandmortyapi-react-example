import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RickAndMortyAPI from './services/RickAndMortyAPI'
import Card from './components/Card'

async function loadAllCharacters(callback) {
  const rickAndMortyAPIService = new RickAndMortyAPI();

  const characters = await rickAndMortyAPIService.getCharacters();
  console.log(characters);

  const characterCards = characters.results.map(ch => <Card character={ch}/>)

  callback(characterCards);
}

function App() {
  const [ cards, setCards ] = useState(<></>)

  loadAllCharacters(setCards);

  return (
    <>
      {cards}
    </>
  )
}

export default App
