import { IPlantoesRepository } from "@modules/plantoes/repositories/IPlantoesRepository";
import { inject, injectable } from "tsyringe";

@injectable()
export class ListarAllPlantoesUseCase {
  constructor(
    @inject("PlantoesRepository")
    private plantoesRepository: IPlantoesRepository
  ) {}
  async execute() {
    const plantoes = await this.plantoesRepository.lista();

    return plantoes;
  }
}
