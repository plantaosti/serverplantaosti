import { prisma } from "../../../../database/prismaClient";

interface IListarPlantao {
  id: string;
}

export class ListarIdPlantaoUseCase {
  async execute({ id }: IListarPlantao) {
    const result = await prisma.plantao.findUnique({
      where: {
        id,
      },
      include: {
        Farmacia: true,
      },
    });

    return result;
  }
}
