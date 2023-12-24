import { Application, Router } from '@/deps.ts'
import plantRouter from '@/src/main/routes/plant-routes.ts'

const app = new Application()
const router = new Router()

app.use(plantRouter.routes())
app.use(router.routes())
app.use(router.allowedMethods())

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

const port = 3333
app.listen({ port })
