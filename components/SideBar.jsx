import Link from "next/link";
import React, { useState } from "react";
import styles from "../styles/SideBar.module.css";

const SideBar = () => {
	const [sidebar, setSidebar] = useState(false);
	const [hideMenuIcon, setHideMenuIcon] = useState(false);

	const showSidebar = () => setSidebar(!sidebar);
	const showMenuIcon=()=> setHideMenuIcon(!hideMenuIcon)

	const toggleSidebar = () => {
		showSidebar();
		if (showSidebar) {
			showMenuIcon();
		}
	};
	const removeSidebar = () => {
			showSidebar()
			return showMenuIcon();
	};

	return (
		<div className={styles.sidebar}>
			<div className={hideMenuIcon ? styles.hideIcon : styles.menuIcon}>
				<i className='fas fa-bars fa-lg' onClick={toggleSidebar}></i>
			</div>
			{/* NAV SIDEBAR */}
			<nav className={sidebar ? styles.navMenuActive : styles.navMenu}>
				<ul className={styles.navList}>
					<li className={styles.navItem}>
						<Link href='/#home'>
							<a onClick={removeSidebar}>Home</a>
						</Link>
					</li>
					<li className={styles.navItem}>
						<Link href='/#about'>
							<a onClick={removeSidebar}>About</a>
						</Link>
					</li>
					<li className={styles.navItem}>
						<Link href='/#services'>
							<a onClick={removeSidebar}>Services</a>
						</Link>
					</li>
					<li className={styles.navItem}>
						<Link href='/#contact'>
							<a onClick={removeSidebar}>Contact</a>
						</Link>
					</li>
					<li className={styles.navItem}>
						<Link href='/blog'>
							<a onClick={removeSidebar}>Blog</a>
						</Link>
					</li>
				</ul>
				{/* EXIT ICON */}
				<span className={styles.backIcon}>
					<i className='fas fa-times-circle fa-lg' onClick={removeSidebar}></i>
				</span>
			</nav>
		</div>
	);
};

export default SideBar;
