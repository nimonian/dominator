import assert from 'assert'
import { describe, it } from 'mocha'
import { increment, decrement } from './002.js'

describe('Increment and Decrement Tests', () => {
  it('should increment the number by 1', () => {
    assert.strictEqual(increment(0), 1, '0 incremented by 1 should be 1')
    assert.strictEqual(increment(10), 11, '10 incremented by 1 should be 11')
    assert.strictEqual(increment(-5), -4, '-5 incremented by 1 should be -4')
  })

  it('should decrement the number by 1', () => {
    assert.strictEqual(decrement(0), -1, '0 decremented by 1 should be -1')
    assert.strictEqual(decrement(10), 9, '10 decremented by 1 should be 9')
    assert.strictEqual(decrement(-5), -6, '-5 decremented by 1 should be -6')
  })
})
