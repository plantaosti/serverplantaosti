import { Request, Response } from "express";
import { ListarIdPlantaoUseCase } from "./ListarIdPlantaoUseCase";

export class ListarIdPlantaoController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const listarIdplantaoUseCase = new ListarIdPlantaoUseCase();
    const result = await listarIdplantaoUseCase.execute({
      id: id,
    });

    return response.json(result);
  }
}
