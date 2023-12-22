import { Controller } from '@/src/presentation/protocols/controller.ts'
import {
	HttpRequest,
	HttpResponse,
} from '@/src/presentation/protocols/index.ts'
import { ok } from '@/src/presentation/helpers/http-helper.ts'

export class CreatePlantController implements Controller {
	async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
		return ok({ message: 'Hello, World!' })
	}
}
