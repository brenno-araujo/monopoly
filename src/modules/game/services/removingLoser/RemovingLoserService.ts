import { injectable, inject } from 'tsyringe';

import PropertiesRepositoryInterface from '@modules/properties/repositories/PropertiesRepositoryInterface';
import Player from '@modules/players/infra/typeorm/entities/Player';

interface response {
  playerActual: number;
  orderAleatoryPlayer: Player[];
}

@injectable()
export default class RemovingLoserService {
  constructor(
    @inject('PropertiesRepository')
    private propertiesRepository: PropertiesRepositoryInterface,
  ) {}

  public async execute(
    orderAleatoryPlayers: Player[],
    playerActual: number,
    player: Player,
  ): Promise<any> {
    console.log(`Jogador ${orderAleatoryPlayers[playerActual].type} perdeu`);

    orderAleatoryPlayers.splice(playerActual, 1);
    playerActual--;

    await this.propertiesRepository.removerOwner(player.id);

    return {
      playerActual,
      orderAleatoryPlayers,
    };
  }
}
