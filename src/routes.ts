import express from "express";
import { PrismaFarmaciasRepository } from "./repositorios/prisma/prisma-farmacias-repository";
import { CreateFarmaciaUseCase } from "./use-cases/farmacias/create-farmacias-use-case";

import { ListarFarmaciasUseCase } from "./use-cases/farmacias/listar-farmacias-use-case";
export const routes = express.Router();

routes.get("/farmacias", async (req, res) => {
  const prismafarmaciasrepository = new PrismaFarmaciasRepository();
  const listarEtiquetasUse = new ListarFarmaciasUseCase(
    prismafarmaciasrepository
  );
  console.log(listarEtiquetasUse);
  return res.status(201).json({ data: listarEtiquetasUse });
});

routes.post("/farmacias", async (req, res) => {
  const {
    name,
    urllogo,
    phone,
    whatsapp,
    street,
    city,
    zipcode,
    neighborhood,
    lat,
    lng,
    email,
  } = req.body;
  const prismafarmaciasrepository = new PrismaFarmaciasRepository();
  const createfarmaciausecase = new CreateFarmaciaUseCase(
    prismafarmaciasrepository
  );

  await createfarmaciausecase.execute({
    name,
    urllogo,
    phone,
    whatsapp,
    street,
    city,
    zipcode,
    neighborhood,
    lat,
    lng,
    email,
  });

  return res.status(201).json({ msg: "Farmacia cadastrada com sucesso!" });
});
