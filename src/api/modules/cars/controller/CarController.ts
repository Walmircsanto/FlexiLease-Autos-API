import {Request, Response} from 'express';
import CarService from "../service/CarService";
import car from "../typeorm/entities/Car";
import ICarService from "../typeorm/repositories/ICarService";
import {inject, injectable} from "tsyringe";


export default class CarController {


    public async createCar(req: Request, res: Response): Promise<Response> {

        const carService = new CarService();
        const {model, color, year, valuePerDay, acessories, numberOfPassengers} = req.body;
        console.log(model, color, year)
        await carService.createCar({
            model,
            color,
            year,
            valuePerDay,
            acessories,
            numberOfPassengers
        });
        return res.status(201).json(car);

    }

    public async finAllCars(req: Request, res: Response) {
        const carService = new CarService();
        return res.json(await carService.finAllCars()).status(200);

    }

    public async updateCar(req: Request, res: Response) {
        const id = parseInt(req.params.id);
        const {model, color, year, valuePerDay, acessories, numberOfPassengers} = req.body

        const carService = new CarService()

        const car = await carService.updateCars({id},
            {
                model, color, year, valuePerDay, acessories, numberOfPassengers
            })

        return res.json(car).status(204)
    }

    public async findById(req: Request, res: Response) {
        const id = parseInt(req.params.id);

        const carService = new CarService()

        const car = await carService.findById(id);

        return res.json(car).status(200)
    }


    public async deleteCar(req:Request, res:Response){
        const carService = new CarService();
        const id = parseInt(req.params.id);

       await carService.delete({id});
        return res.status(204).send('Movie deleted');
    }

}