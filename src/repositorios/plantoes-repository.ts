import { Plantao } from "@prisma/client";

export interface IPlantaoData {
  datetimestart: Date;
  datetimeend: Date;
  farmaciaId: string;
}

export interface IPlantaoRepositoy {
  create: (data: IPlantaoData) => Promise<void>;
  findById(id): Promise<Plantao>;
  delete: (id) => Promise<void>;
  update: (data: IPlantaoData) => Promise<Plantao>;
}
