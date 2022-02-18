import express from 'express';

import { registerUsers } from '../controllers/users.js'

const router = express.Router();

router.post('/register', registerUsers);


export default router;