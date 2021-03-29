import Head from "next/head";
import Banner from "../components/Banner";
import Navigation from "../components/Navigation";
import About from "../components/About";
import Contact from "../components/Contact";
import Services from "../components/Services";
import Sidebar from "../components/Sidebar";
import styles from "../styles/home.module.css";

export default function Home() {
	return (
		<div className={styles.container}>
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
			<Sidebar />
			<Navigation />
			<About />
			<Services />
			<Contact />
		</div>
	);
}
