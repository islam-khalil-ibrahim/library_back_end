import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("books")
export class books {

    @PrimaryGeneratedColumn()
    id!:number;

    @Column({type:'varchar' , length:100})
    title!:string;

    @Column({type:"int"})
    price!: number;
    
    @Column({type:'varchar' , length:100})
    author! :string;
}