import express from 'express';
import { createToken,stkPush } from '../controllers/mpesaController.js';
const mpesaRouter = express.Router();

mpesaRouter.post('/pay', createToken, stkPush);

export default mpesaRouter;