import { Plant } from '@/src/domain/entities/plant.ts'
import { PlantsRepository } from '@/src/domain/repositories/plants-repository.ts'
import { Command } from '@/src/common/interfaces/command.ts'
import { Either, right } from '@/src/common/either.ts'

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
