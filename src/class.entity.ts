import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { user } from './user.entity';
@Entity()
export class program {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: number;
  @Column()
  subject: string;

  studentid: number;
  @OneToMany(() => user, (user) => user.program)
  users: user[];
}
