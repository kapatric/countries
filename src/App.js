import React, { useState, useEffect } from "react";
import "./App.css";
import Modal from "./Modal.jsx";
import World from "./World.jsx";
import SearchBar from "./SearchBar.jsx";

export default function Pais() {
  const [country, setCountry] = useState();
  const [searchInput, setSearchInput] = useState("");

  

  const fetchCountries = async () => {
    const response = await fetch(
      "https://rampant-sign-production.up.railway.app/countries"
    );
    const json = await response.json();
    setCountry(json);
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  console.log(country);

  if (!country) return null;
  return (
    <>
      <nav className="navbar">
        Countries of the World
        <SearchBar setSearchInput={setSearchInput} searchInput={searchInput} />
      </nav>
      <World country={country} searchInput={searchInput} />
    </>
  );
}
