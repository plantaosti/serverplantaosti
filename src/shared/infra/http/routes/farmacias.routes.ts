import { CreateFarmaciaController } from "@modules/farmacias/useCases/createFarmacia/CreateFarmaciaController";
import { ListarAllFarmaciasController } from "@modules/farmacias/useCases/listarAllFarmacia/ListarAllFarmaciasController";
import { Router } from "express";

const farmaciasRoutes = Router();

const createFarmaciaController = new CreateFarmaciaController();
const listarAllFarmaciasController = new ListarAllFarmaciasController();

farmaciasRoutes.get("/", listarAllFarmaciasController.handle);
farmaciasRoutes.post("/", createFarmaciaController.handle);

export { farmaciasRoutes };
