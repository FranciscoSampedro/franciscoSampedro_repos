import React from 'react';
import style from "./styles/SearchBar.module.css"
const { useState }= React;
interface Props {
	onSearch: (value: string) => void;
}


const SearchBar = ( {onSearch} :Props) => {
	const [search, setSearch] = useState("");
	const onChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
		setSearch(e.target.value);
		if (e.target.value != null) {
			onSearch(search);
		}
	}	
	return (
	<div className={style.searchBar__container}>
		<div className={style.searchBar}>
			<input placeholder='Buscar' onChange={onChange}/>
		</div>
	</div>
	)
};

export default SearchBar;
