import { Plant } from '@/domain/entities/plant.ts'
import { PlantsRepository } from '@/domain/repositories/plants-repository.ts'
import { Command } from '@/common/interfaces/command.ts'
import { Either, right } from '@/common/either.ts'

export class CreatePlantCommand
	implements
		Command<CreatePlantCommand.Request, CreatePlantCommand.Response> {
	constructor(
		private plantRepository: PlantsRepository,
	) {}

	async execute({
		name,
		description,
		careInstructions,
		imageUrl,
		type,
	}: CreatePlantCommand.Request): Promise<CreatePlantCommand.Response> {
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

namespace CreatePlantCommand {
	export type Request = {
		name: string
		type: string
		description: string
		careInstructions: string[]
		imageUrl: string
	}

	export type Response = Either<
		null,
		{
			plant: Plant
		}
	>
}
