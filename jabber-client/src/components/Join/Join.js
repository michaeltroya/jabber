import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Join() {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <div className="join-outer-container">
      <div className="join-inner-container">
        <h1 className="join-heading">Join</h1>
        <div>
          <input type="text" placeholder="Name" className="join-input" onChange={e => setName(e.target.value)} />
        </div>
        <div>
          <input type="text" placeholder="Room" className="join-input" onChange={e => setRoom(e.target.value)} />
        </div>
        <Link onClick={e => (!name || !room ? e.preventDefault() : null)} to={`/chat?name=${name}&room=${room}`}>
          <button className="button" type="submit">
            Sign in
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Join;
