import React from 'react';
import style from './styles/Home.module.css';
import { useState, useEffect } from "react";
import Card from './Card';
export interface HomeInterface { }
import { getPokemon } from '@services/pokemon.service'
import { Pokemon, Other } from '@src/types/pokemon.type';
import { usePokemonPagination } from '@hooks/usePokemonPagination';
import SearchBar from './SearchBar';
const Home: React.FC<HomeInterface> = () => {
	const { isLoading, simpleListPokemon, loadPokemons,  nextLoadPokemon,backLoadPokemon,backUrl } = usePokemonPagination()
	const [current, setCurrent] = useState<number>(0)

	// console.log(simpleListPokemon)
	useEffect(() => {
		loadPokemons(current)
	
	}, [])
	
	const onChange = (page: number)=>{
		console.log(page,"?>>>")
		setCurrent(page)
		loadPokemons((page*4)-4)
	}
	return (
		<>
			<div className={style.Home_container}>
				<div>
					<h2 className={style.Home_h3__black}>Listado de Pokemon</h2>
				</div>
				<div className={style.Home_Navbar}>
					<SearchBar onSearch={function (value: string): void {
						throw new Error('Function not implemented.');
					} }/>
				</div>
				<div className={style.Home_leftContent}>
					<Card simpleListPokemon={simpleListPokemon} isLoading={isLoading} />
				</div>
				<div className={style.Home_RightContent}>
					d
				</div>
				<div className={style.Home_Buttons}>
					
						<button disabled={!backUrl} onClick={backLoadPokemon}>Atrás</button>
					
					<button onClick={nextLoadPokemon}>Siguiente</button>
				</div>
			</div>

		</>
	);
};

export default Home;
