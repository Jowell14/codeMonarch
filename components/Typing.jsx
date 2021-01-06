// filename: Typing.js
// React version: "^16.12.0"
import React from "react";
// Import the desired words
import words from "./words";
import Typewriter from "typewriter-effect";
import styles from "../styles/Banner.module.css";


function Typing() {
	return (
		<div className={styles.Typewriter}>
			<Typewriter
				options={{
					strings: [...words],
					autoStart: true,
					loop: true,
					delay: 15,
					deleteSpeed: 2,
					skipAddStyles: true,
					wrapperClassName: "Typewriter"
				}}
			/>
		</div>
	)
}


export default Typing;
