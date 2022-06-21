import { FarmaciasRepository } from "@modules/farmacias/infra/prisma/repositories/farmaciasRepository";
import { inject, injectable } from "tsyringe";

@injectable()
export class ListarAllFarmaciasUseCase {
  constructor(
    @inject("FarmaciasRepository")
    private farmaciasRepository: FarmaciasRepository
  ) {}
  async execute() {
    const farmacias = await this.farmaciasRepository.lista();

    return farmacias;
  }
}
