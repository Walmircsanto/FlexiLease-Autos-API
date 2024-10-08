import { Router } from "express";
import { celebrate, Joi, errors, Segments } from "celebrate";

import isAuthenticated from "../../user/middlewares/UserAuthenticated";
import ReserveController from "../controller/ReserveController";

const reserveRoutes = Router();

const reserveController = new ReserveController();


reserveRoutes.post("/", isAuthenticated, reserveController.createReserve)

export default reserveRoutes;