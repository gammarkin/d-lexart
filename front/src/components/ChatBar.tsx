import {useContext, useState} from 'react';
import ChatContext from '../context/chatContext';

import {TextInput} from '@mantine/core';

import {Message} from '../types';

export default function ChatBar() {
	const [currentMessage, setCurrentMessage] = useState('');

	const {setMessage} = useContext(ChatContext) as Record<
		string,
		(message: Message) => void
	>;

	const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === 'Enter') {
			setMessage({
				content: currentMessage,
				author: 'user',
				timestamp: new Date().toISOString(),
			});

			return setCurrentMessage('');
		}
	};

	return (
		<TextInput
			onChange={({target: {value}}) => setCurrentMessage(value)}
			value={currentMessage}
			size="md"
			placeholder="Type your message here"
			w={'100%'}
			onKeyDown={handleKeyDown}
		/>
	);
}
