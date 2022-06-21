import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListarAllFarmaciasUseCase } from "./ListarAllFarmaciasUseCase";

export class ListarAllFarmaciasController {
  async handle(request: Request, response: Response) {
    const listarAllFarmaciasUseCase = container.resolve(
      ListarAllFarmaciasUseCase
    );
    const result = await listarAllFarmaciasUseCase.execute();

    return response.json(result);
  }
}
