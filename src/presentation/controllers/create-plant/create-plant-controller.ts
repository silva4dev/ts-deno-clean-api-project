import { Controller } from '@/src/presentation/protocols/controller.ts'
import { HttpResponse } from '@/src/presentation/protocols/http.ts'
import { ok } from '@/src/presentation/helpers/http-helper.ts'

export class CreatePlantController implements Controller {
	async handle(): Promise<HttpResponse> {
		return ok({ message: 'Hello, World!' })
	}
}
