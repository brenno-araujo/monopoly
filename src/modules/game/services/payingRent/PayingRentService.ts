import { injectable, inject } from 'tsyringe';

import PlayersRepositoryInterface from '@modules/players/repositories/PlayersRepositoryInterface';
import Property from '@modules/properties/infra/typeorm/entities/Property';
import Player from '@modules/players/infra/typeorm/entities/Player';

interface response {
  newBalance: number;
  ownerPlayer: Player;
}

@injectable()
export default class PayingRentService {
  constructor(
    @inject('PlayersRepository')
    private playersRepository: PlayersRepositoryInterface,
  ) {}

  public async execute(
    dataProperty: Property,
    player: Player,
  ): Promise<response> {
    console.log('Pagando aluguel');

    let newBalance = Number(player.balance) - Number(dataProperty.rental_price);
    await this.playersRepository.updateBalance(player.id, newBalance);

    let ownerPlayer = await this.playersRepository.findByID(
      dataProperty.player_id,
    );

    await this.playersRepository.updateBalance(
      dataProperty.player_id,
      Number(ownerPlayer.balance) + Number(dataProperty.rental_price),
    );

    return {
      newBalance,
      ownerPlayer,
    };
  }
}
