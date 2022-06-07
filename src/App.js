import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages";
import Signin from "./pages/signin";

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/sing-in" component={Signin} />
				<Route path="/" component={Home} exact />
			</Switch>
		</Router>
	);
}

export default App;
