import { HttpRequest } from '@/src/presentation/protocols/http.ts'
import { Controller } from '@/src/presentation/protocols/controller.ts'
import { Context } from '@/deps.ts'

export const adaptRoute = (controller: Controller) => {
	return async (context: Context) => {
		const httpRequest: HttpRequest = {
			body: context.request.body().value,
		}
		const httpResponse = await controller.handle(httpRequest)
		context.response.status = httpResponse.statusCode
		context.response.body = httpResponse.body
	}
}
