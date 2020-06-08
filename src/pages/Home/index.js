import React, { useState } from 'react';
import NavigationIcon from '@material-ui/icons/Navigation';
import io from 'socket.io-client';
import {
  Container,
  ChatView,
  Title,
  MessageContainer,
  TextInput,
  SendButton,
  FriendMessage,
  MessageTime,
  MessageAuthor,
  MessageContent,
  OwnMessage,
  OwnMessageContent,
  OwnMessageTime,
} from './styles';

const SOCKET_URL = 'http://localhost:3333';
const socket = io.connect(SOCKET_URL);

const iconStyle = {
  transform: 'rotate(90deg)',
  height: 30,
  width: 30,
};

const Home = () => {
  const [user] = useState('Lucas Barros');
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');

  const newMessage = (message) => {
    const actualMessages = messages;
    setMessages([...actualMessages, message]);
  };

  socket.on('chat message', (data) => {
    newMessage(data);
  });

  const handleMessage = () => {
    if (message.length !== 0) {
      socket.emit('chat message', {
        author: user,
        message,
        time: '12:00 am',
      });
      setMessage('');
    }
  };

  return (
    <Container>
      <ChatView>
        <Title>Let's chat</Title>
        <MessageContainer>
          {
            messages.map((element) => (element.author !== user ? (
              <FriendMessage>
                <MessageAuthor>{element.author}</MessageAuthor>
                <MessageContent>{element.message}</MessageContent>
                <MessageTime>
                  {element.time}
                </MessageTime>
              </FriendMessage>
            ) : (
              <OwnMessage>
                <OwnMessageContent>{element.message}</OwnMessageContent>
                <OwnMessageTime>{element.time}</OwnMessageTime>
              </OwnMessage>
            )))
          }
        </MessageContainer>
        <TextInput
          placeholder="Type a message"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />
        <SendButton>
          <NavigationIcon onClick={handleMessage} style={iconStyle} />
        </SendButton>
      </ChatView>
    </Container>
  );
};

export default Home;
