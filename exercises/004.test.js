import assert from 'assert'
import { describe, it } from 'mocha'
import { permissions } from './004.js'

describe('Permissions Tests', () => {
  it('should return true if the user is an admin', () => {
    assert.strictEqual(
      permissions(true, false, false),
      true,
      'Admin should have edit permissions'
    )
  })

  it('should return true if the user is a member and the owner', () => {
    assert.strictEqual(
      permissions(false, true, true),
      true,
      'Member and owner should have edit permissions'
    )
  })

  it('should return false if the user is a member but not the owner', () => {
    assert.strictEqual(
      permissions(false, true, false),
      false,
      'Member but not owner should not have edit permissions'
    )
  })

  it('should return false if the user is not an admin, member, or owner', () => {
    assert.strictEqual(
      permissions(false, false, false),
      false,
      'User with no permissions should not be able to edit'
    )
  })
})
