import ChatProvider from '../context/ChatProvider';
import ChatBot from '../ChatBot';

import {MantineProvider} from '@mantine/core';

function App() {
	return (
		<ChatProvider>
			<MantineProvider
				theme={{fontFamily: 'Open Sans'}}
				withGlobalStyles
				withNormalizeCSS
			>
				<ChatBot />
			</MantineProvider>
		</ChatProvider>
	);
}

export default App;
