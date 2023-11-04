import { assertEquals, describe, it } from '@/deps.ts'
import { Either, isLeft, isRight, Left, Right } from '@/src/common/either.ts'

function doSomething(shouldSuccess: boolean): Either<string, number> {
	if (shouldSuccess) {
		return Right(10)
	} else {
		return Left('error')
	}
}

describe('Either', () => {
	it('Should success result', () => {
		const result = doSomething(true)

		assertEquals(isLeft(result), false)
		assertEquals(isRight(result), true)
	})

	it('Should error result', () => {
		const result = doSomething(false)

		assertEquals(isLeft(result), true)
		assertEquals(isRight(result), false)
	})
})
