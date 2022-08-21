import { injectable, inject, container } from 'tsyringe';

import PlayersRepositoryInterface from '@modules/players/repositories/PlayersRepositoryInterface';

import PayingRentService from '../payingRent/PayingRentService';
import BuyingPropertyService from '../buyingProperty/BuyingPropertyService';
import Property from '@modules/properties/infra/typeorm/entities/Property';
import Player from '@modules/players/infra/typeorm/entities/Player';

interface response {
  newBalance: number;
}

@injectable()
export default class RentOrBuyService {
  constructor(
    @inject('PlayersRepository')
    private playersRepository: PlayersRepositoryInterface,
  ) {}

  public async execute(
    dataProperty: Property,
    player: Player,
    newBalance: number,
    propertyActualy: Property,
  ): Promise<response> {
    if (dataProperty.player_id) {
      const payingRentService = await container
        .resolve(PayingRentService)
        .execute(dataProperty, player);
      newBalance = payingRentService.newBalance;
    } else {
      const willBuyProperty = await this.playersRepository.willBuyProperty(
        player.type,
        player.balance,
        dataProperty.sale_price,
        dataProperty.rental_price,
      );

      if (willBuyProperty === true) {
        const buyingPropertyService = await container
          .resolve(BuyingPropertyService)
          .execute(propertyActualy, player, dataProperty);
        newBalance = buyingPropertyService.newBalance;
      }
    }

    return { newBalance };
  }
}
