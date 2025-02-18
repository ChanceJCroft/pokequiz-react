import { useEffect, useRef, useState } from "react";
import { Pokemon } from "../types/PokemonTypes";

function QuizModal() {
    const [pokemon, setPokemon] = useState<Pokemon | null>(null);
    //const [loading, setLoading] = useState(true);

    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const fetchPokemon = async () => {
          //setLoading(true);
          const randomId = Math.floor(Math.random() * 150) + 1;
          const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
          const data = await response.json();
          setPokemon({
            name: data.name,
            id: data.id,
            imageUrl: data.sprites.front_default
          })
          //setLoading(false);
        };
    
        fetchPokemon();
      }, []);

      const checkIfCorrect = () => {
        if(inputRef.current) {
            const inputText: string = inputRef.current?.value;
            if(inputText.toLowerCase() == pokemon?.name.toLowerCase()) {
                alert("Correct!");
                //Create new modal component
                //Display new modal component
                //2 buttons -- Try Again and Close
                //Try again re-renders this component and closes the additional modal
                //Close closes all modals
            }
        }
      }
  
    return (
        <>
            <button type="button" className="btn btn-primary mx-auto w-auto mw-100" data-bs-toggle="modal" data-bs-target="#quizModal">
            Start the Quiz!
            </button>

            <div className="modal fade" id="quizModal" data-bs-backdrop="static" tabIndex={-1} aria-labelledby="quizModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="quizModalLabel">Who is  #{pokemon?.id}?</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <input type="text" ref={inputRef} placeholder="Which Pokemon is it?" id="pokemon-guess"></input>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary" onClick={checkIfCorrect}>Submit</button>
                </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default QuizModal;