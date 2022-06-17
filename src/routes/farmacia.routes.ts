import { Router } from "express";
import { DeleteFarmaciaController } from "../modules/farmacias/useCases/deleteFarmacia/DeleteFarmaciaController";
import { ListarIdFarmaciaController } from "../modules/farmacias/useCases/listarIdFarmacia/ListarIdFarmaciaController";

const farmaciaRoutes = Router();

const listarIdFarmaciaController = new ListarIdFarmaciaController();
const deleteFarmaciaController = new DeleteFarmaciaController();

farmaciaRoutes.get("/:id", listarIdFarmaciaController.handle);
farmaciaRoutes.delete("/:id", deleteFarmaciaController.handle);

export { farmaciaRoutes };
