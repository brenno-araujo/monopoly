import { Request, Response } from 'express';
import { container } from 'tsyringe';

import GameService from '../../../services/GameService';

export default class GameController {
  public async random(request: Request, response: Response): Promise<Response> {
    const service = container.resolve(GameService);
    const winner = await service.execute();
    return response.json(winner);
  }
}
