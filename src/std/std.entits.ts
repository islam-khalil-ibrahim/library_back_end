import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity("students")
export class Std {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({type: 'varchar', length: 100})
  name!: string;
  
  @Column({type: 'varchar', length: 100})
  email!: string;

  @Column({type: 'int'})
  phone!: number;

  @Column({type: 'int'})
  age!: number;

  @Column({type:"varchar" ,length: 100 })
  password! :string;

}