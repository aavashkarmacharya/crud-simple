import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { AppService } from './app.service';
import { user } from './user.entity';
//import { get } from 'http';
import { program } from './class.entity';
import { get } from 'http';
import { domainToASCII } from 'url';
//import { get } from 'http';
//import { identity } from 'rxjs';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  /*@Post('/createclass/:id')
  async getclass(@Body() dto: program) {
    return await this.appService.getclass(dto);
  }
    */

  @Get('/getclass')
  async getallclass() {
    return await this.appService.getgrade();
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
  @Post('/insertuser')
  async setstudent(@Body() dto: program) {
    return await this.appService.savestudent(dto);
  }
  @Get('/getstdsofclass/:id')
  async getusers(@Param('id') id: number) {
    return this.appService.getuserofclass(id);
  }
  @Post('/createstdwclass/:id')
  async createstd(@Param('id', ParseIntPipe) id: number, @Body() dto: user) {
    return await this.appService.setstudent(id, dto);
  }
}
