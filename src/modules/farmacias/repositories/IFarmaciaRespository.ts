import { Farmacia } from "@prisma/client";
import { ICreateFarmaciasDTO } from "../dtos/ICreateFarmaciasDTO";

interface IFarmaciasRepository {
  findById(id): Promise<Farmacia>;
  lista(): Promise<Farmacia[]>;
  create: (data: ICreateFarmaciasDTO) => Promise<void>;
  delete: (id: string) => Promise<void>;
  update: (data: ICreateFarmaciasDTO) => Promise<Farmacia>;
}

export { IFarmaciasRepository };
