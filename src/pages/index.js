import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Info from "../components/Info";
import Services from "../components/Services";
import Footer from "../components/Footer";
import { homeObjOne, homeObjThree, homeObjTwo } from "../components/Info/Data";

const Home = () => {
	return (
		<>
			<Navbar />
			<Hero />
			<Info {...homeObjOne} />
			<Info {...homeObjTwo} />
			<Services />
			<Info {...homeObjThree} />
			<Footer />
		</>
	);
};

export default Home;
