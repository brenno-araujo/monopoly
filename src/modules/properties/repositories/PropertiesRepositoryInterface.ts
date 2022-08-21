import Property from '../infra/typeorm/entities/Property';

export default interface PropertiesRepositoryInterface {
  findAll(): Promise<Property[]>;
  findById(id: string): Promise<Property | undefined>;
  updateOwner(id: string, playerId: string): Promise<Property | undefined>;
  removerOwner(playerId: string): Promise<Property[]>;
  removerOwnerAll(): Promise<Property[]>;
}
