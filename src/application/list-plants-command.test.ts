import { assertEquals } from 'https://deno.land/std@0.200.0/assert/mod.ts';
import {
	beforeEach,
	describe,
	it,
} from 'https://deno.land/std@0.204.0/testing/bdd.ts';
import { Plant } from '@/domain/entities/plant.ts';
import { ListPlantsCommand } from '@/application/list-plants-command.ts';
import { InMemoryPlantsRepository } from '../../tests/repositories/in-memory-plants-repository.ts';

let inMemoryPlantsRepository: InMemoryPlantsRepository;
let sut: ListPlantsCommand;

describe('List Plants Command', () => {
	beforeEach(() => {
		inMemoryPlantsRepository = new InMemoryPlantsRepository();
		sut = new ListPlantsCommand(inMemoryPlantsRepository);
	});

	it('Should return a list of plants with correct details', async () => {
		await inMemoryPlantsRepository.createMany([
			Plant.create({
				name: 'Suculenta',
				type: 'Suculenta',
				description: 'Uma suculenta bonita',
				careInstructions: [
					'Regue uma vez por semana',
					'Mantenha em luz indireta',
				],
				imageUrl: 'https://example.com/suculenta.jpg',
			}),
			Plant.create({
				name: 'Orquídea',
				type: 'Orquídea',
				description: 'Uma orquídea elegante e colorida',
				careInstructions: [
					'Regue duas vezes por semana',
					'Mantenha em local com boa circulação de ar',
				],
				imageUrl: 'https://example.com/orquidea.jpg',
			}),
		]);

		const plants = await sut.execute();

		assertEquals(plants.length, 2);
		assertEquals(plants instanceof Array, true);
	});

	it('Should return an empty list of plants', async () => {
		const plants = await sut.execute();

		assertEquals(plants.length, 0);
		assertEquals(plants instanceof Array, true);
	});
});
