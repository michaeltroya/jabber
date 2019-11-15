import React from 'react';
import ReactEmoji from 'react-emoji';

function Message({ message: { user, text }, name }) {
  let isSentByCurrentUser = false;
  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return isSentByCurrentUser ? (
    <div className="message-container">
      <p className="sent-by">{trimmedName}</p>
      <div className="message-box blue-box">
        <p className="message-text white-text">{ReactEmoji.emojify(text)}</p>
      </div>
    </div>
  ) : (
    <div className="message-container justify-start">
      <div className="message-box light-box">
        <p className="message-text dark-text">{ReactEmoji.emojify(text)}</p>
      </div>
      <p className="sent-by">{user}</p>
    </div>
  );
}

export default Message;
