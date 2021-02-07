import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DessertCard from "./components/DessertCard";
import ReceipeCard from "./components/ReceipeCard";
import NavBar from "./components/Navbar";
import IngredientsList from "./components/IngredientsList";
import Search from "./components/Search";
import Random from "./components/Random";

function App() {
  return (
    <Router>
      <NavBar/>
      <Switch>
        <Route exact path="/" component={DessertCard}></Route>
        <Route exact path="/receipe/:id" component={ReceipeCard}></Route>
        <Route exact path="/ingredients" component={IngredientsList}></Route>
        <Route exact path="/search" component={Search}></Route>
        <Route exact path="/random" component={Random}></Route>
      </Switch>
    </Router>
  );
}

export default App;
