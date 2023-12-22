import { HttpResponse } from '@/src/presentation/protocols/index.ts'

export const ok = (data: any): HttpResponse => ({
	statusCode: 200,
	body: data,
})
