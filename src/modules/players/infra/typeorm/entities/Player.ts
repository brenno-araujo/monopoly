import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('players')
export default class Player {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  type: string;

  @Column()
  balance: number;

  @Column()
  current_position: number;
}
