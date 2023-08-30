import {useContext} from 'react';
import ChatContext from '../context/chatContext';

import {Message} from '../types';

export default function ChatDisplay() {
	const {message} = useContext(ChatContext) as Record<string, Message>;

	console.log(message);

	return <div>{message.content}</div>;
}
