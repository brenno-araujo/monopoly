import { injectable, inject } from 'tsyringe';

import PlayersRepositoryInterface from '@modules/players/repositories/PlayersRepositoryInterface';
import Player from '@modules/players/infra/typeorm/entities/Player';

interface response {
  orderAleatoryPlayers: Player[];
  fixedPlayers: string[];
}

@injectable()
export default class PlayersService {
  constructor(
    @inject('PlayersRepository')
    private playersRepository: PlayersRepositoryInterface,
  ) {}

  public async execute(): Promise<response> {
    const players = await this.playersRepository.findAll();

    const fixedPlayers = [
      players[0].type,
      players[1].type,
      players[2].type,
      players[3].type,
    ];

    var orderAleatoryPlayers = players.sort(() => Math.random() - 0.5);
    orderAleatoryPlayers.unshift(orderAleatoryPlayers.pop());

    return { orderAleatoryPlayers, fixedPlayers };
  }
}
