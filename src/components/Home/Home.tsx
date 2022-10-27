import React from 'react';
import style from './styles/Home.module.css';
import { useState, useEffect } from "react";
import Card from './Card';
export interface HomeInterface { }
import { getPokemon } from '@services/pokemon.service'
import { Pokemon, Other } from '@src/types/pokemon.type';
import { usePokemonPagination } from '@hooks/usePokemonPagination';
const Home: React.FC<HomeInterface> = () => {
	const { isLoading, loadPokemons, simpleListPokemon } = usePokemonPagination()
	console.log(simpleListPokemon)
	useEffect(() => {
		loadPokemons(0)
		console.log(isLoading)
	}, [])
	return (
		<>
			<div className={style.Home_container}>
				<h2 className={style.Home_h3__black}>Listado de Pokemon</h2>
				<div className={style.Home_leftContent}>
					<Card simpleListPokemon={simpleListPokemon} isLoading={isLoading} />
				</div>
				<div className={style.Home_RightContent}>

				</div>
				<div className={style.Home_Buttons}>
					{/* <button onClick={()=>{

					})} */}
				</div>
			</div>

		</>
	);
};

export default Home;
