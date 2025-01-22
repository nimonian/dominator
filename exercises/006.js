// TODO: https://tech-docs.corndel.com/js/conditional-statements.html

/**
 * Calculates the tax band for a given income.
 *
 * - 'high' if the income is greater than or equal to 50,000
 * - 'medium' if the income is greater than or equal to 20,000 but less than 50,000
 * - 'low' if the income is less than 20,000
 *
 * @param {number} income The income.
 * @returns {string} The tax band.
 */
export function taxBand(income) {
  let taxBand = null
 if (income >= 50000) {
  taxBand = 'high'
 } else if (income >= 20000 && income < 50000) {
  taxBand = 'medium'
 } else {
  taxBand = 'low'
 }

  // TODO: Use if statements to update taxBand with the correct string

  return taxBand
}
