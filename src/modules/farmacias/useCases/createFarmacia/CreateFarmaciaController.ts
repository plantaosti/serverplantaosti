import { Request, Response } from "express";
import { container } from "tsyringe";
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
    const createFarmaciaUseCase = container.resolve(CreateFarmaciaUseCase);
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
