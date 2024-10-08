import { Router } from "express";
import { celebrate, Joi, errors, Segments } from "celebrate";
import { container } from "tsyringe";
import CarController from "../controller/CarController";

const carRoutes = Router();

const carController = new CarController()

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
   carController.createrCar
);

carRoutes.get("/", carController.finAllCars)
carRoutes.put("/:id", carController.updateCar)

export default carRoutes;
