import React, { useEffect, useState } from "react";
import axios from "axios";

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
     Moteur de recherche
    </div>
  );
}

export default Search;
