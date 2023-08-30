import IUser from '../interfaces/IUser';
import MongoModel from './MongoModel';
import {model as mongooseCreateModel, Schema} from 'mongoose';

const userMongooseSchema = new Schema<IUser>(
	{
		id: {
			type: String,
			required: true,
		},
		password: {
			type: String,
			required: true,
		},
		name: {
			type: String,
			required: false,
		},
	},
	{versionKey: false}
);

class User extends MongoModel<IUser> {
	constructor(model = mongooseCreateModel('User', userMongooseSchema)) {
		super(model);
	}
}

export default User;
