import Accessory from "../models/accessories";

export default interface IRequestCar {
    model: string,
    color: string,
    year: number,
    valuePerDay: number,
    acessories: Accessory[],
    numberOfPassengers: number
}