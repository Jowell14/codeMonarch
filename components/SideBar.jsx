import { motion } from "framer-motion";
import React, {useState} from "react";
import styles from "../styles/Sidebar.module.css";
import "react-sidebar-ui/dist/index.css";
import Link from "next/link";



const variants = {
	open: { opacity: 1, y: 0 },
	closed: { opacity: 0, y: "-10px" },
};
const menuVariants = {
	open: { opacity: 1, x: 0 },
	closed: { opacity: 0 },
};


const SideBar = () => {
	const [sidebar, setSidebar] = useState(false);

	const showSidebar = () => setSidebar(!sidebar);

	return (
		<div className={styles.sidebar}>
			<div className={styles.menuIcon}>
				<i className='fas fa-bars fa-lg' onClick={showSidebar}></i>
			</div>
			{/* NAV SIDEBAR */}
			<nav className={sidebar ? styles.navMenuActive : styles.navMenu}>
				<ul className={styles.navList}>
					<li className={styles.navItem}>
						<Link href='/'>
							<a>Home</a>
						</Link>
					</li>
					<li className={styles.navItem}>
						<Link href='/'>
							<a>About</a>
						</Link>
					</li>
					<li className={styles.navItem}>
						<Link href='/'>
							<a>Contact</a>
						</Link>
					</li>
					<li className={styles.navItem}>
						<Link href='/'>
							<a>Clients</a>
						</Link>
					</li>
					<li className={styles.navItem}>
						<Link href='/'>
							<a>Projects</a>
						</Link>
					</li>
				</ul>
				{/* EXIT ICON */}
				<span className={styles.backIcon}>
					<i className='fas fa-times-circle fa-lg' onClick={showSidebar}></i>
				</span>
			</nav>
		</div>
	);

}


export default SideBar
