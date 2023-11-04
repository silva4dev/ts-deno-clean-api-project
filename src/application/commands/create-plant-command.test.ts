import { assertEquals, beforeEach, describe, it } from '@/deps.ts'
import { InMemoryPlantsRepository } from '@/tests/repositories/in-memory-plants-repository.ts'
import { CreatePlantCommand } from '@/src/application/commands/create-plant-command.ts'

let inMemoryPlantsRepository: InMemoryPlantsRepository
let sut: CreatePlantCommand

describe('Create Plant Command', () => {
	beforeEach(() => {
		inMemoryPlantsRepository = new InMemoryPlantsRepository()
		sut = new CreatePlantCommand(inMemoryPlantsRepository)
	})

	it('Should create a new plant', async () => {
		const result = await sut.execute({
			name: 'Suculenta',
			type: 'Suculenta',
			description: 'A beautiful cactus',
			careInstructions: [
				'Water once a week',
				'Keep in indirect light',
			],
			imageUrl: 'https://example.com/suculenta.jpg',
		})

		assertEquals(result.value?.plant.careInstructions.length, 2)
		assertEquals(result.value?.plant.name, 'Suculenta')
		assertEquals(result.value?.plant.type, 'Suculenta')
		assertEquals(result.value?.plant.description, 'A beautiful cactus')
		assertEquals(
			result.value?.plant.imageUrl,
			'https://example.com/suculenta.jpg',
		)
	})
})
