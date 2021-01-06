import React   from 'react'
import styles from "../styles/Navigation.module.css";
// import classnames from "classnames";
import Link from "next/link";
// import Image from "next/image";

const Navigation = () => {
	// const [scrolled, setScrolled] = useState(false);

	// 	useEffect(() => {
	// 		window.addEventListener("scroll", handleScrolled);
	// 		const handleScrolled = () => {
	// 			let offset = 660;
	// 			if (window.scrollY > offset) {
	// 				scrolled(true);
	// 			}  
	// 		};
	// 		   return function cleanupListener() {
	// 					window.removeEventListener("scroll", handleScrolled);
	// 				};
	// 	});

	return (
			<nav
				className={styles.navbar}>
				{/* className={classnames(styles.navbar, {
					[styles.scrolled]: setScrolled,
				})}> */}
				<ul className={styles.NavigationList}>
					<li className={styles.NavigationItem}>
						<Link href='/'>
							<a>Home</a>
						</Link>
					</li>
					<li className={styles.NavigationItem}>
						<Link href='/'>
							<a>About</a>
						</Link>
					</li>
					<li className={styles.NavigationItem}>
						<Link href='/'>
							<a>Services</a>
						</Link>
					</li>
					<li className={styles.NavigationItem}>
						<Link href='/'>
							<a>Projects</a>
						</Link>
					</li>
					<img className={styles.img} src='/Dualsight_png.png' alt='logo' />
					<li className={styles.NavigationItem}>
						<Link href='/'>
							<a>Contact</a>
						</Link>
					</li>
					<li className={styles.NavigationItem}>
						<Link href='/'>
							<a>Consultation</a>
						</Link>
					</li>
					<li className={styles.NavigationItem}>
						<Link href='/'>
							<a>Showcase</a>
						</Link>
					</li>
				</ul>
			</nav>
	);
}

export default Navigation

