import { getRepository, Repository } from 'typeorm';
import Property from '../entities/Property';
import PropertiesRepositoryInterface from '@modules/properties/repositories/PropertiesRepositoryInterface';

class PropertiesRepository implements PropertiesRepositoryInterface {
  private ormRepository: Repository<Property>;

  constructor() {
    this.ormRepository = getRepository(Property);
  }

  public async findAll(): Promise<Property[]> {
    const properties = await this.ormRepository.find();

    return properties;
  }

  public async findById(id: string): Promise<Property | undefined> {
    const property = await this.ormRepository.findOne(id);

    return property;
  }

  public async updateOwner(
    id: string,
    playerId: string,
  ): Promise<Property | undefined> {
    const property = await this.ormRepository.findOne(id);

    if (!property) {
      throw new Error('Property not found');
    }

    property.player_id = playerId;

    await this.ormRepository.save(property);

    return property;
  }

  public async removerOwner(playerId: string): Promise<Property[]> {
    const properties = await this.ormRepository.find({
      where: { player_id: playerId },
    });

    properties.forEach(property => {
      property.player_id = null;
    });

    await this.ormRepository.save(properties);

    return properties;
  }

  public async removerOwnerAll(): Promise<Property[]> {
    const properties = await this.ormRepository.find();

    properties.forEach(property => {
      property.player_id = null;
    });

    await this.ormRepository.save(properties);

    return properties;
  }
}

export default PropertiesRepository;
