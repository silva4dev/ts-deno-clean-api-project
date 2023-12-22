import { HttpRequest, HttpResponse } from '@/src/presentation/protocols/http.ts'

export interface Controller {
	handle: (httpRequest: HttpRequest) => Promise<HttpResponse>
}
