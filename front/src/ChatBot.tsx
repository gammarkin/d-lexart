import ChatBar from './components/ChatBar';
import ChatDisplay from './components/ChatDisplay';

export default function ChatBot() {
	return (
		<div className="d-flex flex-column">
			<ChatDisplay />
			<ChatBar />
		</div>
	);
}
