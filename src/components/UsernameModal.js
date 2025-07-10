import React, { useState } from 'react';

const UsernameModal = ({ open, onSubmit }) => {
  const [input, setInput] = useState('');

  if (!open) return null;

  return (
    <div className="username-modal-overlay">
      <div className="username-modal">
        <h2>Welcome!</h2>
        <p>Please enter your username:</p>
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Enter username"
          autoFocus
        />
        <button
          onClick={() => {
            if (input.trim()) onSubmit(input.trim());
          }}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default UsernameModal;