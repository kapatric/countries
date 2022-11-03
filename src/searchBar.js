import React, { useState } from "react"
import World from "./World.jsx"
import Modal from "./Modal.jsx";
import App from "./App.js"

export default function SearchBar(){
  const [searchInput, setSearchInput] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState();
  const country = searchInput;

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  }
  if (searchInput.length > 0) {
    country.filter((country) => {
      return (
        <div key={country.name} onClick={() => setShowModal(true)}>
          <img
            src={country.flags.png}
            alt=""
            onClick={() => {
              setModalData(country);
            }}
          />
        </div>
      )
    });
  }

  return <div>
  <input type="search"
  placeholder="Country name"
  onChange={handleChange}
      value={searchInput} />
  </div>
};

