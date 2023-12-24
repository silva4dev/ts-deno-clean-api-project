import { Plant } from '@/src/domain/entities/plant-entity.ts'
import { PlantsRepository } from '@/src/domain/repositories/plants-repository.ts'
import { Command } from '@/src/@shared/interfaces/command.ts'
import { Either, Right } from '@/src/@shared/either.ts'

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
		type,
	}: CreatePlantCommand.Request): Promise<CreatePlantCommand.Response> {
		const plant = Plant.create({
			name,
			description,
			careInstructions,
			type,
		})

		await this.plantRepository.create(plant)

		return Right({
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
	}

	export type Response = Either<
		null,
		{
			plant: Plant
		}
	>
}
