import { injectable, inject } from 'tsyringe';

import PlayersRepositoryInterface from '@modules/players/repositories/PlayersRepositoryInterface';
import PropertiesRepositoryInterface from '@modules/properties/repositories/PropertiesRepositoryInterface';

@injectable()
export default class RestartGameService {
  constructor(
    @inject('PlayersRepository')
    private playersRepository: PlayersRepositoryInterface,

    @inject('PropertiesRepository')
    private propertiesRepository: PropertiesRepositoryInterface,
  ) {}

  public async execute(): Promise<void> {
    await this.playersRepository.updateBalanceAndCurrentPositionAll(300, -1);
    await this.propertiesRepository.removerOwnerAll();
  }
}
