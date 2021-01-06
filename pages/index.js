import Head from "next/head";
import SideBar from "../components/SideBar";
import Banner from "../components/Banner";
import Navigation from "../components/Navigation";
import About from "../components/About";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title> CodeMonarch </title> <link rel='icon' href='/favicon.ico ' />
			</Head>
			<SideBar />
			<Banner />
			<Navigation />
			<About />
		</div>
	);
}
