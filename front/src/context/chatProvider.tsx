import ChatContext from './chatContext';
import {useState, ReactNode} from 'react';

const ChatProvider = ({children}: {children: ReactNode}) => {
	const [message, setMessage] = useState({content: '', sender: ''});

	const value = {message, setMessage};

	return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
};

export default ChatProvider;
