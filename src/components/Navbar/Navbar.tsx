import React from 'react';
export interface NavbarInterface {}
import style from "./Navbar.module.css"
const Navbar : React.FC<NavbarInterface> = () => {
	return <div className={style.Nav}>
		<></>
	</div>;
};

export default Navbar;
