import axios from './axios'
import { Pokemon } from '@src/types/pokemon.type'

export const getPokemon = aysnc (pokemons: string): Promise<Pokemon> => {
    const {data} = await.axios.get<Pokemon>(`/pokemon/${pokemons}`);
    return data;
}