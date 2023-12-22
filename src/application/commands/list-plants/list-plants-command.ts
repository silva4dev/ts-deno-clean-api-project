import { Plant } from '@/src/domain/entities/plant-entity.ts'
import { PlantsRepository } from '@/src/domain/repositories/plants-repository.ts'
import { Command } from '@/src/@shared/interfaces/command.ts'
import { Either, Right } from '@/src/@shared/either.ts'

export class ListPlantsCommand
	implements Command<void, ListPlantsCommand.Response> {
	constructor(
		private plantRepository: PlantsRepository,
	) {}

	async execute(): Promise<ListPlantsCommand.Response> {
		const plants = await this.plantRepository.findMany()

		return Right({
			plants,
		})
	}
}

namespace ListPlantsCommand {
	export type Response = Either<
		null,
		{
			plants: Plant[]
		}
	>
}
