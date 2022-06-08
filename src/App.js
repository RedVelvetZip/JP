import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages";
import ContactPage from "./pages/contact-us";

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/" component={Home} exact />
				<Route path="/contact" component={ContactPage} exact />
			</Switch>
		</Router>
	);
}

export default App;
