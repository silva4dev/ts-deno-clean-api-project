import { Plant } from '@/src/domain/entities/plant.ts'
import { PlantsRepository } from '@/src/domain/repositories/plants-repository.ts'
import { Command } from '@/src/common/interfaces/command.ts'
import { Either, Right } from '@/src/common/either.ts'

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
