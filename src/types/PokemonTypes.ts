export interface Pokemon {
    name: string,
    id: number,
    imageUrl: string,
    type: string,
}


export interface PokemonState {
    pokemon: {
        value: Pokemon
    }
}


export interface SuccessModalProps {
    show: boolean;
  }

export interface SuccessState {
    success: {
        value: boolean
    }
}