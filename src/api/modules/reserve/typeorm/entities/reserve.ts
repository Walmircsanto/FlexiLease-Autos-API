import {
    Column,
    CreateDateColumn,
    Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';
import { Exclude } from 'class-transformer';
import Car from "../../../cars/typeorm/entities/Car";
import User from "../../../user/typeorm/entities/User";

@Entity('reservations')
export class Reservation {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    startDate: string;

    @Column()
    endDate: string;

    @Column()
    finalValue: string;

    @ManyToOne(() => User, (user) => user.reservations)
    @JoinColumn({ name: 'userId' })
    user: User;

    @ManyToOne(() => Car, (car) => car.reservations)
    @JoinColumn({ name: 'carId' })
    car?:Car;
}

export default Reservation
