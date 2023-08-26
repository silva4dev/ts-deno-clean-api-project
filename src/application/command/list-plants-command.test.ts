import { assertEquals } from "https://deno.land/std@0.200.0/assert/mod.ts";
const { test } = Deno;
import { InMemoryPlantsRepository } from "../../infra/in-memory/in-memory-plants-repository.ts";
import { ListPlantsCommand } from "./list-plants-command.ts";
import { Plant } from "../../domain/entities/plant.ts";

const makeSut = () => {
  const plantRepository = new InMemoryPlantsRepository();
  const sut = new ListPlantsCommand(plantRepository);

  return {
    sut,
    plantRepository,
  };
};

test("Should return a list of plants with correct details", async () => {
  const { sut, plantRepository } = makeSut();

  await plantRepository.createMany([
    Plant.create({
      name: "Suculenta",
      type: "Suculenta",
      description: "Uma suculenta bonita",
      careInstructions: [
        "Regue uma vez por semana",
        "Mantenha em luz indireta",
      ],
      imageUrl: "https://example.com/suculenta.jpg",
    }),
    Plant.create({
      name: "Orquídea",
      type: "Orquídea",
      description: "Uma orquídea elegante e colorida",
      careInstructions: [
        "Regue duas vezes por semana",
        "Mantenha em local com boa circulação de ar",
      ],
      imageUrl: "https://example.com/orquidea.jpg",
    }),
  ]);

  const plants = await sut.execute();

  assertEquals(plants.length, 2);
  assertEquals(plants instanceof Array, true);
});
