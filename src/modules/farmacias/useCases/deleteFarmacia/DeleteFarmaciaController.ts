import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteFarmaciaUseCase } from "./DeleteFarmaciaUseCase";

export class DeleteFarmaciaController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteFarmaciaUseCase = container.resolve(DeleteFarmaciaUseCase);
    const result = await deleteFarmaciaUseCase.execute({
      id: id as string,
    });
    return response.json(result);
  }
}
