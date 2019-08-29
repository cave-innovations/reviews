const {exponential} = require('./math')


describe('testing jest with algebra', () => {
  it('exponential 2^3 to equl 8', () => {
      expect(exponential(2,3)).toBe(8)
  })
})

