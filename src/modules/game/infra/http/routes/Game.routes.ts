import { Router } from 'express';

import GameController from '../controllers/GameController';

const gameRouter = Router();
const gameController = new GameController();

gameRouter.post('/jogo/simular', gameController.random);

export default gameRouter;
