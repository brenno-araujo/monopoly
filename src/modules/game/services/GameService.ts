import { injectable, inject, container } from 'tsyringe';

import PlayersRepositoryInterface from '@modules/players/repositories/PlayersRepositoryInterface';
import PropertiesRepositoryInterface from '@modules/properties/repositories/PropertiesRepositoryInterface';

import RestartGameService from './restartGame/RestartGameService';
import RemovingLoserService from './removingLoser/RemovingLoserService';
import PlayersService from './players/PlayersService';
import PlayGiveAwayService from './playGiveAway/PlayGiveAwayService';
import BoardPositionService from './boardPosition/BoardPositionService';
import Player from '@modules/players/infra/typeorm/entities/Player';
import RentOrBuyService from './rentOrBuy/RentOrBuyService';

@injectable()
export default class GameService {
  constructor(
    @inject('PlayersRepository')
    private playersRepository: PlayersRepositoryInterface,

    @inject('PropertiesRepository')
    private propertiesRepository: PropertiesRepositoryInterface,
  ) {}

  public async execute(): Promise<any> {
    await container.resolve(RestartGameService).execute();

    const playersService = await container.resolve(PlayersService).execute();
    let orderAleatoryPlayers = playersService.orderAleatoryPlayers;

    const properties = await this.propertiesRepository.findAll();

    let round = 1;
    let playerActual = 0;
    let winner: Player;
    let newBalance = 0;

    while (round <= 1000) {
      let playGiveAway = (
        await container.resolve(PlayGiveAwayService).execute()
      ).playGiveAway;

      console.log(
        `Rodada ${round} - Jogador ${orderAleatoryPlayers[playerActual].type} tirou ${playGiveAway}`,
      );

      const player = await this.playersRepository.findByID(
        orderAleatoryPlayers[playerActual].id,
      );

      let boardPositionService = await container
        .resolve(BoardPositionService)
        .execute(playGiveAway, player, properties);
      let dataProperty = boardPositionService.dataProperty;

      newBalance = player.balance;
      console.log('Dono da propriedade: ', dataProperty.player_id);

      const rentOrBuyService = await container
        .resolve(RentOrBuyService)
        .execute(dataProperty, player, newBalance, dataProperty);

      newBalance = rentOrBuyService.newBalance;

      if (newBalance < 0) {
        const removingLoserService = await container
          .resolve(RemovingLoserService)
          .execute(orderAleatoryPlayers, playerActual, player);
        orderAleatoryPlayers = removingLoserService.orderAleatoryPlayers;
        playerActual = removingLoserService.playerActual;
      }

      if (orderAleatoryPlayers.length == 1) {
        winner = orderAleatoryPlayers[0];
        break;
      }

      playerActual++;
      if (playerActual > orderAleatoryPlayers.length - 1) {
        playerActual = 0;
      }

      if (round == 1000) {
        winner = orderAleatoryPlayers[playerActual];
        break;
      }
      round++;
    }

    return {
      Vencedor: winner.type,
      Jogadores: playersService.fixedPlayers,
    };
  }
}
