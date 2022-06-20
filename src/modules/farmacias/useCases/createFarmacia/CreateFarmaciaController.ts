import { Request, Response } from "express";
import { CreateFarmaciaUseCase } from "./CreateFarmaciaUseCase";

export class CreateFarmaciaController {
  async handle(request: Request, response: Response) {
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
    } = request.body;
    const createFarmaciaUseCase = new CreateFarmaciaUseCase();
    const result = createFarmaciaUseCase.execute({
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

    return response.json(result);
  }
}
