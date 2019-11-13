import React, { useState, useEffect } from 'react';

import queryString from 'query-string';
import io from 'socket.io-client';

let socket;

function Chat() {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const ENDPOINT = 'localhost:5000';

  useEffect(() => {
    const { room, name } = queryString.parse(window.location.search);

    socket = io(ENDPOINT);

    setName(name);
    setRoom(room);

    socket.emit('join', { name, room });
  }, [ENDPOINT]);

  return (
    <div>
      <h1>Chat</h1>
    </div>
  );
}

export default Chat;
