import { useSelector } from 'react-redux';
import './App.css'
import QuizModal from './components/QuizModal'
import Title from './components/Title'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { PokemonState, SuccessState } from './types/PokemonTypes';

function App() {

  //When submit is pressed from the QuizModal capture some sort of change here
  //When that change occurs, set a value to TRUE or FALSE depending on what is passed (maybe use Redux)
  //Conditionally display the bottom portion based on that true/false value
  const pokemon = useSelector((state: PokemonState) => state.pokemon.value);
  const isSuccessful = useSelector((state: SuccessState) => state.success.value);

  return (
    <>
      <div className='d-flex flex-column'>
        <Title />
        <QuizModal />
        {isSuccessful && pokemon.name && <h5>Pokemon: {pokemon.name}</h5>}
      </div>
    </>
  )
}

export default App
