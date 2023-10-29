import { Plant } from '@/domain/entities/plant.ts';
import { PlantsRepository } from '@/domain/repositories/plants-repository.ts';
import { Command } from '@/common/interfaces/command.ts';

export interface CreatePlantCommandRequest {
	name: string;
	type: string;
	description: string;
	careInstructions: string[];
	imageUrl: string;
}

export class CreatePlantCommand
	implements Command<CreatePlantCommandRequest, Plant> {
	constructor(
		private plantRepository: PlantsRepository,
	) {}

	async execute({
		name,
		description,
		careInstructions,
		imageUrl,
		type,
	}: CreatePlantCommandRequest): Promise<Plant> {
		const plant = Plant.create({
			name,
			description,
			careInstructions,
			imageUrl,
			type,
		});

		await this.plantRepository.create(plant);

		return plant;
	}
}
