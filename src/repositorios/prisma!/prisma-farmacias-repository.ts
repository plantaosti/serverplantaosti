import { Farmacia } from "@prisma/client";
import { prisma } from "../../database/prismaClient";
import { IFarmaciasData, IFarmaciasRepository } from "../farmacias-repository";

export class PrismaFarmaciasRepository implements IFarmaciasRepository {
  async delete(id): Promise<void> {
    await prisma.farmacia.delete({
      where: {
        id,
      },
    });
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
  }: IFarmaciasData) {
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

  async lista(): Promise<Farmacia[]> {
    const farmacias = await prisma.farmacia.findMany({
      where: {
        name: "Farmautil",
      },
    });

    return farmacias;
  }
}
