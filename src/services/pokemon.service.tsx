import axios from './axios'
import { Pokemon } from '../types/pokemon'
import { PokemonPagination } from '@src/types/pagination';
export const getPokemon = async (pokemons: string): Promise<Pokemon> => {
    const {data} = await axios.get<Pokemon>(`/pokemon/${pokemons}`)
    return data;
}

export const getPokemons = async (pagination: number): Promise<PokemonPagination> => {
    const {data} = await axios.get<PokemonPagination>(`/pokemon/?limit=4&offset=${pagination}`)
    return data
}

export const getPokemonsStatic = async (url: string): Promise<PokemonPagination> => {
    const { data } = await axios.get<PokemonPagination>(url)
    return data
}

