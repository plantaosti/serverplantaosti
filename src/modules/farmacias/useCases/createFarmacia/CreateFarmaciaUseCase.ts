import { prisma } from "../../../../database/prismaClient";

interface ICreateFarmacia {
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

export class CreateFarmaciaUseCase {
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
  }: ICreateFarmacia) {
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
