import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreatePlantaoUseCase } from "./CreatePlantaoUseCase";

export class CreatePlantaoController {
  async handle(request: Request, response: Response) {
    const { datetimestart, datetimeend, farmaciaId } = request.body;

    const createPlantaoUseCase = container.resolve(CreatePlantaoUseCase);
    const result = createPlantaoUseCase.execute({
      datetimestart,
      datetimeend,
      farmaciaId,
    });

    return response.status(200).json(result);
  }
}
