import { useState } from "react"
import { SimplePokemon , Result} from "@src/types/paginationType"
import { getPokemons } from "@services/pokemon.service"
export const usePokemonPagination = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [simpleListPokemon, setSimpleListPokemon] = useState<SimplePokemon[]>([])

    const loadPokemons = async (pagination: number) => {
        setIsLoading(true)
        const response = await getPokemons(pagination)
        // console.log(response.results)
        mapPokemonList(response.results)

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
        loadPokemons
    }
}