import { useAppDispatch } from '@hooks/hooks';
import { usePokemonPagination } from '@hooks/usePokemonPagination'
import { useEffect } from 'react'
import { setPokemon } from '../../store/pokemon/thunk';
import style from "./pokemonInfo.module.css"

export default function PokemonInfo() {
    const dispatch = useAppDispatch();
    const { activePokemon, colorCardInfoPokemon, backgroundPictureColor, updateColorInfo } = usePokemonPagination()
    const picture = activePokemon?.sprites.front_default
    const sprites = activePokemon?.sprites

    useEffect(() => {
        backgroundPictureColor(picture).then((result => {
            updateColorInfo(result);
        })).catch(err => console.error(err));
        return () => {
            updateColorInfo('');
        };
    }, [picture])

    useEffect(() => {
        dispatch(setPokemon("bulbasaur"));
    },[])

    return (

        <div style={{ backgroundColor: colorCardInfoPokemon }} className={style.card_info}>
            <img
                //@ts-ignore
                src={picture}
                alt={activePokemon?.name}
                className={style.cardInfo_image}
            />
            <p>#{activePokemon?.id}</p>
            <p>{activePokemon?.name}</p>
            <p>Types</p>
            {
                activePokemon?.types.map((item, i) => {
                    return <p key={i}>{item.type.name}</p>
                }
                )
            }
            <p>Peso</p>
            <p>{activePokemon?.weight} Kg</p>
            <p>Movimientos</p>
            <div className={style.card_info_sprite_container} >
                {sprites != undefined ?
                    Object.values(sprites).map((item, i) => {
                        return typeof (item) != 'object' ?
                            <div className={style.card_info_sprite_box} key={item}>
                                <img
                                    //@ts-ignore
                                    src={item}
                                    alt={item}
                                    className={style.cardInfo_image}
                                />
                            </div>
                            : <></>
                    })
                    : <></>}
            </div>

        </div>
    )
}


