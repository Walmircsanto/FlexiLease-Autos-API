import { Router } from "express";
import UserController from "../controller/UserController";
import { celebrate, Joi, errors, Segments } from "celebrate";
import isAuthenticated from "../middlewares/UserAuthenticated";

const userRoutes = Router();
const userController = new UserController();

userRoutes.post(
    "/",
    userController.createUser,
    celebrate({
        [Segments.BODY]: Joi.object().keys({
            name: Joi.string().required(),
            email: Joi.number().required(),
            password: Joi.number().required(),
        }),
    })
);
userRoutes.get("/", isAuthenticated, userController.testeStringToken);

export default userRoutes;
