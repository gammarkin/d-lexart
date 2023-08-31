import MongoModel from './MongoModel';
import messages from '../interfaces/Messages';
import {model as mongooseCreateModel, Schema} from 'mongoose';

const userMongooseSchema = new Schema<messages>(
	{
		messages: {
			type: [{user: String, content: String, timestamp: Date}],
			required: true,
		},
	},
	{versionKey: false}
);

class User extends MongoModel<messages> {
	constructor(model = mongooseCreateModel('messages', userMongooseSchema)) {
		super(model);
	}
}

export default User;
