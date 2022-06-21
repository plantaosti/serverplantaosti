import { ICreateFarmaciasDTO } from "@modules/farmacias/dtos/ICreateFarmaciasDTO";
import { IFarmaciasRepository } from "@modules/farmacias/repositories/IFarmaciaRespository";

import { Farmacia } from "@prisma/client";
import { prisma } from "@shared/infra/prisma/database/prismaClient";

class FarmaciasRepository implements IFarmaciasRepository {
  async lista(): Promise<Farmacia[]> {
    const farmacias = await prisma.farmacia.findMany();

    return farmacias;
  }
  async findById(id): Promise<Farmacia> {
    const farmacia = await prisma.farmacia.findUnique({
      where: { id: "41b8f404-e8e1-40c0-8301-071b71c5d532" },
    });
    return farmacia;
  }
  async create({
    name,
    city,
    email,
    lat,
    lng,
    neighborhood,
    phone,
    street,
    urllogo,
    whatsapp,
    zipcode,
  }: ICreateFarmaciasDTO): Promise<void> {
    await prisma.farmacia.create({
      data: {
        name,
        city,
        email,
        lat,
        lng,
        neighborhood,
        phone,
        street,
        urllogo,
        whatsapp,
        zipcode,
      },
    });
  }
  async delete(id: string): Promise<void> {
    await prisma.farmacia.delete({ where: { id } });
  }
  async update({
    id,
    name,
    city,
    email,
    lat,
    lng,
    neighborhood,
    phone,
    street,
    urllogo,
    whatsapp,
    zipcode,
  }: ICreateFarmaciasDTO): Promise<Farmacia> {
    const farmacia = await prisma.farmacia.update({
      where: { id },
      data: {
        name,
        city,
        email,
        lat,
        lng,
        neighborhood,
        phone,
        street,
        urllogo,
        whatsapp,
        zipcode,
      },
    });

    return farmacia;
  }
}

export { FarmaciasRepository };
