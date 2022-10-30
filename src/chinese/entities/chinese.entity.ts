import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Chinese {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  content: string;
}
