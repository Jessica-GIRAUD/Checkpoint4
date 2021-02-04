import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DessertCard from "./components/DessertCard";
import ReceipeCard from "./components/ReceipeCard";
import NavBar from "./components/Navbar";

function App() {
  return (
    <Router>
      <NavBar/>
      <Switch>
        <Route exact path="/" component={DessertCard}></Route>
        <Route exact path="/receipe/:id" component={ReceipeCard}></Route>
      </Switch>
    </Router>
  );
}

export default App;
