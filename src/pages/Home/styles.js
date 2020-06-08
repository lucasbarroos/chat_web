import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #E5E5E5;
`;

export const ChatView = styled.div`
    position: relative;
    width: 1080px;
    height: 630px;
    background: #4864E6;
    border-radius: 3px;
`;

export const Title = styled.div`
    position: absolute;
    width: 1041px;
    height: 56px;
    left: 20px;
    top: 30px;
    font-size: 48px;
    line-height: 66px;
    color: #FFFFFF;
`;

export const MessageContainer = styled.div`
    position: absolute;
    width: 1040px;
    height: 440px;
    overflow-y: auto;
    left: 20px;
    top: 107px;
    background: #F2F4FF;
    border-radius: 5px;
`;

export const TextInput = styled.input`
    position: absolute;
    width: 960px;
    height: 50px;
    left: 20px;
    bottom: 20px;
    background: #F2F4FF;
    border-radius: 5px;
    font-size: 18px;
    border: none;
    padding: 0px 10px 0px 10px;
`;

export const SendButton = styled.button`
    position: absolute;
    width: 50px;
    border-radius: 5px;
    height: 50px;
    right: 20px;
    bottom: 20px;
    cursor: pointer;
    border: none;
    box-shadow: 0px 0px 1px gray;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #4864E6;
`;

export const FriendMessage = styled.div`
    position: relative;
    padding: 20px;
    width: 40%;
    min-height: 40px;
    margin: 10px 0px 10px 20px;
    background-color: #DAEEF2;
    border-radius: 5px;
`;

export const MessageAuthor = styled.div`
    position: absolute;
    top: 10px;
    left: 20px;
    font-size: 14px;
    color: #4864E6;
`;

export const MessageContent = styled.div`
    margin-top: 15px;
    min-height: 30px;
    font-size: 18px;
`;

export const MessageTime = styled.div`
    position: absolute;
    font-size: 12px;
    bottom: 10px;
    right: 20px;
`;

export const OwnMessage = styled.div`
    position: relative;
    padding: 20px;
    width: 42%;
    min-height: 40px;
    margin: 10px 0px 10px 20px;
    background-color: #4864E6;
    border-radius: 5px;
    left: 50%;
`;

export const OwnMessageContent = styled.div`
    margin-top: 5px;
    min-height: 30px;
    font-size: 18px;
    color: white;
`;

export const OwnMessageTime = styled.div`
    position: absolute;
    font-size: 12px;
    bottom: 10px;
    right: 20px;
    color: white;
`;
