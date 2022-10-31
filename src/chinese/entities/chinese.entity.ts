import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('chinese', { schema: 'test' })
export class Chinese {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column()
  title: string;

  @Column()
  content: string;
}
