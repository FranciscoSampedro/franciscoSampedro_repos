import { useState } from "react"
import { SimplePokemon , Result} from "@src/types/paginationType"
import { getPokemons, getPokemonsStatic } from "@services/pokemon.service"
export const usePokemonPagination = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [simpleListPokemon, setSimpleListPokemon] = useState<SimplePokemon[]>([])
    const [nextUrl, setNextUrl] = useState<string>("")
    const [backUrl, setBackUrl] = useState<string>("")
    const loadPokemons = async (pagination: number) => {
        setIsLoading(true)
        const {results,next,previous} = await getPokemons(pagination)
        // console.log(response.results)
        mapPokemonList(results)
        setNextUrl(next)
        setBackUrl(previous!)
        console.log(nextUrl)
    }
    const loadPoKemonStatic = async (url: string) =>{
       const response = await getPokemonsStatic(url)
        mapPokemonList(response.results)
        setNextUrl(response.next)
    }
    const nextLoadPokemon = async () => {
        loadPoKemonStatic(nextUrl)
    }
    const backLoadPokemon = async () => {
        loadPoKemonStatic(nextUrl)
    }
    const mapPokemonList = async (pokemonList: Result[]) => {

        const newPokemonList: SimplePokemon[] = await pokemonList.map(({name, url})=>{
            const urlParts = url.split('/');
        const id = urlParts[urlParts.length - 2];
        const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
        
        return {id, picture, name}
        })

        setSimpleListPokemon([...newPokemonList])
        setIsLoading(false)
        
    }
    return{
        isLoading,
        simpleListPokemon,
        loadPokemons,
        loadPoKemonStatic,
        nextLoadPokemon
    }
}