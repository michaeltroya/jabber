import React from 'react';

function Message({ message: { user, text }, name }) {
  let isSentByCurrentUser = false;
  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return isSentByCurrentUser ? (
    <div className="message-container justify-end">
      <p className="sent-by">{trimmedName}</p>
      <div className="message-box blue-box">
        <p className="message-text white-text">{text}</p>
      </div>
    </div>
  ) : (
    <div className="message-container justify-start">
      <div className="message-box light-box">
        <p className="message-text dark-text">{text}</p>
      </div>
      <p className="sent-by">{user}</p>
    </div>
  );
}

export default Message;
