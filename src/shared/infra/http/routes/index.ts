import { Router } from 'express';
import gameRouter from '@modules/game/infra/http/routes/Game.routes';

const routes = Router();

routes.use('/', gameRouter);

export default routes;
