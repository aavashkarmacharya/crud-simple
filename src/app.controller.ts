import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { user } from './user.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
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
}
