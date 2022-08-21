import { injectable, inject } from 'tsyringe';

import PlayersRepositoryInterface from '@modules/players/repositories/PlayersRepositoryInterface';
import PropertiesRepositoryInterface from '@modules/properties/repositories/PropertiesRepositoryInterface';
import Player from '@modules/players/infra/typeorm/entities/Player';
import Property from '@modules/properties/infra/typeorm/entities/Property';

interface response {
  dataProperty: Property;
}

@injectable()
export default class GameService {
  constructor(
    @inject('PlayersRepository')
    private playersRepository: PlayersRepositoryInterface,

    @inject('PropertiesRepository')
    private propertiesRepository: PropertiesRepositoryInterface,
  ) {}

  public async execute(
    playGiveAway: number,
    player: Player,
    properties: Property[],
  ): Promise<response> {
    let boardPosition = playGiveAway + player.current_position;
    if (boardPosition > properties.length - 1) {
      boardPosition = boardPosition - properties.length;
    }
    console.log('Posição do Board: ', boardPosition);

    let propertyActualy = properties[boardPosition];
    let dataProperty = await this.propertiesRepository.findById(
      propertyActualy.id,
    );

    await this.playersRepository.updateCurrentPosition(
      player.id,
      boardPosition,
    );

    return { dataProperty };
  }
}
