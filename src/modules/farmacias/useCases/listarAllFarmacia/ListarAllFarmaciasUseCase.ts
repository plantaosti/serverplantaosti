import { prisma } from "../../../../database/prismaClient";

export class ListarAllFarmaciasUseCase {
  async execute() {
    const farmacias = await prisma.farmacia.findMany();

    return farmacias;
  }
}
