import { FC, useState, useEffect } from 'react'
import style from "./pokemonCard.module.css"
import { prominent } from "color.js"
import { usePokemonPagination } from '@hooks/usePokemonPagination'
export interface PokemonCardProps {
    id: string,
    picture?: string,
    name: string
    // onClick: Function
}
const PokemonCard: FC<PokemonCardProps> = ({ id, picture = '', name }) => {
    const { onClickPokemon, setColor, color, colors1 } = usePokemonPagination()
    // console.log("imagenorige:",picture)
    useEffect(() => {
        colors1(picture).then((result => {
            setColor(result);
        })).catch(err => console.error(err));
        return () => {
            setColor('');
        };
    }, [])
    return (
        <div style={{ backgroundColor: color }} className={style.card} onClick={() => onClickPokemon(name)}>
            <img src={picture} alt="" />
            <h2 className={style.card_title}>#{id}</h2>
            <h2 className={style.card_title}>{name}</h2>
        </div>

    )
}

export default PokemonCard