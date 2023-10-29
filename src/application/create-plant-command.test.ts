import {
	assertArrayIncludes,
	assertEquals,
} from 'https://deno.land/std@0.200.0/assert/mod.ts';
import { describe, it } from 'https://deno.land/std@0.204.0/testing/bdd.ts';
import { makeCreatePlantFactory } from '../../tests/factories/make-create-plant-factory.ts';

describe('Create Plant Command', () => {
	it('Should add a new plant', async () => {
		const { createPlantCommand } = makeCreatePlantFactory();

		const plant = await createPlantCommand.execute({
			name: 'Suculenta',
			type: 'Suculenta',
			description: 'Uma suculenta bonita',
			careInstructions: [
				'Regue uma vez por semana',
				'Mantenha em luz indireta',
			],
			imageUrl: 'https://example.com/suculenta.jpg',
		});

		assertEquals(plant.name, 'Suculenta');
		assertEquals(plant.type, 'Suculenta');
		assertEquals(plant.description, 'Uma suculenta bonita');
		assertEquals(plant.imageUrl, 'https://example.com/suculenta.jpg');
		assertArrayIncludes(plant.careInstructions, [
			'Regue uma vez por semana',
			'Mantenha em luz indireta',
		]);
	});
});
