import {
  assertArrayIncludes,
  assertEquals,
} from "https://deno.land/std@0.200.0/assert/mod.ts";
const { test } = Deno;
import { CreatePlantCommand } from "./create-plant-command.ts";
import { InMemoryPlantsRepository } from "../../infra/in-memory/in-memory-plants-repository.ts";

const makeSut = () => {
  const plantRepository = new InMemoryPlantsRepository();
  const sut = new CreatePlantCommand(plantRepository);

  return {
    sut,
    plantRepository,
  };
};

test("Should add a new plant", async () => {
  const { sut } = makeSut();

  const plant = await sut.execute({
    name: "Suculenta",
    type: "Suculenta",
    description: "Uma suculenta bonita",
    careInstructions: ["Regue uma vez por semana", "Mantenha em luz indireta"],
    imageUrl: "https://example.com/suculenta.jpg",
  });

  assertEquals(plant.name, "Suculenta");
  assertEquals(plant.type, "Suculenta");
  assertEquals(plant.description, "Uma suculenta bonita");
  assertEquals(plant.imageUrl, "https://example.com/suculenta.jpg");
  assertArrayIncludes(plant.careInstructions, [
    "Regue uma vez por semana",
    "Mantenha em luz indireta",
  ]);
});
