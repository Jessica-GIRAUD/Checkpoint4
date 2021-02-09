import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DessertsList from "./components/DessertsList";
import ReceipeCard from "./components/ReceipeCard";
import NavBar from "./components/Navbar";
import IngredientsList from "./components/IngredientsList";
import SearchByIngredient from "./components/SearchByIngredient";
import Random from "./components/Random";
import Search from "./components/Search";

function App() {
  return (
    <Router>
      <NavBar/>
      <Switch>
        <Route exact path="/" component={DessertsList}></Route>
        <Route exact path="/receipe/:id" component={ReceipeCard}></Route>
        <Route exact path="/ingredients" component={IngredientsList}></Route>
        <Route exact path="/search/byingredient" component={SearchByIngredient}></Route>
        <Route exact path="/random" component={Random}></Route>
        <Route exact path="/search" component={Search}></Route>
      </Switch>
    </Router>
  );
}

export default App;
