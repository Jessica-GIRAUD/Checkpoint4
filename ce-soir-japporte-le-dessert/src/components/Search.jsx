import React, { useEffect, useState } from "react";
import axios from "axios";
import DessertCard from "./DessertCard";

function Search() {
  const [desserts, setDesserts] = useState([]);

  // Retrieve dessert from database
  useEffect(() => {
    axios
      .get(`/search/byingredient?name=`)
      .then((res) => res.data)
      .then((data) => setDesserts(data));
  }, []);

  return (
    <div>
      <DessertCard desserts={desserts} />
    </div>
  );
}

export default Search;
