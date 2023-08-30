import {Router} from 'express';

import CharacterController from '../controllers/User';
import CharacterService from '../services/User';
import CharacterModel from '../models/User';

const router = Router();

const charModel = new CharacterModel();
const charService = new CharacterService(charModel);
const charController = new CharacterController(charService);

router.get('/', (req, res) => charController.findAll(req, res));

router.get('/:id', (req, res) => charController.findOne(req, res));

router.post('/', (req, res) => charController.create(req, res));

router.put('/:id', (req, res) => charController.update(req, res));

router.delete('/:id', (req, res) => charController.destroy(req, res));

export default router;
