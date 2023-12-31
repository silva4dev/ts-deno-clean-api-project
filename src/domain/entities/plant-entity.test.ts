import { assertEquals, describe, it } from '@/deps.ts'
import { Plant } from '@/src/domain/entities/plant-entity.ts'

describe('Plant entity', () => {
	it('Should create a plant instance with the provided data', async () => {
		const result = Plant.create({
			name: 'Suculenta',
			type: 'Suculenta',
			description: 'A beautiful cactus',
			careInstructions: [
				'Water once a week',
				'Keep in indirect light',
			],
		})

		assertEquals(result.careInstructions.length, 2)
		assertEquals(result.name, 'Suculenta')
		assertEquals(result.type, 'Suculenta')
		assertEquals(result.description, 'A beautiful cactus')
	})
})
