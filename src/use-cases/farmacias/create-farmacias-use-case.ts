import { IFarmaciasRepository } from "../../repositorios/farmacias-repository";

interface ICreateFarmaciaUseCaseRequest {
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
  constructor(private farmaciasRepository: IFarmaciasRepository) {}

  async execute(request: ICreateFarmaciaUseCaseRequest) {
    const {
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
    } = request;
    await this.farmaciasRepository.create({
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
  }
}
