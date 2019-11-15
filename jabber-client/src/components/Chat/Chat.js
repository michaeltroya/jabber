import React, { useState, useEffect } from 'react';
import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';
import Messages from '../Messages/Messages';
// import Users from '../Users/Users';

import queryString from 'query-string';
import io from 'socket.io-client';

let socket;

function Chat() {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  // const [users, setUsers] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const ENDPOINT = 'http://localhost:5000/';

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

    // socket.on('roomData', ({ users }) => {
    //   setUsers(users);
    // });

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
    <div className="chat-container">
      <InfoBar room={room} />
      <Messages messages={messages} name={name} />
      <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
    </div>
  );
}

export default Chat;
