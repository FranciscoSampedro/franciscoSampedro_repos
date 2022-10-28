import React from 'react';
import style from './styles/Home.module.css';
import { useEffect } from "react";
import Card from './Card';
export interface HomeInterface { }
import { usePokemonPagination } from '@hooks/usePokemonPagination';
import SearchBar from './SearchBar';
import PokemonInfo from '@components/PokemonInfoSelected/pokemonInfo';

const Home: React.FC<HomeInterface> = () => {
	const { pokemons, isLoading, simpleListPokemon, onClickNext,
		onClickPrevious,  mapPokemonList } = usePokemonPagination()

	useEffect(() => {
		mapPokemonList()
	}, [pokemons])

	return (
		<>
			<div className={style.Home_container}>
				<div>
					<h2 className={style.Home_h3__black}>Listado de Pokemon</h2>
				</div>
				<div className={style.Home_Navbar}>
					<SearchBar onSearch={function (value: string): void {
						throw new Error('Function not implemented.');
					}} />
				</div>
				<div className={style.Home_leftContent}>
					<Card simpleListPokemon={simpleListPokemon} isLoading={isLoading} />
				</div>
				<div className={style.Home_RightContent}>
					<PokemonInfo />
				</div>
				<div className={style.Home_Buttons}>

					<button disabled={!pokemons?.previous} onClick={onClickPrevious}>Atrás</button>
					<button onClick={onClickNext}>Siguiente</button>
				</div>
			</div>

		</>
	);
};

export default Home;
