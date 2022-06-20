import { prisma } from "../../../../database/prismaClient";

interface ICreatePlantao {
  datetimestart: Date;
  datetimeend: Date;
  farmaciaId: string;
}

export class CreatePlantaoUseCase {
  async execute({ datetimestart, datetimeend, farmaciaId }: ICreatePlantao) {
    const plantao = await prisma.plantao.create({
      data: {
        datetimestart,
        datetimeend,
        farmaciaId,
      },
    });

    return plantao;
  }
}
