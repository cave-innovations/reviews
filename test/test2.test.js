const {multiply} = require('./math')

describe('testing jest with algebra', () => {
  it('multiplies 2*2 to equal 4', () => {
      expect(multiply(2,2)).toBe(4)
  })
})

