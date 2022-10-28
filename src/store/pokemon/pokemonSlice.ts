import { createSlice } from '@reduxjs/toolkit';
import { PokemonPagination , Result } from '@src/types/pagination';
import { Pokemon } from "@src/types/pokemon";
import axios from "axios";

interface PokemonState {
    activePokemon: Pokemon
    pokemons?: PokemonPagination
    result?: Result
    index: number
}

const initialState: PokemonState={
    //@ts-ignore
    activePokemon:  null,
    //@ts-ignore
    result:null,
    index:0
}


//@ts-ignore
export const pokemonSlice = createSlice({
    name: "pokemon",
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        setPokemons: (state, action) => {
            //@ts-ignore
            state.pokemons = action.payload;
        },
        setActivePokemon: (state, action) => {
            //@ts-ignore
            state.activePokemon = action.payload;
        },
        setResult:(state,action)=>{
            //@ts-ignore
            state.result = action.payload;
        },
        incrementIndex: (state) => {
            state.index = state.index + 1;
        },
        decrementIndex: (state) => {
            state.index = state.index - 1;
        },
    },
});

export const { setPokemons, setActivePokemon, setResult ,incrementIndex, decrementIndex } =
    pokemonSlice.actions;

export default pokemonSlice.reducer;

//@ts-ignore
export const fetchInitialPokemons = () => (dispatch) => {
    axios
        .get(
            `https://pokeapi.co/api/v2/pokemon?limit=4&offset=${initialState.index}`
        )
        .then((response) => {
            //@ts-ignore
            const { data } = response;
            let pokemons: Pokemon[] = [];
            //@ts-ignore
            dispatch(setPokemons(data));
            console.log("data:",data);
            dispatch(setResult(data.results));
        })
        .catch((error) => console.log(error));
};
