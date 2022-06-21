import { ICreatePlantaoDTO } from "@modules/plantoes/dtos/ICreatePlantaoDTO";
import { IPlantoesRepository } from "@modules/plantoes/repositories/IPlantoesRepository";
import { Plantao } from "@prisma/client";
import { prisma } from "@shared/infra/prisma/database/prismaClient";

class PlantoesRepository implements IPlantoesRepository {
  async lista(): Promise<Plantao[]> {
    const plantao = await prisma.plantao.findMany({
      include: {
        Farmacia: true,
      },
    });

    return plantao;
  }
  async findById(id): Promise<Plantao> {
    const plantao = await prisma.plantao.findUnique({
      where: { id },
      include: { Farmacia: true },
    });
    return plantao;
  }
  async create({
    datetimestart,
    datetimeend,
    farmaciaId,
  }: ICreatePlantaoDTO): Promise<void> {
    await prisma.plantao.create({
      data: {
        datetimestart,
        datetimeend,
        farmaciaId,
      },
    });
  }
  async delete(id: string): Promise<void> {
    await prisma.plantao.delete({ where: { id } });
  }
  async update({
    id,
    datetimestart,
    datetimeend,
    farmaciaId,
  }: ICreatePlantaoDTO): Promise<Plantao> {
    const plantao = await prisma.plantao.update({
      where: { id },
      data: {
        datetimestart,
        datetimeend,
        farmaciaId,
      },
    });

    return plantao;
  }
}

export { PlantoesRepository };
