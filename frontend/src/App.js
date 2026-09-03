import React, { useState, useEffect } from 'react';
function App() {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState('');
  useEffect(() => {
    fetch('http://localhost:4000/messages')
    .then(res => res.json())
    .then(data => setMessages(data));
  }, []);
  const sendMessage = async () => {
    await fetch('http://localhost:4000/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text }),
    });
    setText('');
    const res = await fetch('http://localhost:4000/messages');
    const data = await res.json();
    setMessages(data);
  };
  return (
    <div style={{ padding: 20 }}>
      <h2>Messages</h2>
      <ul>
        {messages.map((m, idx) => (
          <li key={idx}>{m.text}</li>
        ))}
      </ul>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default App;
