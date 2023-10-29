import { Plant } from '../entities/plant.ts';

export interface PlantsRepository {
	create: (data: Plant) => Promise<void>;
	findMany: () => Promise<Plant[]>;
	createMany: (data: Plant[]) => Promise<Plant[]>;
}
