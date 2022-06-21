import { FarmaciasRepository } from "@modules/farmacias/infra/prisma/repositories/farmaciasRepository";
import { inject, injectable } from "tsyringe";

@injectable()
export class ListarIdFarmaciaUseCase {
  constructor(
    @inject("FarmaciasRepository")
    private farmaciasRepository: FarmaciasRepository
  ) {}
  async execute(id: string) {
    const farmacia = await this.farmaciasRepository.findById(id);

    return farmacia;
  }
}
