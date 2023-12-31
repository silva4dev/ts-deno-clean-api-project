import { Controller } from '@/src/presentation/protocols/controller.ts'
import { CreatePlantController } from '@/src/presentation/controllers/create-plant/create-plant-controller.ts'

export const makeCreatePlantController = (): Controller => {
	return new CreatePlantController()
}
