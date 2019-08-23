const {sum} = require('./math')
const {multiply} = require('./math')
const {exponential} = require('./math')


describe('testing jest with algebra', () => {
  test('adds 1+2 to equal 3', () => {
      expect(sum(1,2)).toBe(3)
  })
  test('multiplies 2*2 to equal 4', () => {
      expect(multiply(2,2)).toBe(4)
  })
  test('exponential 2^3 to equl 8', () => {
      expect(exponential(2,3)).toBe(8)
  })
})

