import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { user } from './user.entity';
import { program } from './class.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(user)
    private readonly UserRepo: Repository<user>,
  ) {}
  async getclass(dto: program) {
    return await this.UserRepo.save(dto);
  }
  async saveuser(dto: user) {
    return await this.UserRepo.save(dto);
  }

  async getUser() {
    return await this.UserRepo.find();
  }
  async getSpec(roll: number) {
    return await this.UserRepo.find({
      where: { roll },
    });
  }
  async deleteRep(userid: number) {
    return await this.UserRepo.delete({ id: userid });
  }
  async updateuser(id: number, dto: user) {
    const updateduser = this.UserRepo.update(id, dto);
    return await updateduser;
  }
}
