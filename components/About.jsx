import React from "react";
import styles from "../styles/About.module.css";

const About = () => {
	return (
		<div className={styles.container}>
			<div className={styles.AboutTitle}>
				<h3>Welcome To CodeMonarch</h3>
				<p>
					We're a dedicated assembly of hand-picked developers, data scientists,
					engineers and business-oriented individuals, progressively hardened to
					their specialties with experience over time and spontaneous
					challenges. We tackle known and evolving problems everyday and have
					the workforce to offer solutions to your business, venture and startup
					on the spot.
				</p>
			</div>
			<div className={styles.row}>
				<div className={styles.card}>
					<div className={styles.content}>
						<h2>01</h2>
						<h3>Web Development</h3>
						<p>
							We craft intuitive graphical user interfaces and user experience,
							scalable and reliable backends and services as well as offer data
							sources by the standards of ever-evolving web technologies.
						</p>
						<span>Get Quote</span>
					</div>
				</div>
				<div className={styles.card}>
					<div className={styles.content}>
						<h2>02</h2>
						<h3>Mobile App Development</h3>
						<p>
							From development to deployment, we build robust Android and iOS
							apps, and where required, publish to Google Play Store and Apple
							Store respectively.
						</p>
						<span>Get Quote</span>
					</div>
				</div>
				<div className={styles.card}>
					<div className={styles.content}>
						<h2>03</h2>
						<h3>Graphics Design</h3>
						<p>
							Premium consultation on decentralised applications, trustless
							services, smart contracts and asset tokenization, cryptocurrency
							payments integration and related solutions.
						</p>
						<span>Get Quote</span>
					</div>
				</div>
				<div className={styles.card}>
					<div className={styles.content}>
						<h2>04</h2>
						<h3>UI & UX Design</h3>
						<p>
							Our engineers are highly skilled in home automation, surveillance
							systems, specialized black boxes and just about anything you'd
							need microprocessors and microcontrollers for.
						</p>
						<span>Get Quote</span>
					</div>
				</div>

				<div className={styles.card}>
					<div className={styles.content}>
						<h2>05</h2>
						<h3>Tutoring & Career Counselling</h3>
						<p>
							You can count on us to deliver stunning digital photography and
							multi-dimentional graphics, as well as user interface mockups.
						</p>
						<span>Get Quote</span>
					</div>
				</div>
			</div>
			<img src='/contact_us.svg' alt='contact us' srcSet='' />
		</div>
	);
};

export default About;
