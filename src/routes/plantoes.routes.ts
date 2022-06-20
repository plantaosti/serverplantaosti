import { Router } from "express";
import { CreatePlantaoController } from "../modules/plantoes/useCases/createPlantao/CreatePlantaoController";
import { ListarAllPlantoesController } from "../modules/plantoes/useCases/listarAllPlantoes/ListarAllPlantoesController";
import { ListarIdPlantaoController } from "../modules/plantoes/useCases/listarIdPlantao/ListarIdPlantaoController";

const plantoesRoutes = Router();

const createPlantaoController = new CreatePlantaoController();
const listarAllPlantoesController = new ListarAllPlantoesController();
const listarIdPlantaoController = new ListarIdPlantaoController();

plantoesRoutes.post("/", createPlantaoController.handle);
plantoesRoutes.get("/", listarAllPlantoesController.handle);
plantoesRoutes.get("/:id", listarIdPlantaoController.handle);

export { plantoesRoutes };
