import { Router } from "express";
import UserController from "../controller/UserController";
import { celebrate, Joi, errors, Segments } from "celebrate";
import SessionController from "../controller/SessionController";

const sessionRouter = Router();
const sessionController = new SessionController();

sessionRouter.post(
    "/",
    sessionController.create,
    celebrate({
        [Segments.BODY]: Joi.object().keys({
            email: Joi.string().required(),
            password: Joi.string().required(),
        }),
    })
);


export default sessionRouter;
