import { FC, useState, useEffect } from 'react'
import style from "./pokemonCard.module.css"
import { usePokemonPagination } from '@hooks/usePokemonPagination'

export interface PokemonCardProps {
    id: string,
    picture?: string,
    name: string
    // onClick: Function
}

const PokemonCard: FC<PokemonCardProps> = ({ id, picture = '', name }) => {
    const { onClickPokemon, updateColor, colorCardPokemon, backgroundPictureColor } = usePokemonPagination()

    useEffect(() => {
        backgroundPictureColor(picture).then((result => {
            updateColor(result);
        })).catch(err => console.error(err));
        return () => {
            updateColor('');
        };
    }, [])

    return (
        
        <div style={{ backgroundColor: colorCardPokemon }} className={style.card} onClick={() => onClickPokemon(name)}>
            <img src={picture} alt="" />
            <h2 className={style.card_title}>#{id}</h2>
            <h2 className={style.card_title}>{name}</h2>
        </div>

    )
}

export default PokemonCard