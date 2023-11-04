import { assertEquals, describe, it } from '@/deps.ts'
import { Either, left, right } from '@/src/common/either.ts'

function doSomething(shouldSuccess: boolean): Either<string, number> {
	if (shouldSuccess) {
		return right(10)
	} else {
		return left('error')
	}
}

describe('Either', () => {
	it('Should success result', () => {
		const result = doSomething(true)

		assertEquals(result.isLeft(), false)
		assertEquals(result.isRight(), true)
	})

	it('Should error result', () => {
		const result = doSomething(false)

		assertEquals(result.isLeft(), true)
		assertEquals(result.isRight(), false)
	})
})
