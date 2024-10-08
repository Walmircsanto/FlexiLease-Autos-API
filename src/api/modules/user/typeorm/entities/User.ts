import {
    Column,
    CreateDateColumn,
    Entity, JoinTable, ManyToMany,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';
import { Exclude } from 'class-transformer';
import {Reservation} from "../../../reserve/typeorm/entities/reserve";

@Entity()
class User{

    @PrimaryGeneratedColumn('increment')
    id:number;

    @Column()
    name:string;

    @Column()
    cpf:string;

    @Column()
    birth:Date;


    @Column()
    cep:string;

    @Column()
    email:string;

    @Column()
    password:string;

    @OneToMany(() => Reservation, (reservation) => reservation.user)
    reservations: Reservation[];

    @CreateDateColumn()
    @Exclude()
    created_at: Date;

    @UpdateDateColumn()
    @Exclude()
    updated_at: Date;
}

export default User