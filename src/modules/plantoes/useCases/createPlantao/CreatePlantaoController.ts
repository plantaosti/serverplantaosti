import { Request, Response } from "express";
import { CreatePlantaoUseCase } from "./CreatePlantaoUseCase";

export class CreatePlantaoController {
  async handle(request: Request, response: Response) {
    const { datetimestart, datetimeend, farmaciaId } = request.body;

    const createPlantaoUseCase = new CreatePlantaoUseCase();
    const result = createPlantaoUseCase.execute({
      datetimestart,
      datetimeend,
      farmaciaId,
    });

    return response.status(200).json(result);
  }
}
