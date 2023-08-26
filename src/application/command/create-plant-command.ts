import { Plant } from "../../domain/entities/plant.ts";
import { PlantsRepository } from "../../domain/repositories/plants-repository.ts";

export interface Command {
  execute(plant: Plant): Promise<Plant>;
}

export interface CreatePlantCommandRequest {
  name: string;
  type: string;
  description: string;
  careInstructions: string[];
  imageUrl: string;
}

export class CreatePlantCommand implements Command {
  constructor(
    private plantRepository: PlantsRepository,
  ) {}

  async execute({
    name,
    description,
    careInstructions,
    imageUrl,
    type,
  }: CreatePlantCommandRequest): Promise<Plant> {
    const plant = Plant.create({
      name,
      description,
      careInstructions,
      imageUrl,
      type,
    });

    await this.plantRepository.create(plant);

    return plant;
  }
}
