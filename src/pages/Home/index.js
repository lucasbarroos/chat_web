import React, { useState } from 'react';
import { Animated } from 'react-animated-css';
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
  NewUserButton,
  NewUserText,
} from './styles';

const SOCKET_URL = 'http://localhost:3333';
const socket = io.connect(SOCKET_URL);

const iconStyle = {
  transform: 'rotate(90deg)',
  height: 30,
  width: 30,
};

const Home = () => {
  const [user, setUser] = useState(null);
  const [newName, setNewName] = useState('');
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');

  const newMessage = (newMsg) => {
    const actualMessages = messages;
    setMessages([...actualMessages, newMsg]);
  };

  socket.on('chat message', (data) => {
    newMessage(data);
  });

  const handleMessage = () => {
    if (message.length !== 0) {
      const msg = {
        author: user,
        message,
        time: '12:00 am',
      };

      socket.emit('chat message', msg);
      setMessage('');
    }
  };

  const handleName = () => {
    if (newName !== '') setUser(newName);
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
        {user ? (
          <>
            <TextInput
              placeholder="Type a message"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
            <SendButton onClick={handleMessage}>
              <NavigationIcon style={iconStyle} />
            </SendButton>
          </>
        )
          : (
            <>
              <NewUserText value={newName} onChange={(e) => setNewName(e.target.value)} placeholder="Choose a name" />
              <NewUserButton onClick={handleName}>
                Enter
              </NewUserButton>
            </>
          )}
      </ChatView>
    </Container>
  );
};

export default Home;
