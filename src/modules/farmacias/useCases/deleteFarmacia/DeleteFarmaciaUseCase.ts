import { prisma } from "../../../../database/prismaClient";

interface IListarFarmacia {
  id?: string;
}
export class DeleteFarmaciaUseCase {
  async execute({ id }: IListarFarmacia) {
    const result = await prisma.farmacia.delete({
      where: {
        id,
      },
    });
    return result;
  }
}
