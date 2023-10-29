import { Plant } from '@/domain/entities/plant.ts'
import { PlantsRepository } from '@/domain/repositories/plants-repository.ts'
import { Command } from '@/common/interfaces/command.ts'

export class ListPlantsCommand implements Command<void, Plant[]> {
	constructor(
		private plantRepository: PlantsRepository,
	) {}

	async execute(): Promise<Plant[]> {
		const plants = await this.plantRepository.findMany()

		return plants
	}
}
