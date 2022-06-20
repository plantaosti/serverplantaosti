import { Farmacia } from "@prisma/client";

export interface IFarmaciasData {
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

export interface IFarmaciasRepository {
  findById(id): Promise<Farmacia>;
  create: (data: IFarmaciasData) => Promise<void>;
  delete: (id) => Promise<void>;
  update: (data: IFarmaciasData) => Promise<Farmacia>;
}
