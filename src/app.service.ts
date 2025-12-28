import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { user } from './user.entity';

import { error } from 'console';
import { program } from './class.entity';
import { create } from 'domain';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(user)
    private readonly UserRepo: Repository<user>,
    @InjectRepository(program)
    private readonly ProgramRepo: Repository<program>,
  ) {}
  async getclass(dto: program) {
    return await this.ProgramRepo.save(dto);
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
  async getgrade() {
    return await this.ProgramRepo.find({
      relations: ['users'],
    });
  }

  async setstudent(classid: number, dto: user) {
    const selectclass = await this.ProgramRepo.findOne({
      where: { id: classid },
    });
    if (!selectclass) {
      throw new NotFoundException('class doesnt exist/not found');
    }
    const createstudent = this.UserRepo.create({
      name: dto.name,
      roll: dto.roll,
      program: selectclass,
    });
    return await this.UserRepo.save(createstudent);
  }

  async savestudent(dto: program) {
    const student = await this.UserRepo.findOne({
      where: { id: dto.studentid },
    });

    if (!student) {
      throw new NotFoundException('user not found');
    }

    const pro = new program();

    pro.users = [student];

    const savestd = this.ProgramRepo.create({
      name: dto.name,
      subject: dto.subject,
      users: pro.users || undefined,
    });
    return await this.ProgramRepo.save(savestd);
  }
  async getuserofclass(id: number) {
    const getuser = this.ProgramRepo.find({
      where: { id: id },
      relations: ['users'],
    });
    return await getuser;
  }
}
