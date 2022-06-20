import { prisma } from "../../../../database/prismaClient";

export class ListarAllPlantoesUseCase {
  async execute() {
    const plantoes = await prisma.plantao.findMany({
      include: {
        Farmacia: true,
      },
    });

    return plantoes;
  }
}
