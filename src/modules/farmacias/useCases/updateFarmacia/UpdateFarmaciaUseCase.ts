import { Farmacia } from "@prisma/client";
import { prisma } from "../../../../database/prismaClient";

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

export class UpdateFarmaciaUseCase {
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
    const result = await prisma.farmacia.update({
      where: {
        id,
      },
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

    return result;
  }
}
