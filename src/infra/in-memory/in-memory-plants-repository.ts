import { Plant } from "../../domain/entities/plant.ts";
import { PlantsRepository } from "../../domain/repositories/plants-repository.ts";

export class InMemoryPlantsRepository implements PlantsRepository {
  public plants: Plant[] = [];

  async create(data: Plant): Promise<void> {
    this.plants.push(data);
  }

  async findMany(): Promise<Plant[]> {
    return this.plants;
  }

  async createMany(data: Plant[]): Promise<Plant[]> {
    data.forEach((plant) => this.plants.push(plant));

    return this.plants;
  }
}
