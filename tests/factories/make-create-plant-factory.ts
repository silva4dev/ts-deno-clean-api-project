import { CreatePlantCommand } from '@/application/create-plant-command.ts'
import { InMemoryPlantsRepository } from '../repositories/in-memory-plants-repository.ts'

export function makeCreatePlantFactory() {
	const inMemoryPlantsRepository = new InMemoryPlantsRepository()
	const createPlantCommand = new CreatePlantCommand(inMemoryPlantsRepository)

	return {
		inMemoryPlantsRepository,
		createPlantCommand,
	}
}
