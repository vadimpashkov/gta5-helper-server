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

  @Column({ default: 62 })
  openInventoryKey: number;

  @Column({ default: 61 })
  openTrunkKey: number;

  @Column({ default: false })
  lookingForBackpack: boolean;

  @Column({ default: false })
  lookingForBoat: boolean;

  @Column({ default: 1 })
  fishingRodKey: number;
}
