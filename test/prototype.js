describe('Prototyping', () => {
  it('', () => {
    const Square = function(side) {
      this.side = side
    }

    expect(Square.prototype).to.be.a('')
  })
})