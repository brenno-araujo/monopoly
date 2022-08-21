import { getRepository, Repository } from 'typeorm';

import Player from '../entities/Player';
import PlayersRepositoryInterface from '../../../repositories/PlayersRepositoryInterface';

class PlayersRepository implements PlayersRepositoryInterface {
  private ormRepository: Repository<Player>;

  constructor() {
    this.ormRepository = getRepository(Player);
  }

  public async findAll(): Promise<Player[]> {
    const players = await this.ormRepository.find();

    return players;
  }

  public async findByID(id: string): Promise<Player | undefined> {
    const player = await this.ormRepository.findOne(id);

    return player;
  }

  public async updateBalance(
    id: string,
    balance: number,
  ): Promise<Player | undefined> {
    const player = await this.ormRepository.findOne(id);

    if (!player) {
      throw new Error('Player not found');
    }

    player.balance = balance;

    await this.ormRepository.save(player);

    return player;
  }

  public async updateBalanceAndCurrentPositionAll(
    balance: number,
    currentPosition: number,
  ): Promise<Player[]> {
    const players = await this.ormRepository.find();

    players.forEach(player => {
      player.balance = balance;
      player.current_position = currentPosition;
    });

    await this.ormRepository.save(players);

    return players;
  }

  public async updateCurrentPosition(
    id: string,
    currentPosition: number,
  ): Promise<Player | undefined> {
    const player = await this.ormRepository.findOne(id);

    if (!player) {
      throw new Error('Player not found');
    }

    player.current_position = currentPosition;

    await this.ormRepository.save(player);

    return player;
  }

  public async willBuyProperty(
    type: string,
    balance: number,
    sale_price: number,
    rental_price: number,
  ): Promise<boolean | undefined> {
    if (type === 'impulsivo') {
      return true;
    } else if (type === 'exigente') {
      if (rental_price > 50) {
        return true;
      }
    } else if (type === 'cauteloso') {
      const newBalance = Number(balance) - Number(sale_price);
      if (newBalance >= 80) {
        return true;
      }
    } else if (type === 'aleatorio') {
      if (Math.random() > 0.5) {
        return true;
      }
    }
    return false;
  }
}

export default PlayersRepository;
