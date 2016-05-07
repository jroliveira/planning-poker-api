chai = require 'chai'
expect = chai.expect
chai.should()

Room = require './room'

describe 'Room', ->
  room = {}

  beforeEach ->
    room = new Room.default 'test'
    room.addUser 23, 'junior'

  describe 'when create new instance', ->
    it 'should set name', ->
      new Room.default('test').name.should.equal 'test'

  describe 'when add/get user', ->
    user = {}

    beforeEach ->
      user = room.getUser 23

    it 'should user id equal to 23', ->
      user.id.should.equal 23

    it 'should user name equal to "junior"', ->
      user.name.should.equal 'junior'

    it 'should user room equal to "test"', ->
      user.room.should.equal 'test'

  describe 'when remove user', ->
    user = {}

    beforeEach ->
      room.removeUser 23
      user = room.getUser 23

    it 'should return undefined', ->
      expect(user).to.be.undefined
