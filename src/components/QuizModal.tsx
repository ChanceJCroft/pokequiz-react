import { useEffect, useState } from "react";
import { Pokemon } from "../types/PokemonTypes";

function QuizModal() {
    const [pokemon, setPokemon] = useState<Pokemon | null>(null);
    //const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPokemon = async () => {
          //setLoading(true);
          const randomId = Math.floor(Math.random() * 150) + 1;
          const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
          const data = await response.json();
          setPokemon({
            name: data.name,
            id: data.id
          })
          //setLoading(false);
        };
    
        fetchPokemon();
      }, []);
  
    return (
        <>
            <button type="button" className="btn btn-primary mx-auto w-auto mw-100" data-bs-toggle="modal" data-bs-target="#quizModal">
            Launch demo modal
            </button>

            <div className="modal fade" id="quizModal" tabIndex={-1} aria-labelledby="quizModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="quizModalLabel">No. {pokemon?.id}</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <input type="text" placeholder="Which Pokemon is it?" id="pokemon-guess"></input>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">Save changes</button>
                </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default QuizModal;