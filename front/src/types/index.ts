export type Message = {
	content: string;
	author: string;
	timestamp: string;
};

export type Client = {
	sendMessage: (message: string) => void;
};
