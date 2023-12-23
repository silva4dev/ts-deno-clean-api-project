import { Application, Router } from '@/deps.ts'
import { adaptRoute } from '@/src/main/adapters/oak/route-adapter.ts'
import { makeCreatePlantController } from '@/src/main/factories/controllers/make-create-plant-controller.ts'

const router = new Router()
router
	.get(
		'/',
		adaptRoute(makeCreatePlantController()),
	)
const app = new Application()
const port = 3333

app.addEventListener('listen', ({ hostname, port, secure }) => {
	console.log(
		`Listening on: ${secure ? 'https://' : 'http://'}${
			hostname ?? 'localhost'
		}:${port}`,
	)
})

app.addEventListener('error', (event) => {
	console.log(event.error)
})

app.use(router.routes())
app.use(router.allowedMethods())

await app.listen({ port })
