import IModel from '../interfaces/IModel';
import messages from '../interfaces/Messages';
import {IService} from '../interfaces/IService';

class InventoryService implements IService<messages> {
	private _inventory: IModel<messages>;

	constructor(model: IModel<messages>) {
		this._inventory = model;
	}

	public async create(item: messages | messages[]): Promise<messages> {
		return this._inventory.create(item);
	}

	public async findAll(): Promise<messages[]> {
		return this._inventory.read();
	}

	public async updateOne(
		name: string,
		item: messages
	): Promise<messages | null> {
		return this._inventory.update({name}, item);
	}

	public async destroy(name: string): Promise<void> {
		await this._inventory.delete({name});
	}
}

export default InventoryService;
