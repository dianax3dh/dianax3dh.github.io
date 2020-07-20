import React from 'react';
import PopUpMe from './popUpMe.js';
import PopUpPortfolio from './popUpPortfolio.js'

const Modal = props => {
  
  function displayInfo () {
    switch(props.modalInfo) {
      case 'Modal-Me':
        return <PopUpMe/>
      case 'Modal-Portfolio':
        return <PopUpPortfolio/>
      default:
        return null
    }
  }

  function closeModal (e) {
    e.stopPropagation()
    props.closeModal()
  }

  let modal = (
      <div 
      className="modal-1"
      onClick={ closeModal }>

        <div className="modal-content-1"
          onClick={ e => e.stopPropagation() }>
          
          <span 
            className="close"
            onClick={ closeModal }>&times;
          </span>

          <div className="modal-flex">
            {displayInfo()}
          </div>

        </div>

      </div>
    )

    return ( props.displayModal ? modal : null);
}

export default Modal;
