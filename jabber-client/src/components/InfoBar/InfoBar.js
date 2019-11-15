import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose, faCircle } from '@fortawesome/free-solid-svg-icons';

function InfoBar({ room }) {
  return (
    <div className="info-bar">
      <div className="info-left-container">
        <FontAwesomeIcon icon={faCircle} color="lawngreen" />
        <h3>{room}</h3>
      </div>
      <div className="info-right-container">
        <a href="/">
          <FontAwesomeIcon icon={faWindowClose} color="white" />
        </a>
      </div>
    </div>
  );
}

export default InfoBar;
