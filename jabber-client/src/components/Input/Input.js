import React from 'react';

function Input({ message, setMessage, sendMessage }) {
  return (
    <form className="form">
      <input
        className="input"
        type="text"
        placeholder="Send message"
        value={message}
        onChange={e => setMessage(e.target.value)}
        onKeyPress={e => (e.key === 'Enter' ? sendMessage(e) : null)}
      />
      <button className="send-btn" onClick={e => sendMessage(e)}>
        Send
      </button>
    </form>
  );
}

export default Input;
