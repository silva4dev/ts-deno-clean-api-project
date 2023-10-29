import { Plant } from '@/domain/entities/plant.ts'
import { PlantsRepository } from '@/domain/repositories/plants-repository.ts'
import { Command } from '@/common/interfaces/command.ts'
import { Either, right } from '@/common/either.ts'

export interface CreatePlantCommandRequest {
	name: string
	type: string
	description: string
	careInstructions: string[]
	imageUrl: string
}

type CreatePlantCommandResponse = Either<
	null,
	{
		plant: Plant
	}
>

export class CreatePlantCommand
	implements Command<CreatePlantCommandRequest, CreatePlantCommandResponse> {
	constructor(
		private plantRepository: PlantsRepository,
	) {}

	async execute({
		name,
		description,
		careInstructions,
		imageUrl,
		type,
	}: CreatePlantCommandRequest): Promise<CreatePlantCommandResponse> {
		const plant = Plant.create({
			name,
			description,
			careInstructions,
			imageUrl,
			type,
		})

		await this.plantRepository.create(plant)

		return right({
			plant,
		})
	}
}
