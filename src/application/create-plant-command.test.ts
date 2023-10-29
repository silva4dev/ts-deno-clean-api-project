import { assertEquals } from 'https://deno.land/std@0.200.0/assert/mod.ts'
import { describe, it } from 'https://deno.land/std@0.204.0/testing/bdd.ts'
import { makeCreatePlantFactory } from '../../tests/factories/make-create-plant-factory.ts'

describe('Create Plant Command', () => {
	it('Should create a new plant', async () => {
		const { createPlantCommand } = makeCreatePlantFactory()

		const result = await createPlantCommand.execute({
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
