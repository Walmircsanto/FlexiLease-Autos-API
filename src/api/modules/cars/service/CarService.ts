import {AppDataSource} from "@modules/typeorm/connection";
import Car from "../typeorm/entities/Car";

import {Repository} from "typeorm";
import IRequestCar from "../DTO/RequestCarDTO";
import {CarRepository} from "../typeorm/repositories/CarRepository";
import AppError from "@modules/errors/AppError";

interface IReqParam {
    id: number;
}


class CarService   {
    private ormRepository: Repository<Car>;


    constructor() {
        this.ormRepository = AppDataSource.getRepository(Car);
    }

    async findById(id: number): Promise<Car | null> {
        const carRepository =  CarRepository

        return await carRepository.finById(id);
    }

    async createCar({ model, color, year, valuePerDay, acessories = [], numberOfPassengers }: IRequestCar): Promise<Car> {
        const carRepository =  CarRepository

        if(year < 1950 || year > 2023 ){
            throw new AppError("The year of the car is not valid", "Bad Request", 400);
        }
        const car = carRepository.create({
            model,
            color,
            year,
            valuePerDay,
            acessories,
            numberOfPassengers
        });

        console.log(acessories)

        await this.ormRepository.save(car);
        return car;
    }

    public async finAllCars(){
        return await CarRepository.find();
    }

    public async updateCars({id}: IReqParam,{ model, color, year, valuePerDay, acessories = [], numberOfPassengers }: IRequestCar){
      const carRepository = CarRepository

        if (typeof id === "string"){
         throw new AppError("Id is not of type number", "Bad request", 400)
        }

       const car = await carRepository.finById(id);
        if(!car){
            throw new AppError("car not found", "not found", 404)
        }

        car.id = id
        car.model = model
        car.color = color
        car.year = year
        car.valuePerDay = valuePerDay
        car.acessories = acessories
        car.numberOfPassengers = numberOfPassengers

        await carRepository.save(car);

        return car;
    }



}

export default CarService;
