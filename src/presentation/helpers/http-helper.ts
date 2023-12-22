import { HttpResponse } from '@/src/presentation/protocols/http.ts'

export const ok = (data: any): HttpResponse => ({
	statusCode: 200,
	body: data,
})
