import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { FoundFish } from './foundFish.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  login: string;

  @Column()
  password: string;

  @OneToMany(
    () => FoundFish,
    foundFish => foundFish.user,
  )
  foundFish: FoundFish[];
}
