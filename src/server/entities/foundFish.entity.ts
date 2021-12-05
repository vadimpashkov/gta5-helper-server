import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from './user.entity';
import { AvailableFish } from './availableFish.entity';

@Entity()
export class FoundFish {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  catchDate: Date;

  @ManyToOne(
    () => AvailableFish,
    fish => fish.found,
  )
  fish: AvailableFish;

  @ManyToOne(
    () => User,
    user => user.foundFish,
  )
  user: User;
}
