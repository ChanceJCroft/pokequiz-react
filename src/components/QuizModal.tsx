import { useEffect, useRef, useState } from "react";
import { Pokemon } from "../types/PokemonTypes";
import { useDispatch } from "react-redux";
import { updatePokemon } from "../app/pokemonSlice";
import { onFailure, onSuccess } from "../app/successDisplaySlice";
import 'bootstrap/dist/js/bootstrap.bundle.min';

function QuizModal() {
    const [pokemon, setPokemon] = useState<Pokemon | null>(null);
    //const [loading, setLoading] = useState(true);
    //const pokemonTest = useSelector((state) => state.pokemon.value);
    const dispatch = useDispatch();

    const inputRef = useRef<HTMLInputElement>(null);
    const modalRef = useRef<HTMLDivElement>(null);
    //let shouldShowSuccessModal: boolean = false;

    useEffect(() => {
        const fetchPokemon = async () => {
          //setLoading(true);
          const randomId = Math.floor(Math.random() * 150) + 1;
          const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
          const data = await response.json();
          setPokemon({
            name: data.name,
            id: data.id,
            imageUrl: data.sprites.front_default,
            type: data.types[0].type.name
          })

          dispatch(updatePokemon(data));
          //setLoading(false);
        };
    
        fetchPokemon();
      }, []);

      const checkIfCorrect = () => {
        if(inputRef.current) {
            const inputText: string = inputRef.current?.value;
            if(inputText.toLowerCase() == pokemon?.name.toLowerCase()) {
                //Close this modal
                //Pass up some values to App (the Pokemon)
                //The app increases a score counter and display the pokemon picture
                dispatch(onSuccess());        
            } else {
                dispatch(onFailure());
                //Close this modal
                //Pass up some values to the app (the correct Pokemon)
                //The app resets the score counter
            }
        }
      }
  
    return (
        <>
            <button type="button" className="btn btn-primary mx-auto w-auto mw-100" data-bs-toggle="modal" data-bs-target="#quizModal">
            Start the Quiz!
            </button>

            <div className="modal fade" id="quizModal" ref={modalRef} tabIndex={-1} aria-labelledby="quizModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="quizModalLabel">Who is  #{pokemon?.id}?</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <h5 className="px-3">Hint, this Pokemon is a {pokemon?.type} type.</h5>
                <div className="modal-body">
                    <input type="text" ref={inputRef} placeholder="Which Pokemon is it?" id="pokemon-guess"></input>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={checkIfCorrect}>Submit</button>
                </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default QuizModal;