import React, { useEffect } from "react";
import Link from "next/link";
import Typing from "../components/Typing";

import styles from "../styles/Banner.module.css";

const isServer = typeof window === "undefined";
const WOW = !isServer ? require("wow.js") : null;

function Banner() {
	useEffect(() => {
		new WOW().init();
	}, []);

	return (
		<div>
			<div id='home' className={styles.container}>
				<div className={styles.content}>
					<div className={styles.img}>
						<img
							className={`${styles.img} ${"wow tada"}`}
							src='/CodeMonarch.png'
							alt='Code Monarch logo'
						/>
					</div>
					<div
						data-wow-delay='670ms'
						className={`${styles.Typewriter} ${"wow zoomInRight"}`}>
						<Typing />
					</div>
				</div>
				<div data-wow-delay='1000ms' className={"wow fadeInUpBig"}>
					<Link href='/#about'>
						<a className={styles.downArrow}>
							<i className='fas fa-arrow-down' aria-hidden='true'></i>
						</a>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Banner;
