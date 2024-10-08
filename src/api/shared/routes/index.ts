import { Router } from "express";
import userRoutes from "../../modules/user/routes/User.routes";
import sessionRoutes from "../../modules/user/routes/Session.routes";
import carRoutes from "../../modules/cars/routes/CarRoutes";
import reserveRoutes from "../../modules/reserve/routes/reserveRoutes";

const routes = Router();

routes.use("/user", userRoutes);
routes.use("/session", sessionRoutes)
routes.use("/car", carRoutes)
routes.use("/reserve", reserveRoutes)

export default routes