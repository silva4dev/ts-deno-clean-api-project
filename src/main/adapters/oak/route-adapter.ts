import { Controller, HttpRequest } from '@/src/presentation/protocols/index.ts'
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
