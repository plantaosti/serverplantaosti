import { container } from "tsyringe";

import { FarmaciasRepository } from "@modules/farmacias/infra/prisma/repositories/farmaciasRepository";
import { IFarmaciasRepository } from "@modules/farmacias/repositories/IFarmaciaRespository";

import { PlantoesRepository } from "@modules/plantoes/infra/prisma/repositories/plantoesRepository";
import { IPlantoesRepository } from "@modules/plantoes/repositories/IPlantoesRepository";

container.registerSingleton<IFarmaciasRepository>(
  "FarmaciasRepository",
  FarmaciasRepository
);

container.registerSingleton<IPlantoesRepository>(
  "PlantoesRepository",
  PlantoesRepository
);
