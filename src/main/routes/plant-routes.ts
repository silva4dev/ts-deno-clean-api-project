import { Router } from '@/deps.ts'
import { adaptRoute } from '@/src/main/adapters/oak/route-adapter.ts'
import { makeCreatePlantController } from '@/src/main/factories/controllers/create-plant/make-create-plant-controller.ts'

const router = new Router()

router
	.get<string>(
		'/',
		adaptRoute(makeCreatePlantController()),
	)

export default router
