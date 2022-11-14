import React from "react"
import "./Modal.css"


function Modal({ setShowModal, showModal, onClose, modalData }) {
  if (!showModal) { return null }
  console.log(modalData, "This is country name")
  return (
    <div className="modal" onClick={onClose}>
      <div className="modal=content" onClick={(e) => e.stopPropagation()
    }>
        <div className="modal-header">
          <h2 className="modal-title">{modalData.name}</h2>
        </div>
        <div className="modal-body">
          <img src={modalData.flags.png} alt=""/>
        </div>
        <div className="modal-footer">
          <h3><ul>
            Capital: {modalData.capital}<br></br>
            Population: {modalData.population}
            </ul>
          </h3>
          <button onClick={()=> setShowModal(false) }>Close</button>
        </div>
        
      </div>
      </div>
  )
}

export default Modal