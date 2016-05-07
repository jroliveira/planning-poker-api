chai = require 'chai'
chai.should()

Card = require './card'

describe 'Card', ->
  describe 'when create new instance', ->
    it 'should set points', ->
      new Card.default(8).points.should.equal 8
