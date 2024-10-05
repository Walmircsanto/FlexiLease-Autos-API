import { Router } from "express";
import userRoutes from "../../modules/user/routes/User.routes";
import sessionRoutes from "../../modules/user/routes/Session.routes";

const routes = Router();

routes.use("/user", userRoutes);
routes.use("/session", sessionRoutes)

export default routes