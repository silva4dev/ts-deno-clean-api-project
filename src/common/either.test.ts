import { assertEquals } from 'https://deno.land/std@0.200.0/assert/mod.ts'
import { describe, it } from 'https://deno.land/std@0.204.0/testing/bdd.ts'
import { Either, left, right } from './either.ts'

function doSomething(shouldSuccess: boolean): Either<string, number> {
	if (shouldSuccess) {
		return right(10)
	} else {
		return left('error')
	}
}

describe('Either', () => {
	it('success result', () => {
		const result = doSomething(true)

		assertEquals(result.isLeft(), false)
		assertEquals(result.isRight(), true)
	})

	it('error result', () => {
		const result = doSomething(false)

		assertEquals(result.isLeft(), true)
		assertEquals(result.isRight(), false)
	})
})
