import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo2.png';

function Join() {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <div className="join-container">
      <img src={logo} alt="logo" className="logo" />
      <div>
        <input type="text" placeholder="Name" className="join-input" onChange={e => setName(e.target.value)} />
      </div>
      <div>
        <input type="text" placeholder="Room" className="join-input" onChange={e => setRoom(e.target.value)} />
      </div>
      <Link onClick={e => (!name || !room ? e.preventDefault() : null)} to={`/chat?name=${name}&room=${room}`}>
        <button className="join-button" type="submit">
          Enter Chat
        </button>
      </Link>
    </div>
  );
}

export default Join;
