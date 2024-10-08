import 'reflect-metadata';
import {AppDataSource} from "@modules/typeorm/connection";
import Car from "../../cars/typeorm/entities/Car";
import {Repository} from "typeorm";
import {CarRepository} from "../../cars/typeorm/repositories/CarRepository";
import AppError from "@modules/errors/AppError";
import {injectable, registry} from "tsyringe";
import {ReserveRepository} from "../typeorm/repositories/ReserveRepository";
import Reservation from "../typeorm/entities/reserve";
import RequestReserveDTO from "../dto/RequestReserveDTO";
import UserRepository from "../../user/typeorm/repositories/UserRepository";
import Reserve from "../typeorm/entities/reserve";

interface IUser{
    userId:number
}

export default  class ReserveService {
    private ormRepository: Repository<Reservation>;


    constructor() {
        this.ormRepository = AppDataSource.getRepository(Reservation);
    }

    public async createReserve({userId}: IUser,{startDate, endDate,carId }: RequestReserveDTO) {
        const car = await CarRepository.findOne({where: {id: carId}});
        const user = await UserRepository.findOne({where: {id:userId }});

        if(!car){
            throw new AppError("Car not found", "Bad Request", 400)

        }
        if(!user){
            throw new AppError("user not found", "Bad Request", 400)

        }
        const reserveRespository = ReserveRepository

        console.log(car)
        const reserve =  new Reserve();
        reserve.endDate = endDate
        reserve.startDate = startDate
        reserve.user = user
        reserve.car = car
        reserve.finalValue = await  this.calculatePrice({startDate, endDate, carId})

        await reserveRespository.save(reserve);
        return reserve;
    }


    private async calculatePrice({startDate, endDate, carId}: RequestReserveDTO) {

        const dayInit =parseInt(startDate.split("/")[0])
        const dayEnd = parseInt(endDate.split("/")[0] )
        //ca
        const quantDays = dayInit - dayEnd;

        const car = await CarRepository.findOne({where: {id: carId}});

        // @ts-ignore
        const finalValue = car?.valuePerDay * quantDays;

        return finalValue.toString();

    }

}
