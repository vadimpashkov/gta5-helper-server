import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../entities';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findByLogin(login: string): Promise<User | undefined> {
    return this.usersRepository.findOne({
      where: {
        login,
      },
    });
  }

  findOne(id: number): Promise<User> {
    return this.usersRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }

  async getSettings(id: number) {
    const user = await this.findOne(id);

    return {
      openInventoryKey: user.openInventoryKey,
      openTrunkKey: user.openTrunkKey,
      lookingForBackpack: user.lookingForBackpack,
      lookingForBoat: user.lookingForBoat,
      fishingRodKey: user.fishingRodKey,
    };
  }

  async setSettings(id: number, settings: any) {
    await this.usersRepository.update(
      {
        id,
      },
      settings,
    );
  }
}
