import { Request, Response } from "express";
import { ListarIdFarmaciaUseCase } from "./ListarIdFarmaciaUseCase";

export class ListarIdFarmaciaController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const listarIdFarmaciaUseCase = new ListarIdFarmaciaUseCase();
    const result = await listarIdFarmaciaUseCase.execute({
      id: id as string,
    });
    return response.json(result);
  }
}
