const
  assert = require('assert'),
  expect = require('chai').expect

describe('Promise', () => {
  describe('new', () => {
    it('calls the method on creation', () => {
      const start = Date.now()
      let delta
      new Promise(() => delta = Date.now() - start)

      expect(delta).to.be.closeTo(0, 10)
    })
  })
})