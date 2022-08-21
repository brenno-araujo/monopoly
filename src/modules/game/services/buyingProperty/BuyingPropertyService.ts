import { injectable, inject } from 'tsyringe';

import PlayersRepositoryInterface from '@modules/players/repositories/PlayersRepositoryInterface';
import PropertiesRepositoryInterface from '@modules/properties/repositories/PropertiesRepositoryInterface';
import Property from '@modules/properties/infra/typeorm/entities/Property';
import Player from '@modules/players/infra/typeorm/entities/Player';

interface response {
  newBalance: number;
}

@injectable()
export default class BuyingPropertyService {
  constructor(
    @inject('PlayersRepository')
    private playersRepository: PlayersRepositoryInterface,

    @inject('PropertiesRepository')
    private propertiesRepository: PropertiesRepositoryInterface,
  ) {}

  public async execute(
    propertyActualy: Property,
    player: Player,
    dataProperty: Property,
  ): Promise<response> {
    await this.propertiesRepository.updateOwner(propertyActualy.id, player.id);

    let newBalance = Number(player.balance) - Number(dataProperty.sale_price);

    await this.playersRepository.updateBalance(player.id, newBalance);

    return { newBalance };
  }
}
