import { Request, Response } from "express";
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

    const updateFarmaciaUseCase = new UpdateFarmaciaUseCase();
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
