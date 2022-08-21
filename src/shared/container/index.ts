import { container } from 'tsyringe';

import PlayersRepository from '../../modules/players/infra/typeorm/repositories/PlayersRepository';
import PlayersRepositoryInterface from '../../modules/players/repositories/PlayersRepositoryInterface';

import PropertyRepository from '../../modules/properties/infra/typeorm/repositories/PropertiesRepository';
import PropertyRepositoryInterface from '../../modules/properties/repositories/PropertiesRepositoryInterface';

container.registerSingleton<PlayersRepositoryInterface>(
  'PlayersRepository',
  PlayersRepository,
);

container.registerSingleton<PropertyRepositoryInterface>(
  'PropertiesRepository',
  PropertyRepository,
);
