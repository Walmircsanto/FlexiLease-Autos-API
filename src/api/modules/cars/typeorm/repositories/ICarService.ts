import IRequestCar from "../../DTO/RequestCarDTO";
import car from "../entities/Car";
interface IReqParam {
    id: number;
}

export default interface ICarService {
    findById(id: number):Promise<car| null>
    createCar({model, color, year, valuePerDay, acessories, numberOfPassengers}: IRequestCar): Promise<car>
    finAllCars():Promise<car[]>
    updateCars(id:IReqParam, car:IRequestCar):Promise<car>
}