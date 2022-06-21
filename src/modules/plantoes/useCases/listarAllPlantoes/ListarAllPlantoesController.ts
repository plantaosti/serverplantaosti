import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListarAllPlantoesUseCase } from "./ListarAllPlantoesUseCase";

export class ListarAllPlantoesController {
  async handle(request: Request, response: Response) {
    const listarAllPlantoesUseCase = container.resolve(
      ListarAllPlantoesUseCase
    );
    const result = await listarAllPlantoesUseCase.execute();

    return response.status(200).json(result);
  }
}
