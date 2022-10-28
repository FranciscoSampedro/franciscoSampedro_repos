import React from 'react';
import style from './styles/Home.module.css';
import { useState, useEffect } from "react";
import Card from './Card';
export interface HomeInterface { }
import { getPokemon } from '@services/pokemon.service'
import { Pokemon, Other } from '@src/types/pokemon';
import { usePokemonPagination } from '@hooks/usePokemonPagination';
import SearchBar from './SearchBar';
import { useAppDispatch, useAppSelector } from '@hooks/hooks';
import PokemonCard from '@components/PokemonCard/pokemonCard';
import { decrementIndex, incrementIndex } from '../../store/pokemon/pokemonSlice';
import { getNewPokemons, setPokemon } from '../../store/pokemon/thunk';
import PokemonInfo from '@components/PokemonInfoSelected/pokemonInfo';
const Home: React.FC<HomeInterface> = () => {
	const { activePokemon, pokemons, isLoading, simpleListPokemon, onClickNext,
		onClickPrevious, onClickPokemon, mapPokemonList, loadPokemons,  nextLoadPokemon,backLoadPokemon,backUrl } = usePokemonPagination()
	// const [current, setCurrent] = useState<number>(0)

	useEffect(() => {
		mapPokemonList()
	}, [pokemons])
	
	// console.log(simpleListPokemon)
	// useEffect(() => {
	// 	loadPokemons(current)
	
	// }, [])

	// const { pokemons, index, activePokemon } = useAppSelector(
	// 	(state) => state.pokemon
	// );

	// const dispatch = useAppDispatch();
	// const onClickNext = () => {
	// 	dispatch(incrementIndex());
	// 	dispatch(getNewPokemons(index + 1));
	// };
	// const onClickPrevious = () => {
	// 	dispatch(decrementIndex());
	// 	dispatch(getNewPokemons(index - 1));
	// };

	// const onClickPokemon = (name: string) => {
	// 	dispatch(setPokemon(name));
	// };

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
					<Card simpleListPokemon={simpleListPokemon} isLoading={isLoading}  />
				</div>
				<div className={style.Home_RightContent}>
					<PokemonInfo/>
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
