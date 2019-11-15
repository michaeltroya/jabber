import React, { useState, useEffect } from 'react';
import InfoBar from '../InfoBar/InfoBar';

import queryString from 'query-string';
import io from 'socket.io-client';

let socket;

function Chat() {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const ENDPOINT = 'https://project-chat-application.herokuapp.com/';

  useEffect(() => {
    const { name, room } = queryString.parse(window.location.search);

    socket = io(ENDPOINT);

    setRoom(room);
    setName(name);

    socket.emit('join', { name, room }, error => {
      if (error) {
        alert(error);
      }
    });
  }, [ENDPOINT]);

  useEffect(() => {
    socket.on('message', message => {
      setMessages([...messages, message]);
    });

    return () => {
      socket.emit('disconnect');

      socket.off();
    };
  }, [messages]);

  const sendMessage = event => {
    event.preventDefault();

    if (message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  };

  console.log(message, messages);

  return (
    <div className="chat-outer-container">
      <div className="chat-inner-container">
        <InfoBar room={room} />
        {/* <input type="text" value={message} onChange={e => setMessage(e.target.value)} onKeyPress={e => (e.key === 'Enter' ? sendMessage(e) : null)} /> */}
      </div>
    </div>
  );
}

export default Chat;
