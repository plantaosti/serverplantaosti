import { ICreateFarmaciasDTO } from "@modules/farmacias/dtos/ICreateFarmaciasDTO";
import { IFarmaciasRepository } from "@modules/farmacias/repositories/IFarmaciaRespository";
import { prisma } from "@shared/infra/prisma/database/prismaClient";
import { inject, injectable } from "tsyringe";

@injectable()
class CreateFarmaciaUseCase {
  constructor(
    @inject("FarmaciasRepository")
    private farmaciasRepository: IFarmaciasRepository
  ) {}

  async execute({
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
  }: ICreateFarmaciasDTO) {
    const farmacia = await prisma.farmacia.create({
      data: {
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
      },
    });

    return farmacia;
  }
}

export { CreateFarmaciaUseCase };
