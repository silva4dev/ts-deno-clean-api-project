import { assertEquals } from 'https://deno.land/std@0.200.0/assert/mod.ts'
import {
	beforeEach,
	describe,
	it,
} from 'https://deno.land/std@0.204.0/testing/bdd.ts'
import { Plant } from '@/domain/entities/plant.ts'
import { ListPlantsCommand } from '@/application/list-plants-command.ts'
import { InMemoryPlantsRepository } from '../../tests/repositories/in-memory-plants-repository.ts'

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
				imageUrl: 'https://example.com/suculenta.jpg',
			}),
			Plant.create({
				name: 'Orchid',
				type: 'Orchid',
				description: 'An elegant and colorful orchid',
				careInstructions: [
					'Water twice a week',
					'Keep in a location with good air circulation',
				],
				imageUrl: 'https://example.com/orchid.jpg',
			}),
		])

		const plants = await sut.execute()

		assertEquals(plants.length, 2)
		assertEquals(plants instanceof Array, true)
	})

	it('Should return an empty list of plants', async () => {
		const plants = await sut.execute()

		assertEquals(plants.length, 0)
		assertEquals(plants instanceof Array, true)
	})
})
