import { assertEquals, beforeEach, describe, it } from '@/deps.ts'
import { Plant } from '@/src/domain/entities/plant-entity.ts'
import { ListPlantsCommand } from '@/src/application/commands/list-plants/list-plants-command.ts'
import { InMemoryPlantsRepository } from '@/tests/repositories/in-memory/plants-repository/in-memory-plants-repository.ts'

let inMemoryPlantsRepository: InMemoryPlantsRepository
let sut: ListPlantsCommand

describe('List Plants Command', () => {
	beforeEach(() => {
		inMemoryPlantsRepository = new InMemoryPlantsRepository()
		sut = new ListPlantsCommand(inMemoryPlantsRepository)
	})

	it('Should return a list of plants', async () => {
		await inMemoryPlantsRepository.createMany([
			Plant.create({
				name: 'Suculenta',
				type: 'Suculenta',
				description: 'A beautiful cactus',
				careInstructions: [
					'Water once a week',
					'Keep in indirect light',
				],
			}),
			Plant.create({
				name: 'Orchid',
				type: 'Orchid',
				description: 'An elegant and colorful orchid',
				careInstructions: [
					'Water twice a week',
					'Keep in a location with good air circulation',
				],
			}),
		])

		const result = await sut.execute()

		assertEquals(result.value?.plants.length, 2)
		assertEquals(result.value?.plants instanceof Array, true)
	})

	it('Should return an empty list of plants', async () => {
		const result = await sut.execute()

		assertEquals(result.value?.plants.length, 0)
		assertEquals(result.value?.plants instanceof Array, true)
	})
})
