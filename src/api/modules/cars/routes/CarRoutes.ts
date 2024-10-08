import { Router } from "express";
import { celebrate, Joi, errors, Segments } from "celebrate";
import container from '../../../../config/dependencyInjection'
import CarController from "../controller/CarController";
import validateId from "../middlewares/validateId";
import CarService from "../service/CarService";

const carRoutes = Router();

const carController = container.resolve(CarController)

carRoutes.post(
    "/",
    celebrate({
        [Segments.BODY]: Joi.object().keys({
            model: Joi.string().required(),
            color: Joi.string().required(),
            year: Joi.number().required(),
            valuePerDay: Joi.number().required(),
            acessories: Joi.array().items(Joi.object({ name: Joi.string().required() })).required(),
            numberOfPassengers: Joi.number().required(),
        }),
    }),
   carController.createCar
);
carRoutes.get("/", carController.finAllCars)
carRoutes.put("/:id", validateId, carController.updateCar)
carRoutes.get("/:id", validateId, carController.findById)

export default carRoutes;
