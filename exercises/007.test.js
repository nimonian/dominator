import assert from 'assert'
import { describe, it } from 'mocha'
import { main } from './007.js'

describe('Main Function Tests', () => {
  it('should return the product of the values 17, 19, and 23', () => {
    const result = main()
    assert.strictEqual(
      result,
      17 * 19 * 23,
      'The product of 17, 19, and 23 should be returned'
    )
  })

  it('should log the messages in the correct order: "first!", "middle!", "last!"', () => {
    const logs = []

    // Mock console.log to capture the logs
    const originalLog = console.log
    console.log = message => logs.push(message)

    // Execute main
    main()

    // Restore original console.log after test
    console.log = originalLog

    // Assert the logs were called in the correct order
    assert.deepStrictEqual(
      logs,
      ['first!', 'middle!', 'last!'],
      'Logs should be in the order: "first!", "middle!", "last!"'
    )
  })
})
