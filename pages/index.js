import Head from "next/head";
import React, { useState } from "react";
import Banner from "../components/Banner";
import Navigation from "../components/Navigation";
import About from "../components/About";
import Contact from "../components/Contact";
import Services from "../components/Services";
import DropDown from "../components/DropDown";

export default function Home() {
	const [dropMenuVisibility, setdropMenuVisibility] = useState(true);
	const [hideMenuIcon, setHideMenuIcon] = useState(true);

	const hideDropdownMenu = () => setdropMenuVisibility(!dropMenuVisibility);
	const showMenuIcon = () => setHideMenuIcon(!hideMenuIcon);

	// Toggle dropdown when hamburger menu is clicked
	const toggleDropdown = () => {
		hideDropdownMenu();
		if (hideDropdownMenu) {
			showMenuIcon();
		}
	};
	// clear sidebar when screen is touched when dropdown is visible
	const clearScreen = () => {
		if (hideMenuIcon) {
			toggleDropdown();
		} else if (!hideMenuIcon) {
			return
		}
	};
	return (
		<div onClick={clearScreen}>
			<Head>
				<title> CodeMonarch </title> <link rel='icon' href='/favicon.ico ' />
				// FACEBOOK OG TAGS
				<meta
					property='og:url'
					content='http://www.nytimes.com/2015/02/19/arts/international/when-great-minds-dont-think-alike.html'
				/>
				<meta property='og:type' content='website' />
				<meta property='og:title' content='CodeMonarch website' />
				<meta
					property='og:description'
					content='We give small businesses that Enterprise feeling'
				/>
				<meta
					property='og:image'
					content='http://codemonarch.com/codemonarch.jpg'
				/>
				// FACEBOOK OG TAGS END
			</Head>
			<Banner />
			<DropDown
				toggleDropdown={toggleDropdown}
				dropMenuVisibility={dropMenuVisibility}
				hideMenuIcon={hideMenuIcon}
			/>
			<Navigation />
			<About />
			<Services />
			<Contact />
		</div>
	);
}
