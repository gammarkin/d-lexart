import {useContext, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

import ChatContext from '../context/chatContext';
import initiatonCommands from '../commands/initiatonCommands';

import {Message} from '../types';

export default function ChatDisplay() {
	const {message, messages, setMessage, setMessages} = useContext(
		ChatContext
	) as {
		message: Message;
		messages: Message[];
		setMessage: (message: Message) => void;
		setMessages: (messages: Message[]) => void;
	};

	const navigate = useNavigate();

	useEffect(() => {
		if (!message.content) return;

		const token = localStorage.getItem('d-token');
		if (!token) return navigate('/login');

		if (
			initiatonCommands.some(
				(command) =>
					message.content.toLowerCase().includes(command) &&
					message.author === 'user'
			)
		) {
			setMessage({
				content:
					'Hello, I am a bot! Do you want to know more about me? You can type "help" to see what I can do!',
				author: 'bot',
				timestamp: Date.now().toString(),
			});
		}

		setMessages([...messages, message]);
	}, [message]);

	console.log(messages);

	return messages.length > 0 ? (
		<div className="chat-display">
			{messages.map((message, index) => (
				<div
					key={index}
					className={`message ${message.author === 'user' ? 'user' : 'bot'}`}
				>
					{message.content}
				</div>
			))}
		</div>
	) : (
		<div className="chat-display">
			<div className="message bot">
				Hello, I'm a bot. Send me a message to start chatting!
			</div>
		</div>
	);
}
