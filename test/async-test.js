const
  assert = require('assert'),
  expect = require('chai').expect

class Timer {
  static start() {
    const timer = new Timer()
    timer.start()

    return timer
  }

  start() {
    this.start = Date.now()
  }

  stop() {
    if (this.start) {
      this.finish = Date.now()
    }
  }

  get delta() {
    if (this.start && this.finish) {
      return this.finish - this.start
    }
  }
}

describe('await', () => {
  it('waits for promise completion', async () => {
    const timer = Timer.start()

    await new Promise(resolve => setTimeout(() => {
      timer.stop()
      resolve()
    }, 30))

    expect(timer.delta).to.be.at.closeTo(30, 10)
  })
})

describe('async', () => {
  it('returns a promise', async () => {
    const asyncFunction = async () => 10
    const response = await asyncFunction()

    expect(asyncFunction()).to.be.a('Promise')
    expect(response).to.be.equal(10)
  })
})