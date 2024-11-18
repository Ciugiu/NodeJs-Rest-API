import { Router } from 'express';
import { getAllUsers, postUser, putUser, deleteUser } from '../controllers/usersControllers.js';
import { checkApiKey } from '../middleware/checkApiKey.js';
const router = Router();

// GET METHOD
router.get('/users', checkApiKey, getAllUsers);

// POST METHOD
router.post('/users', checkApiKey, postUser);

// PUT METHOD
router.put('/users/:id', checkApiKey, putUser);

// DELETE METHOD
router.delete('/users/:id', checkApiKey, deleteUser);


export default router;