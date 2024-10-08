import {Request, Response} from 'express';
import CarService from "../service/CarService";
export default class CarController {


    public async createrCar(req: Request, res: Response): Promise<Response> {
        const { model, color, year, valuePerDay, acessories, numberOfPassengers } = req.body;

        console.log(acessories)
        const carService = new CarService()
        const car = await carService.createCar({
            model,
            color,
            year,
            valuePerDay,
            acessories,
            numberOfPassengers,
        });

        return res.status(201).json(car);
    }

    public async finAllCars(req:Request, res: Response) {
        const carService = new CarService()

        return res.json(await carService.finAllCars()).status(200);
    }
}