import { Plant } from '@/src/domain/entities/plant-entity.ts'
import { PlantsRepository } from '@/src/domain/repositories/plants-repository.ts'

export class InMemoryPlantsRepository implements PlantsRepository {
	public plants: Plant[] = []

	public async create(data: Plant): Promise<void> {
		this.plants.push(data)
	}

	public async findMany(): Promise<Plant[]> {
		return this.plants
	}

	public async createMany(data: Plant[]): Promise<Plant[]> {
		data.forEach((plant) => this.plants.push(plant))

		return this.plants
	}
}
