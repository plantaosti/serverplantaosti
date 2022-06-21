import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListarIdPlantaoUseCase } from "./ListarIdPlantaoUseCase";

export class ListarIdPlantaoController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const listarIdplantaoUseCase = container.resolve(ListarIdPlantaoUseCase);
    const plantao = await listarIdplantaoUseCase.execute(id);

    return response.json(plantao);
  }
}
