import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { AppService } from './app.service';
import { user } from './user.entity';
import { get } from 'http';
import { program } from './class.entity';
//import { get } from 'http';
//import { identity } from 'rxjs';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Post('/createclass')
  async getclass(@Body() dto: program) {
    return await this.appService.getclass(dto);
  }
  @Post('/saveuser')
  async postapi(@Body() dto: user) {
    return await this.appService.saveuser(dto);
  }
  @Get('/getUsers')
  async getALL() {
    return await this.appService.getUser();
  }
  @Get('/getSpec/:roll')
  async getSpecific(@Param('roll') roll: number) {
    return await this.appService.getSpec(roll);
  }
  @Delete('/deleteRep/:id')
  async deleteByRoll(@Param('id') id: number) {
    return await this.appService.deleteRep(id);
  }
  @Patch('/updateuser/:id')
  async updateuser(@Param('id') id: number, @Body() dto: user) {
    return await this.appService.updateuser(id, dto);
  }
}
