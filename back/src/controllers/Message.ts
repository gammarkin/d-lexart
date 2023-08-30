import {Request, Response} from 'express';

import IUser from '../interfaces/Messages';
import {IService} from '../interfaces/IService';

import messages from '../interfaces/Messages';

const OBJECT_NOT_FOUND = 'message was not found';

export default class Message {
	constructor(private _service: IService<messages>) {}

	public async create(req: Request, res: Response<messages>) {
		const results = await this._service.create(req.body);

		return res.status(201).json(results);
	}

	public async findOne(
		req: Request,
		res: Response<messages | Record<string, string>>
	) {
		const {id} = req.params;

		if (!this._service.findOne)
			return res.status(500).json({error: 'Method not implemented'});

		const results = await this._service.findOne(id);

		if (!results) {
			return res.status(404).json({message: 'None messages was found'});
		}

		return res.status(200).json(results);
	}

	public async findAll(_req: Request, res: Response<IUser[]>) {
		const results = await this._service.findAll();

		return res.status(200).json(results);
	}

	public async update(
		req: Request,
		res: Response<IUser | Record<string, string>>
	) {
		const results = await this._service.updateOne(req.params.id, req.body);

		if (!results) {
			return res.status(404).json({message: OBJECT_NOT_FOUND});
		}

		return res.status(200).json(results);
	}

	public async destroy(req: Request, res: Response<IUser>) {
		const {id} = req.params;

		await this._service.destroy(id);

		return res.status(204).end();
	}
}
