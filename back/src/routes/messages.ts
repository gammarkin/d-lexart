import {Router} from 'express';
import MessageModel from '../models/Messages';
import MessageService from '../services/Messages';
import Message from '../controllers/Message';

const router = Router();

const messageModel = new MessageModel();
const messageService = new MessageService(messageModel);
const messageController = new Message(messageService);

router.get('/', (req, res) => messageController.findAll(req, res));
router.get('/:id', (req, res) => messageController.findOne(req, res));
router.post('/', (req, res) => messageController.create(req, res));
router.put('/:id', (req, res) => messageController.update(req, res));
router.delete('/:id', (req, res) => messageController.destroy(req, res));

export default router;
