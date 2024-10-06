import {
    Column,
    CreateDateColumn,
    Entity, JoinTable, ManyToMany,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';
import { Exclude } from 'class-transformer';
import Accessory, { acessories} from "../../models/accessories";

@Entity()
class Car{

    @PrimaryGeneratedColumn('increment')
    id:number;

    @Column()
    model:string;

    @Column()
    color:string

    @Column()
    year:number;

    @Column()
    valuePerDay: number

    @Column({
        type:'enum',
        enum: acessories,
        default: acessories.FourPorts
    })
    acessories: Accessory[]

    @Column()
    numberOfPassengers:number;

    @CreateDateColumn()
    @Exclude()
    created_at: Date;

    @UpdateDateColumn()
    @Exclude()
    updated_at: Date;

}