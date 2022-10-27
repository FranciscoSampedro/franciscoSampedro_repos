import  { FC,useState,useEffect } from 'react'
import style from "./pokemonCard.module.css"
import {prominent} from "color.js"
export interface PokemonCardProps {
    id:string,
    picture:string,
    name:string
}
const PokemonCard:FC<PokemonCardProps> = ({id,picture,name}) => {
    const [color, setColor] = useState<string>('#fff');

    const colors1 = (picture: string) => {
        return prominent(picture, { format: 'hex', sample: 30 }).then(color => color[1].toString())
    }

    useEffect(() => {
        colors1(picture).then((result => {
            setColor(result);
        })).catch(err => console.error(err));
        return () => {
            setColor('');
        };
    }, [])
    return (
      <div style={{backgroundColor:color}} className={ style.Home} >
          <h2 className={style.card_title}>{id}</h2>
          <img src={picture} alt="" />
          <h2>{name}</h2>
      </div>
  )
}

export default PokemonCard