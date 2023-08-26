import { Plant } from "../../domain/entities/plant.ts";
import { PlantsRepository } from "../../domain/repositories/plants-repository.ts";

export interface Command {
  execute(): Promise<Plant[]>;
}

export class ListPlantsCommand implements Command {
  constructor(
    private plantRepository: PlantsRepository,
  ) {}

  async execute(): Promise<Plant[]> {
    const plants = await this.plantRepository.findMany();

    return plants;
  }
}
