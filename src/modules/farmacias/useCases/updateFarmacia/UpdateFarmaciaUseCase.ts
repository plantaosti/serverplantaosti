import { IFarmaciasRepository } from "@modules/farmacias/repositories/IFarmaciaRespository";
import { Farmacia } from "@prisma/client";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";

export interface IRequest {
  id: string;
  name: string;
  urllogo: string;
  phone: string;
  whatsapp: string;
  street: string;
  city: string;
  zipcode: number;
  neighborhood: string;
  lat: string;
  lng: string;
  email: string;
}

@injectable()
export class UpdateFarmaciaUseCase {
  constructor(
    @inject("FarmaciasRepository")
    private farmaciaRepository: IFarmaciasRepository
  ) {}
  async execute({
    id,
    name,
    urllogo,
    phone,
    whatsapp,
    street,
    city,
    zipcode,
    neighborhood,
    lat,
    lng,
    email,
  }: IRequest): Promise<Farmacia> {
    const farmacia = await this.farmaciaRepository.findById(id);

    if (!farmacia) {
      throw new AppError("Nenhuma farmacia cadastrada com esse id", 401);
    }
    const result = await this.farmaciaRepository.update({
      name,
      urllogo,
      phone,
      whatsapp,
      street,
      city,
      zipcode,
      neighborhood,
      lat,
      lng,
      email,
    });

    return result;
  }
}
