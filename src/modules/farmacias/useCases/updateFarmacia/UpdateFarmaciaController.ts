import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateFarmaciaUseCase } from "./UpdateFarmaciaUseCase";

export class UpdateFarmaciaController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
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

    const updateFarmaciaUseCase = container.resolve(UpdateFarmaciaUseCase);
    const result = await updateFarmaciaUseCase.execute({
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
    });

    return response.json(result);
  }
}
