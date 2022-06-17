import "./App.css";
import Homepage from "./pages/homepage/homepage.component";
import { Switch, Route } from "react-router-dom";

const Shoes = () => {
	return (
		<div>
			<h1>THis is a shoes page</h1>
		</div>
	);
};

function App() {
	return (
		<div>
			<Switch>
				<Route exact path="/" component={Homepage} />
				<Route path="/shoes" component={Shoes} />
			</Switch>
		</div>
	);
}

export default App;
