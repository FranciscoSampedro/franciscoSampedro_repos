import { useState } from "react"
import { SimplePokemon ,  PokemonPagination} from "@src/types/pagination"
import { incrementIndex, decrementIndex } from "../../src/store/pokemon"
import { getNewPokemons, setPokemon } from "../../src/store/pokemon/thunk"
import { useAppSelector, useAppDispatch } from "./hooks"
import { prominent } from "color.js"
import { Pokemon } from "@src/types/pokemon"

export interface IUsePokemonPagination {
    isLoading: boolean;
    simpleListPokemon: SimplePokemon[],
    activePokemon: Pokemon,
    pokemons?: PokemonPagination,
    colorCardPokemon:string,
    colorCardInfoPokemon:string,
    onClickNext: ()=>void,
    onClickPrevious: ()=>void,
    onClickPokemon: (name:string)=>void,
    mapPokemonList: () => Promise<void>,
    updateColor: (color: string) => void,
    updateColorInfo: (color: string) => void,
    backgroundPictureColor: (picture: string) => Promise<string>
}

export const usePokemonPagination = (): IUsePokemonPagination => {
    const [isLoading, setIsLoading] = useState(true)
    const [simpleListPokemon, setSimpleListPokemon] = useState<SimplePokemon[]>([])
    const [colorCardInfoPokemon, setColorInfo] = useState<string>('#fff');
    const [colorCardPokemon, setColor] = useState<string>('#fff');

    const { pokemons, index, activePokemon } = useAppSelector(
        (state) => state.pokemon

    );

    const dispatch = useAppDispatch();

    const onClickNext = ():void => {
        dispatch(incrementIndex());
        dispatch(getNewPokemons((index * 4)+4));
    };

    const onClickPrevious = ():void => {
        dispatch(decrementIndex());
        dispatch(getNewPokemons((index * 4)-4));
    };

    const onClickPokemon = (name: string):void => {
        console.log("", name);
        dispatch(setPokemon(name));
    };

  
    const mapPokemonList = async () => {
        	//@ts-ignore
        const newPokemonList: SimplePokemon[] = await pokemons.results?.map(({name, url})=>{
            const urlParts = url.split('/');
        const id = urlParts[urlParts.length - 2];
        const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
        
        return {id, picture, name}
        })

        setSimpleListPokemon([...newPokemonList])
        setIsLoading(false)
        
    }

    const updateColor = (color: string):void => {
        setColor(color)
    }

    const updateColorInfo = (color: string): void => {
        setColorInfo(color)
    }
        
    const backgroundPictureColor = (picture: string) => {
        return prominent(picture, { format: 'hex', sample: 30 }).then(color => color[1].toString())
    }
    
    return{
        isLoading,
        simpleListPokemon,
        activePokemon,
        pokemons,
        colorCardPokemon,
        colorCardInfoPokemon,
        onClickNext,
        onClickPrevious,
        onClickPokemon,
        mapPokemonList,
        updateColor,
        updateColorInfo,
        backgroundPictureColor,
        
    }
}