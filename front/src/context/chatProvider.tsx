import ChatContext from './chatContext';
import {useState, ReactNode} from 'react';

const ChatProvider = ({children}: {children: ReactNode}) => {
	const [message, setMessage] = useState({
		content: '',
		sender: '',
		timestamp: '',
	});

	const [messages, setMessages] = useState([]);

	const value = {message, setMessage, messages, setMessages};

	return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
};

export default ChatProvider;
