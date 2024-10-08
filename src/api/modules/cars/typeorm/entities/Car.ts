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
import {Reservation} from "../../../reserve/typeorm/entities/reserve";

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

    @Column({type:'varchar'})
    acessories: Accessory[]

    @Column()
    numberOfPassengers:number;

    @OneToMany(() => Reservation, (reservation) => reservation.user)
    reservations: Reservation[];

    @CreateDateColumn()
    @Exclude()
    created_at: Date;

    @UpdateDateColumn()
    @Exclude()
    updated_at: Date;

}

export default Car;