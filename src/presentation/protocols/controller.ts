import {
	HttpRequest,
	HttpResponse,
} from '@/src/presentation/protocols/index.ts'

export interface Controller {
	handle: (httpRequest: HttpRequest) => Promise<HttpResponse>
}
