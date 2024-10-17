import assert from 'assert'
import { describe, it } from 'mocha'
import { rockPaperScissors } from './009.js'

describe('Rock-Paper-Scissors Tests', () => {
  it('should return "tie" when both players choose the same', () => {
    assert.strictEqual(
      rockPaperScissors('rock', 'rock'),
      'tie',
      'Both chose rock'
    )
    assert.strictEqual(
      rockPaperScissors('paper', 'paper'),
      'tie',
      'Both chose paper'
    )
    assert.strictEqual(
      rockPaperScissors('scissors', 'scissors'),
      'tie',
      'Both chose scissors'
    )
  })

  it('should return "player1" when player 1 wins', () => {
    assert.strictEqual(
      rockPaperScissors('rock', 'scissors'),
      'player1',
      'Rock beats scissors'
    )
    assert.strictEqual(
      rockPaperScissors('scissors', 'paper'),
      'player1',
      'Scissors beat paper'
    )
    assert.strictEqual(
      rockPaperScissors('paper', 'rock'),
      'player1',
      'Paper beats rock'
    )
  })

  it('should return "player2" when player 2 wins', () => {
    assert.strictEqual(
      rockPaperScissors('scissors', 'rock'),
      'player2',
      'Rock beats scissors'
    )
    assert.strictEqual(
      rockPaperScissors('paper', 'scissors'),
      'player2',
      'Scissors beat paper'
    )
    assert.strictEqual(
      rockPaperScissors('rock', 'paper'),
      'player2',
      'Paper beats rock'
    )
  })
})
