let expect = require('expect')
let app = require('./app')


/*describe('Addition',function(){
  it('should return a number',function(){
    expect(app.Addition(3,5)).toBeA('number')

  })
  it('should return a number greater than 4',function(){
    expect(app.Addition(3,4)).toBeGreaterThan(0)
  })
  it('should return 7 when passed 3 and 4',function(){
    expect(app.Addition(3,4)).toBe(7)
  })
})*/

describe('Client Normal', () => {
  describe('encours < 1000',() =>{
    it ('should return true',function(){
      expect(app.Accepte({ type: "N", encours: 500 }, 60000)).toBe(true)
    })
  })
  describe('1000 < encours < 3000', () => {
    describe('commande > 5000', () => {
      it('should return false', () => {
        expect(app.Accepte({ type: "N", encours: 2000 }, 6000)).toBe(false)
      })
    })
    describe('commande < 5000', () => {
      it('should return true', () => {
        expect(app.Accepte({ type: "N", encours: 2000 }, 3000)).toBe(true)
      })
    })
  })
  describe('3000 < encours', () => {
    describe('commande > 1000', () => {
      it('should return false', () => {
        expect(app.Accepte({ type: "N", encours: 4000 }, 6000)).toBe(false)
      })
    })
    describe('commande < 1000', () => {
      it('should return true', () => {
        expect(app.Accepte({ type: "N", encours: 4000 }, 500)).toBe(true)
      })
    })
  })
})


describe('Client Premium', () => {
  describe('encours > 3000', () => {
    describe('commande > 5000', () => {
      it('should return a boolean', () => {
        expect(app.Accepte({ type: "P", encours: 4000 }, 6000)).toBeA('boolean')
      })
      it('should return false', () => {
        expect(app.Accepte({ type: "P", encours: 4000 }, 6000)).toBe(false)
      })
    })
    describe('commande < 5000', () => {
      it('should return true', () => {
        expect(app.Accepte({ type: "P", encours: 2000 }, 3000)).toBe(true)
      })
    })
  })
  describe('encours < 3000', () => {
    describe('commande > 5000', () => {
      it('should return false', () => {
        expect(app.Accepte({ type: "P", encours: 2000 }, 6000)).toBe(true)
      })
    })
    describe('commande < 5000', () => {
      it('should return true', () => {
        expect(app.Accepte({ type: "P", encours: 2000 }, 500)).toBe(true)
      })
    })
  })
})









