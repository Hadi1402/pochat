
import React, { useState, useEffect } from 'react';

function ChatApp() {
  const [messages, setMessages] = useState([ 
    { username: 'User 1', text: 'Hello!' }, 
    { username: 'User 2', text: 'Hi there!' } 
  ]);
  const [username, setUsername] = useState('');
  const [text, setText] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setMessages(messages => [
        ...messages,
        { username: 'User 1', text: 'Hello!' } 
      ]);
    },100000000000);
    return () => clearInterval(interval);
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    setMessages(messages => [
      ...messages, 
      { username, text }
    ]);
    setText('');
  }

  function handleChange(e) {
    if (e.target.name === 'username') {
      setUsername(e.target.value);
    } else {
      setText(e.target.value);
    }
  }

  return (
    <div>
      <h1>ChatApp</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="username" 
          placeholder="Username" 
          value={username}
          onChange={handleChange}
        />
        <input 
          type="text" 
          name="text" 
          placeholder="Message" 
          value={text}
          onChange={handleChange}
        />
        <button type="submit">Send</button>
      </form>
      {messages.map(message => (
        <p>
          <strong>{message.username}: </strong> {message.text}
        </p>
      ))}
    </div>
  );

      }
  export default ChatApp