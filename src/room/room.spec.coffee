sinon = require 'sinon'
chai = require 'chai'
expect = chai.expect
chai.should()

FakeSocket = require './fake-socket'
Room = require './room'

describe 'Room', ->
  room = {}
  user = {}
  fakeSocket = new FakeSocket.default

  beforeEach ->
    room = new Room.default 'test'
    room.addUser 'junior', fakeSocket
    user = room.users['/#AAA999']

  describe 'when create new instance', ->
    it 'should set name', ->
      room.name.should.equal 'test'

  describe 'when add/get user', ->
    it 'should user id equal to "/#AAA999"', ->
      user.id.should.equal '/#AAA999'

    it 'should user name equal to "junior"', ->
      user.name.should.equal 'junior'

    it 'should user room equal to "test"', ->
      user.room.should.equal 'test'

  describe 'when remove user', ->
    it 'should return undefined', ->
      room.removeUser fakeSocket
      user = room.users['/#AAA999']
      expect(user).to.be.undefined

  describe 'when choose card', ->
    it 'should set points in user', ->
      room.chooseCard 8, fakeSocket
      user = room.users['/#AAA999']
      user.card.points.should.equal 8

  describe 'when clear card', ->
    it 'should set card to null', ->
      room.clearCard fakeSocket
      user = room.users['/#AAA999']
      expect(user.card).to.be.null
