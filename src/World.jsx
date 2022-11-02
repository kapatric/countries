import React, { useState, useEffect } from "react";
import Modal from "./Modal.jsx";

export default function World({ country }) {
  const [modalData, setModalData] = useState();
  const [showModal, setShowModal] = useState(false);
  console.log(country, "World")
  return (
    <div>
      <section>
          <div className="gallery">
            {country.map((country) => (
              <div key={country.name} onClick={() => setShowModal(true)}>
                <img
                  src={country.flags.png}
                  alt=""
                  onClick={() => {
                    setModalData(country);
                  }}
                />
              </div>
            ))}
          </div>
          <Modal
            modalData={modalData}
            setShowModal={setShowModal}
            showModal={showModal}
            onClose={() => setShowModal(false)}
          />
          </section>
    </div>
  )
}
