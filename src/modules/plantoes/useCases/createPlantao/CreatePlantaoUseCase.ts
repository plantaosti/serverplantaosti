import { IFarmaciasRepository } from "@modules/farmacias/repositories/IFarmaciaRespository";
import { ICreatePlantaoDTO } from "@modules/plantoes/dtos/ICreatePlantaoDTO";
import { IPlantoesRepository } from "@modules/plantoes/repositories/IPlantoesRepository";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";

@injectable()
export class CreatePlantaoUseCase {
  constructor(
    @inject("PlantoesRepository")
    private plantoesRepository: IPlantoesRepository,
    @inject("FarmaciasRepository")
    private farmaciasRepository: IFarmaciasRepository
  ) {}
  async execute({ datetimestart, datetimeend, farmaciaId }: ICreatePlantaoDTO) {
    const isFarmaciasExiste = await this.farmaciasRepository.findById(
      farmaciaId
    );

    if (!isFarmaciasExiste) {
      throw new AppError("Farmácia não cadastrada", 401);
    }

    const plantao = await this.plantoesRepository.create({
      datetimestart,
      datetimeend,
      farmaciaId,
    });

    return plantao;
  }
}
