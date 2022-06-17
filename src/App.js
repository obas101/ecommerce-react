import "./App.css";
import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
// import CollectionPreview from "./components/preview-collection/preview-collection.component";
import { Switch, Route } from "react-router-dom";

function App() {
	return (
		<div>
			<Switch>
				<Route exact path="/" component={Homepage} />
				<Route path="/shop" component={ShopPage} />
				{/* <Route path="/collection" component={CollectionPreview} /> */}
			</Switch>
		</div>
	);
}

export default App;
