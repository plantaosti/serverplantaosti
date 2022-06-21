import { Plantao } from "@prisma/client";
import { ICreatePlantaoDTO } from "../dtos/ICreatePlantaoDTO";

interface IPlantoesRepository {
  findById(id): Promise<Plantao>;
  lista(): Promise<Plantao[]>;
  create: (data: ICreatePlantaoDTO) => Promise<void>;
  delete: (id) => Promise<void>;
  update: (data: ICreatePlantaoDTO) => Promise<Plantao>;
}

export { IPlantoesRepository };
