import { Plant, PlantProps } from '@/domain/entities/plant.ts'
import { UniqueEntityID } from '@/common/entities/unique-entity-id.ts'
import { faker } from 'https://deno.land/x/deno_faker@v1.0.3/mod.ts'

export function makeCreatePlantFactory(
	override: Partial<PlantProps> = {},
	id?: UniqueEntityID,
) {
	const generateRandomCareInstructions = () => {
		const numInstructions = Math.floor(Math.random() * 10) + 1
		const careInstructions = []

		for (let i = 0; i < numInstructions; i++) {
			careInstructions.push(faker.name.jobTitle())
		}

		return careInstructions
	}

	const plant = Plant.create(
		{
			name: faker.name.title(),
			type: faker.name.jobType(),
			description: faker.name.jobDescriptor(),
			careInstructions: generateRandomCareInstructions(),
			imageUrl: faker.internet.url(),
			...override,
		},
		id,
	)

	return plant
}
