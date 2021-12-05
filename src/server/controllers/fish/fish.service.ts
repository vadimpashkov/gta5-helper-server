import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserWithoutPass } from '../../../common/UserWithoutPass';
import { AvailableFish, FoundFish, User } from '../../entities';

@Injectable()
export class FishService {
  constructor(
    @InjectRepository(FoundFish)
    private foundFishRepository: Repository<FoundFish>,

    @InjectRepository(AvailableFish)
    private availableFishRepository: Repository<AvailableFish>,

    @InjectRepository(AvailableFish)
    private userRepository: Repository<User>,
  ) {}

  async addFish(userId: number, fishName: string) {
    const fish = await this.availableFishRepository.findOne({
      where: {
        name: fishName,
      },
    });

    if (fish === null) return;

    const user = await this.userRepository.findOne({
      where: {
        id: userId,
      },
    });

    await this.foundFishRepository.insert({
      catchDate: new Date(),
      user,
      fish,
    });
  }

  async getFish(userId: number) {
    const found = await this.foundFishRepository.find({
      where: {
        user: {
          id: userId,
        },
      },
      relations: ['fish'],
    });

    return found;
  }
}
