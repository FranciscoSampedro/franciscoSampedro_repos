import React from 'react';
import styles from './styles/Home.module.css';
import { useState, useEffect } from "react";
import Card from './Card';
export interface HomeInterface {}

const Home : React.FC<HomeInterface> = () => {
	return (
		<>
		<Card pokemon=/>
		</>
	);
};

export default Home;
