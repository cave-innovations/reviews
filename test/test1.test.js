const {sum} = require('./math')

describe('testing jest with algebra', () => {
  it('adds 1+2 to equal 3', () => {
      expect(sum(1,2)).toBe(3)
  })
})

