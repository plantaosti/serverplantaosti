import { PlantoesRepository } from "@modules/plantoes/infra/prisma/repositories/plantoesRepository";
import { inject, injectable } from "tsyringe";

@injectable()
export class ListarIdPlantaoUseCase {
  constructor(
    @inject("PlantoesRepository")
    private plantoesRepository: PlantoesRepository
  ) {}
  async execute(id: string) {
    const plantao = this.plantoesRepository.findById(id);
    return plantao;
  }
}
