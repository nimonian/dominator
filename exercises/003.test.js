import assert from 'assert'
import { describe, it } from 'mocha'
import { title, year, isOld } from './003.js'

describe('Favourite Book Tests', () => {
  it('should have a valid title', () => {
    assert.strictEqual(typeof title, 'string', 'Title should be a string')
    assert.notStrictEqual(title, null, 'Title should not be null')
    assert.notStrictEqual(title, '', 'Title should not be an empty string')
  })

  it('should have a valid release year', () => {
    assert.strictEqual(typeof year, 'number', 'Year should be a number')
    assert.strictEqual(
      Number.isInteger(year),
      true,
      'Year should be an integer'
    )
    assert.notStrictEqual(year, null, 'Year should not be null')
  })

  it('should correctly identify if the book was released before 2000', () => {
    assert.strictEqual(typeof isOld, 'boolean', 'isOld should be a boolean')
    if (year !== null) {
      assert.strictEqual(
        isOld,
        year < 2000,
        `isOld should be ${year < 2000} for the given year ${year}`
      )
    }
  })
})
