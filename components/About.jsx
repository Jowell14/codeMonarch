import React,{useEffect} from "react";
import styles from "../styles/about.module.css";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";

const isServer = typeof window === "undefined";
const WOW = !isServer ? require("wow.js") : null;

const About = () => {
useEffect(() => {
new WOW().init();
}, [])

	return (
		<div id='about' className={styles.container}>
			<div className={`${styles.AboutTitle} ${"wow fadeInUpBig"}`}>
				<h3>About Us</h3>
				<p>
					We're a dedicated assembly of hand-picked developers, data scientists,
					engineers and business-oriented individuals, progressively hardened to
					their specialties with experience over time and spontaneous
					challenges. We tackle known and evolving problems everyday and have
					the workforce to offer solutions to your business, venture and startup
					on the spot.
				</p>
			</div>
		</div>
	);
};

export default About;
