import { AppError } from "@shared/errors/AppError";
import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListarIdFarmaciaUseCase } from "./ListarIdFarmaciaUseCase";

export class ListarIdFarmaciaController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    console.log(id);

    const listarIdFarmaciaUseCase = container.resolve(ListarIdFarmaciaUseCase);
    const farmacia = listarIdFarmaciaUseCase.execute(
      "6c60e7b9-fd88-41e9-9648-ad983928fe25"
    );
    if (!farmacia) {
      throw new AppError("Farmacia nao localizada", 401);
    }
    return response.json(farmacia);
  }
}
