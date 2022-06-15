import { IFarmaciasRepository } from "../../repositorios/farmacias-repository";

export class ListarFarmaciasUseCase {
  constructor(private farmaciasRepository: IFarmaciasRepository) {}

  async execute() {
    const farmacias = await this.farmaciasRepository.lista;

    return farmacias;
  }
}
