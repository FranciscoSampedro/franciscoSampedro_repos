import { usePokemonPagination } from '@hooks/usePokemonPagination'
import React, { useEffect } from 'react'
import style from "./pokemonInfo.module.css"
export default function PokemonInfo() {
  const {activePokemon, colorInfo, colors1, setColorInfo} = usePokemonPagination()
    const picture = activePokemon?.sprites.front_default
    const sprites = activePokemon?.sprites
    
    useEffect(() => {
        colors1(picture).then((result => {
            setColorInfo(result);
        })).catch(err => console.error(err));
        return () => {
            setColorInfo('');
        };
    }, [picture])
  return (
      <div style={{ backgroundColor: colorInfo }} className={style.card_info}>
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
              activePokemon?.types.map((item,i)=>{
                return <p key={i}>{item.type.name}</p>
              }
              )
          }
          <p>Peso</p>
          <p>{activePokemon?.weight} Kg</p>
          <p>Movimientos</p>
          {console.log("test", activePokemon?.moves)} 
          <div className={style.card_info_sprite_container} >
              {sprites != undefined ?
                  Object.values(sprites).map((item, i) => {
                      return typeof (item) != 'object' ?
                      <div className={style.card_info_sprite_box}>
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
          
          {/* {activePokemon?.moves.map((item,i) => {
            return <p key={i}>{item.move}</p>
          })} */}
          
      </div>
  )
}


