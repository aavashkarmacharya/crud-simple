import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { user } from './user.entity';
import { configDotenv } from 'dotenv';
import { program } from './class.entity';

configDotenv();
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [user, program],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([user, program]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
