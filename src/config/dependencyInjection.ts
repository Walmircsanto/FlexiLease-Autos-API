import "reflect-metadata";
import { container } from "tsyringe";
import CarService from "../api/modules/cars/service/CarService";
import ICarService from "../api/modules/cars/typeorm/repositories/ICarService";

/*
Container criado para inverte a dependencia,logo ao inves da minha classe instancia o service, esse
container e que vai ser o responsavel por isso
 */
 container.register<CarService>("CarService", {
    useClass: CarService
});


export default container;