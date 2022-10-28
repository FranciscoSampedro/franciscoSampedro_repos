import { useState } from "react"
import { SimplePokemon , Result} from "@src/types/pagination"
import { getPokemons, getPokemonsStatic } from "@services/pokemon.service"
import { incrementIndex, decrementIndex } from "../../src/store/pokemon"
import { getNewPokemons, setPokemon } from "../../src/store/pokemon/thunk"
import { useAppSelector, useAppDispatch } from "./hooks"
import { prominent } from "color.js"
export const usePokemonPagination = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [simpleListPokemon, setSimpleListPokemon] = useState<SimplePokemon[]>([])
    const [nextUrl, setNextUrl] = useState<string>("")
    const [backUrl, setBackUrl] = useState<string>("")

    const { pokemons, index, activePokemon, result } = useAppSelector(
        (state) => state.pokemon

    );

    const dispatch = useAppDispatch();
    const onClickNext = () => {
        dispatch(incrementIndex());
        dispatch(getNewPokemons(index + 4));
    };
    const onClickPrevious = () => {
        dispatch(decrementIndex());
        dispatch(getNewPokemons(index - 1));
    };

    const onClickPokemon = (name: string) => {
        dispatch(setPokemon(name));
    };

    const loadPokemons = async (pagination: number) => {
        setIsLoading(true)
        const {results,next,previous} = await getPokemons(pagination)
        
        // console.log(response.results)
        // mapPokemonList(results)
        setNextUrl(next)
        setBackUrl(previous!)
       
    }
    const loadPoKemonStatic = async (url: string) =>{
       const {results,next,previous} = await getPokemonsStatic(url)
        // mapPokemonList(results)
        setNextUrl(next)
        setBackUrl(previous!)
    }
    const nextLoadPokemon = async () => {
        loadPoKemonStatic(nextUrl)
    }
    const backLoadPokemon = async () => {
        loadPoKemonStatic(backUrl)
    }
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

    const [color, setColor] = useState<string>('#fff');
    const [colorInfo, setColorInfo] = useState<string>('#fff');
    
    const colors1 = (picture: string) => {
        return prominent(picture, { format: 'hex', sample: 30 }).then(color => color[1].toString())
    }
    
    return{
        isLoading,
        simpleListPokemon,
        activePokemon,
        pokemons,
        color,
        colorInfo,
        loadPokemons,
        loadPoKemonStatic,
        nextLoadPokemon,
        backLoadPokemon,
        onClickNext,
        onClickPrevious,
        onClickPokemon,
        mapPokemonList,
        backUrl,
        setColor,
        colors1,
        setColorInfo
    }
}