import express from "express";
import { farmaciaRoutes } from "./farmacia.routes";
import { farmaciasRoutes } from "./farmacias.routes";
import { plantoesRoutes } from "./plantoes.routes";

const routes = express.Router();

routes.use("/farmacias", farmaciasRoutes);
routes.use("/farmacia", farmaciaRoutes);

routes.use("/plantoes", plantoesRoutes);

export { routes };
