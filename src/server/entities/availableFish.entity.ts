import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { FoundFish } from './foundFish.entity';

@Entity()
export class AvailableFish {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  maxPrice: number;

  @Column('decimal', { precision: 8, scale: 2 })
  weight: number;

  @OneToMany(
    () => FoundFish,
    foundFish => foundFish.fish,
  )
  found: FoundFish[];
}
