import { IFarmaciasRepository } from "@modules/farmacias/repositories/IFarmaciaRespository";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";

interface IListarFarmacia {
  id?: string;
}
@injectable()
class DeleteFarmaciaUseCase {
  constructor(
    @inject("FarmaciasRepository")
    private farmaciasRepository: IFarmaciasRepository
  ) {}
  async execute({ id }: IListarFarmacia): Promise<void> {
    const farmacia = await this.farmaciasRepository.findById(id);

    if (!farmacia) {
      throw new AppError("Nenhuma farmacia cadastrada com o ID informado", 401);
    }

    const result = await this.farmaciasRepository.delete({
      id,
    });

    return result;
  }
}

export { DeleteFarmaciaUseCase };
