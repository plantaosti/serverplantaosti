import { Request, Response } from "express";
import { ListarAllFarmaciasUseCase } from "./ListarAllFarmaciasUseCase";

export class ListarAllFarmaciasController {
  async handle(request: Request, response: Response) {
    const listarAllFarmaciasUseCase = new ListarAllFarmaciasUseCase();
    const result = await listarAllFarmaciasUseCase.execute();

    return response.json(result);
  }
}
