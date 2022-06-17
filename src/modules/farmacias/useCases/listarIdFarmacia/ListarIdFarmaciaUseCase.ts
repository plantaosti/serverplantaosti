import { prisma } from "../../../../database/prismaClient";

interface IListarFarmacia {
  id?: string;
}
export class ListarIdFarmaciaUseCase {
  async execute({ id }: IListarFarmacia) {
    const result = await prisma.farmacia.findUnique({
      where: {
        id,
      },
    });
    return result;
  }
}
