import express from "express";
import { farmaciaRoutes } from "./farmacia.routes";
import { farmaciasRoutes } from "./farmacias.routes";

const routes = express.Router();

routes.use("/farmacias", farmaciasRoutes);
routes.use("/farmacia", farmaciaRoutes);

export { routes };
