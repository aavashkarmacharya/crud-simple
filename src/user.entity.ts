import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { program } from './class.entity';

@Entity()
export class user {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'username' })
  name: string;
  @Column()
  roll: number;
  @ManyToOne(() => program, (program) => program.user)
  programs: program[];
}
