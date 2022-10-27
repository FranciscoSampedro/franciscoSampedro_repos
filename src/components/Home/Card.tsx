interface Props{
    pokemon: any;
    infoPokemon: any;
    loading: any;
}
export const Card = ({pokemon, infoPokemon, loading}:Props) => {
return (
    <>
    {
            loading ? <h1>Loading...</h1> :
                pokemon.map((item:any) => {
                    return (
                        <>
                            <div className="card" key={item.id} onClick={()=>infoPokemon(item)}>
                                <h2>{item.id}</h2>
                                <img src={item.sprites.front_default} alt="" />
                                <h2>{item.name}</h2>
                            </div>
                        </>
                    )
                })
        }
    </>
)
}

export default Card