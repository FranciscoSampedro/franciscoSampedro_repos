import { useAppSelector } from "./../../hooks/hooks";
import axios from "axios";
import { Pokemon } from '@src/types/pokemon';
import { setActivePokemon, setPokemons } from "./pokemonSlice";

//@ts-ignore
export const getNewPokemons = (index: number) => (dispatch) => {
    axios
        .get(`https://pokeapi.co/api/v2/pokemon?limit=4&offset=${index}`)
        .then((response) => {
            //@ts-ignore
            const { data } = response;
            let pokemons: Pokemon[] = [];
            //@ts-ignore
            dispatch(setPokemons(data));
        })
        .catch((error) => console.log(error));
};

//@ts-ignore
export const setPokemon = (name: string) => (dispatch) => {
    axios
        .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then((response) => {
            //@ts-ignore
            const { data } = response;
            dispatch(setActivePokemon(data));
        })
        .catch((error) => console.log(error));
};
