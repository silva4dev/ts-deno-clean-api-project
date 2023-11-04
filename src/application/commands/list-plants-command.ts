import { Plant } from '@/domain/entities/plant.ts'
import { PlantsRepository } from '@/domain/repositories/plants-repository.ts'
import { Command } from '@/common/interfaces/command.ts'
import { Either, right } from '@/common/either.ts'

export class ListPlantsCommand
	implements Command<void, ListPlantsCommand.Response> {
	constructor(
		private plantRepository: PlantsRepository,
	) {}

	async execute(): Promise<ListPlantsCommand.Response> {
		const plants = await this.plantRepository.findMany()

		return right({
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
