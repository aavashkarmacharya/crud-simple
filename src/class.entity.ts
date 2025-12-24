import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { user } from './user.entity';
@Entity()
export class program {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  subject: string;
  @OneToMany(() => user, (user) => user.programs)
  user = user;
}
