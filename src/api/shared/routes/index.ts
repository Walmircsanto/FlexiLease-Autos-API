import { Router } from "express";
import userRoutes from "../../modules/user/routes/User.routes";
import sessionRoutes from "../../modules/user/routes/Session.routes";
import carRoutes from "../../modules/cars/routes/CarRoutes";

const routes = Router();

routes.use("/user", userRoutes);
routes.use("/session", sessionRoutes)
routes.use("/car", carRoutes)

export default routes