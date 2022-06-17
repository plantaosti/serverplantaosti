import { Router } from "express";
import { DeleteFarmaciaController } from "../modules/farmacias/useCases/deleteFarmacia/DeleteFarmaciaController";
import { ListarIdFarmaciaController } from "../modules/farmacias/useCases/listarIdFarmacia/ListarIdFarmaciaController";
import { UpdateFarmaciaController } from "../modules/farmacias/useCases/updateFarmacia/UpdateFarmaciaController";

const farmaciaRoutes = Router();

const listarIdFarmaciaController = new ListarIdFarmaciaController();
const deleteFarmaciaController = new DeleteFarmaciaController();
const updateFarmaciaController = new UpdateFarmaciaController();

farmaciaRoutes.get("/:id", listarIdFarmaciaController.handle);
farmaciaRoutes.delete("/:id", deleteFarmaciaController.handle);
farmaciaRoutes.put("/:id", updateFarmaciaController.handle);

export { farmaciaRoutes };
