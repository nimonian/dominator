import assert from 'assert'
import { describe, it } from 'mocha'
import { title, logger } from './001.js'

let logOutput
console.log = output => {
  logOutput = output
}

describe('Problem 001 tests', () => {
  it('should have a valid movie title', () => {
    assert.strictEqual(typeof title, 'string', 'Title should be a string')
    assert.notStrictEqual(title, null, 'Title should not be null')
    assert.notStrictEqual(title, '', 'Title should not be an empty string')
  })

  it('should log the movie title', () => {
    logOutput = null
    logger()
    assert.notStrictEqual(logOutput, null, 'Logger should not log null')
    assert.strictEqual(logOutput, title, 'Logger should log the movie title')
  })
})
