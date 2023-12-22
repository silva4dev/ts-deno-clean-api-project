import { Application, Context, Router, Status } from '@/deps.ts'
import { ListPlantsCommand } from '@/src/application/commands/list-plants-command.ts'
import { InMemoryPlantsRepository } from '@/tests/repositories/in-memory-plants-repository.ts'
import { CreatePlantCommand } from '@/src/application/commands/create-plant-command.ts'
import { isRight } from '@/src/@shared/either.ts'

const inMemoryPlantsRepository = new InMemoryPlantsRepository()
const listPlantsCommand = new ListPlantsCommand(inMemoryPlantsRepository)
const createPlantsCommand = new CreatePlantCommand(inMemoryPlantsRepository)

const router = new Router()
router
	.get('/', async (context: Context) => {
		const result = await listPlantsCommand.execute()

		if (isRight(result)) {
			context.response.status = Status.OK
			context.response.body = result.value?.plants.map((plant) => {
				return {
					careInstructions: plant.careInstructions,
					description: plant.description,
					imageUrl: plant.imageUrl,
					name: plant.name,
					type: plant.type,
				}
			})
		} else {
			context.response.status = Status.InternalServerError
			context.response.body = {
				error: 'Internal server error',
			}
		}
	})
	.post('/', async (context: Context) => {
		const {
			careInstructions,
			description,
			imageUrl,
			name,
			type,
		} = await context.request.body().value

		const result = await createPlantsCommand.execute({
			careInstructions,
			description,
			imageUrl,
			name,
			type,
		})

		if (isRight(result)) {
			context.response.status = Status.Created
			context.response.body = {
				careInstructions: result.value?.plant.careInstructions,
				description: result.value?.plant.description,
				imageUrl: result.value?.plant.imageUrl,
				name: result.value?.plant.name,
				type: result.value?.plant.type,
			}
		} else {
			context.response.status = Status.InternalServerError
			context.response.body = {
				error: 'Internal server error',
			}
		}
	})

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
