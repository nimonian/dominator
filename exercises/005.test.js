import assert from 'assert'
import { describe, it } from 'mocha'
import { rollercoaster } from './005.js'

describe('Rollercoaster Permission Tests', () => {
  it('should allow a person who is 12 or older and taller than 150 cm to ride', () => {
    assert.strictEqual(
      rollercoaster(12, 151),
      true,
      '12 years old and 151 cm should be allowed to ride'
    )
    assert.strictEqual(
      rollercoaster(13, 160),
      true,
      '13 years old and 160 cm should be allowed to ride'
    )
  })

  it('should not allow a person who is under 12 to ride, even if they are tall enough', () => {
    assert.strictEqual(
      rollercoaster(11, 160),
      false,
      '11 years old and 160 cm should not be allowed to ride'
    )
  })

  it('should not allow a person who is 12 or older but 150 cm or shorter to ride', () => {
    assert.strictEqual(
      rollercoaster(12, 150),
      false,
      '12 years old and 150 cm should not be allowed to ride'
    )
    assert.strictEqual(
      rollercoaster(14, 150),
      false,
      '14 years old and 150 cm should not be allowed to ride'
    )
  })

  it('should not allow a person who is under 12 and shorter than 150 cm to ride', () => {
    assert.strictEqual(
      rollercoaster(10, 140),
      false,
      '10 years old and 140 cm should not be allowed to ride'
    )
  })
})
