import PokemonCard, { PokemonCardProps } from "@components/PokemonCard/pokemonCard";
import style from "./styles/Card.module.css"
interface Props {
    simpleListPokemon: any;
    isLoading: Boolean;
}
export const Card = ({ simpleListPokemon, isLoading }: Props) => {

    return (
        <>
            {
                isLoading ? <h1>Cargando...</h1> :
                    simpleListPokemon.map(({id,picture,name}: PokemonCardProps) => (

                        <PokemonCard id={id} picture={picture} name={name} key={`pokemon-card-${id}`}/>

                    ))
            }
        </>
    )
}

export default Card