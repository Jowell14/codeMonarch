import React from "react";
import styles from "../styles/Banner.module.css";
import Typing from "../components/Typing";
// import Image from "next/image";
import SideBar from "../components/SideBar";

function Banner() {
	return (
		<div>
			<div className={styles.container}>
				<div className={styles.content}>
					<div className={styles.img}>
						{/* <Image
							src='/Dualsight_png.png'
							title='Dual Sight+'
							alt='Logo'
							width={170}
							height={170}
							quality={100}
						/> */}
						<img
							className={styles.img}
							src='/Dualsight_png.png'
							alt='Dual sight logo'
						/>
					</div>
					<h1 className={styles.h1}>CodeMonarch</h1>
				</div>
				<Typing />
				<div className={styles.downArrow}>
					<i className='fas fa-arrow-down'></i>
				</div>
				<SideBar />
			</div>
			{/* <Sidebar/> */}
		</div>
	);
}

export default Banner;
