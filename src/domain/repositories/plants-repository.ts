import { Plant } from '@/src/domain/entities/plant.ts'

export interface PlantsRepository {
	create: (data: Plant) => Promise<void>
	findMany: () => Promise<Plant[]>
	createMany: (data: Plant[]) => Promise<Plant[]>
}
