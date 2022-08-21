import Player from '../infra/typeorm/entities/Player';

export default interface PlayersRepositoryInterface {
  findAll(): Promise<Player[]>;

  findByID(id: string): Promise<Player | undefined>;

  updateBalance(id: string, balance: number): Promise<Player | undefined>;

  updateBalanceAndCurrentPositionAll(
    balance: number,
    currentPosition: number,
  ): Promise<Player[]>;

  updateCurrentPosition(
    id: string,
    currentPosition: number,
  ): Promise<Player | undefined>;

  willBuyProperty(
    type: string,
    balance: number,
    sale_price: number,
    rental_price: number,
  ): Promise<boolean>;
}
