import { Plant } from '@/domain/entities/plant.ts'
import { PlantsRepository } from '@/domain/repositories/plants-repository.ts'
import { Command } from '@/common/interfaces/command.ts'
import { Either, right } from '@/common/either.ts'

type ListPlantsCommandResponse = Either<
	null,
	{
		plants: Plant[]
	}
>

export class ListPlantsCommand
	implements Command<void, ListPlantsCommandResponse> {
	constructor(
		private plantRepository: PlantsRepository,
	) {}

	async execute(): Promise<ListPlantsCommandResponse> {
		const plants = await this.plantRepository.findMany()

		return right({
			plants,
		})
	}
}
