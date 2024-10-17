import assert from 'assert'
import { describe, it } from 'mocha'
import { fizzBuzz } from './008.js'

describe('FizzBuzz Function Tests', () => {
  it('should return "fizzbuzz" for numbers divisible by both 3 and 5', () => {
    assert.strictEqual(
      fizzBuzz(15),
      'fizzbuzz',
      '15 is divisible by both 3 and 5'
    )
    assert.strictEqual(
      fizzBuzz(30),
      'fizzbuzz',
      '30 is divisible by both 3 and 5'
    )
  })

  it('should return "fizz" for numbers divisible by 3 only', () => {
    assert.strictEqual(fizzBuzz(3), 'fizz', '3 is divisible by 3')
    assert.strictEqual(fizzBuzz(9), 'fizz', '9 is divisible by 3')
  })

  it('should return "buzz" for numbers divisible by 5 only', () => {
    assert.strictEqual(fizzBuzz(5), 'buzz', '5 is divisible by 5')
    assert.strictEqual(fizzBuzz(20), 'buzz', '20 is divisible by 5')
  })

  it('should return an empty string for numbers not divisible by 3 or 5', () => {
    assert.strictEqual(fizzBuzz(1), '', '1 is not divisible by 3 or 5')
    assert.strictEqual(fizzBuzz(8), '', '8 is not divisible by 3 or 5')
  })
})
