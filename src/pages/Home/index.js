import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const SOCKET_URL = 'http://localhost:3333';
io.connect(SOCKET_URL);

const Home = () => {
  const [messages, setMessages] = useState([]);

  return (
    <div>
      <h1>Chat</h1>
    </div>
  );
};

export default Home;
