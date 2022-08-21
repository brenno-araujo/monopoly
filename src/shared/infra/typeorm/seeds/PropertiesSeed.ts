import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';

export default class PropertiesSeed implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<void> {
    await connection
      .createQueryBuilder()
      .insert()
      .into('properties')
      .values([
        {
          id: '1',
          name: 'Blue Hotel',
          sale_price: 200.0,
          rental_price: 80.0,
          player_id: null,
        },

        {
          id: '2',
          name: 'Red Hotel',
          sale_price: 150.0,
          rental_price: 45.0,
          player_id: null,
        },

        {
          id: '3',
          name: 'Green Hotel',
          sale_price: 185.0,
          rental_price: 60.0,
          player_id: null,
        },

        {
          id: '4',
          name: 'Yellow Hotel',
          sale_price: 130.0,
          rental_price: 40.0,
          player_id: null,
        },
        {
          id: '5',
          name: 'Purple Hotel',
          sale_price: 190.0,
          rental_price: 70.0,
          player_id: null,
        },
        {
          id: '6',
          name: 'Eagle Supermarket',
          sale_price: 80.0,
          rental_price: 20.0,
          player_id: null,
        },
        {
          id: '7',
          name: 'Pig Supermarket',
          sale_price: 130.0,
          rental_price: 70.0,
          player_id: null,
        },
        {
          id: '8',
          name: 'Cow Supermarket',
          sale_price: 195.0,
          rental_price: 60.0,
          player_id: null,
        },
        {
          id: '9',
          name: 'Horse Supermarket',
          sale_price: 100.0,
          rental_price: 50.0,
          player_id: null,
        },
        {
          id: '10',
          name: 'Elephant Supermarket',
          sale_price: 90.0,
          rental_price: 30.0,
          player_id: null,
        },
        {
          id: '11',
          name: 'Dollar Bank',
          sale_price: 230.0,
          rental_price: 90.0,
          player_id: null,
        },
        {
          id: '12',
          name: 'Euro Bank',
          sale_price: 400.0,
          rental_price: 100.0,
          player_id: null,
        },
        {
          id: '13',
          name: 'Pound Bank',
          sale_price: 300.0,
          rental_price: 85.0,
          player_id: null,
        },
        {
          id: '14',
          name: 'Yen Bank',
          sale_price: 500.0,
          rental_price: 150.0,
          player_id: null,
        },
        {
          id: '15',
          name: 'Real Bank',
          sale_price: 450.0,
          rental_price: 110.0,
          player_id: null,
        },
        {
          id: '16',
          name: 'Ruby Mall',
          sale_price: 900.0,
          rental_price: 200.0,
          player_id: null,
        },
        {
          id: '17',
          name: 'Sapphire Mall',
          sale_price: 700.0,
          rental_price: 150.0,
          player_id: null,
        },
        {
          id: '18',
          name: 'Emerald Mall',
          sale_price: 800.0,
          rental_price: 180.0,
          player_id: null,
        },
        {
          id: '19',
          name: 'Diamond Mall',
          sale_price: 1000.0,
          rental_price: 300.0,
          player_id: null,
        },
        {
          id: '20',
          name: 'Platinum Mall',
          sale_price: 600.0,
          rental_price: 140.0,
          player_id: null,
        },
      ])
      .execute();
  }
}
