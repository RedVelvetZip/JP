import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Info from "../components/Info";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { homeObjOne, homeObjTwo } from "../components/Info/Data";

const Home = () => {
	return (
		<>
			<Navbar />
			<Hero />
			<Info {...homeObjOne} />
			<Info {...homeObjTwo} />
			<Services />
			<Contact />
			<Footer />
		</>
	);
};

export default Home;
