import assert from 'assert'
import { describe, it } from 'mocha'
import { taxBand } from './006.js'

describe('Tax Band Calculation Tests', () => {
  it('should return "high" for incomes of 50,000 or more', () => {
    assert.strictEqual(
      taxBand(50000),
      'high',
      'Income of 50,000 should return "high"'
    )
    assert.strictEqual(
      taxBand(100000),
      'high',
      'Income of 100,000 should return "high"'
    )
  })

  it('should return "medium" for incomes between 20,000 and 49,999', () => {
    assert.strictEqual(
      taxBand(20000),
      'medium',
      'Income of 20,000 should return "medium"'
    )
    assert.strictEqual(
      taxBand(49999),
      'medium',
      'Income of 49,999 should return "medium"'
    )
  })

  it('should return "low" for incomes less than 20,000', () => {
    assert.strictEqual(
      taxBand(19999),
      'low',
      'Income of 19,999 should return "low"'
    )
    assert.strictEqual(taxBand(0), 'low', 'Income of 0 should return "low"')
  })
})
