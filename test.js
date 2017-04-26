"use strict";

let expect = require('expect')
const Phone = require('./Phone');
const phone = new Phone()

/*Repos	TimeOut	Repos	No
Repos	CorRaccroche	Repos	No
Repos	CorDecroche	Repos	No
Repos	Numéroter	Repos	No
Repos	Raccrocher	Repos	No
Repos	Decrocher	Décroché	Yes
Repos	Appel Entrant	Sonnerie	Yes*/

describe('Repos', () => {
  it('Timeout should not change the state', () => {
    phone.state = 'Repos'
    phone.Timeout()
    expect(phone.state).toEqual('Repos')
  })
  it('CorRaccroche should not change the state', () => {
    phone.state = 'Repos'
    phone.CorRaccroche()
    expect(phone.state).toEqual("Repos")
  })
  it('CorDecroche should not change the state', () => {
    phone.state = 'Repos'
    phone.CorDecroche()
    expect(phone.state).toEqual("Repos")
  })
  it('Numéroter should not change the state', () => {
    phone.state = 'Repos'
    phone.Numeroter()
    expect(phone.state).toEqual("Repos")
  })
  it('Raccrocher should not change the state', () => {
    phone.state = 'Repos'
    phone.Raccrocher()
    expect(phone.state).toEqual("Repos")    
  })
  it('Decrocher should change the state to Décroché', () => {
    phone.state = 'Repos'
    phone.Decrocher()
    expect(phone.state).toEqual("Décroché")    
  })
  it('AppelEntrant should change the state to Sonnerie', () => {
    phone.state = 'Repos'
    phone.AppelEntrant()
    expect(phone.state).toEqual("Sonnerie")    
  })
})

/*Sonnerie	TimeOut	Repos	Yes
Sonnerie	CorRaccroche	Repos	Yes
Sonnerie	CorDecroche	Sonnerie	No
Sonnerie	Numéroter	Sonnerie	No
Sonnerie	Raccrocher	Sonnerie	No
Sonnerie	Decrocher	EnConversation	Yes
Sonnerie	phoneel Entrant	Sonnerie	No*/

describe('Sonnerie', () => {
  it('Timeout should change the state to Repos', () => {
    phone.state = ('Sonnerie')
    phone.Timeout()
    expect(phone.state).toEqual("Repos")    
  })
  it('CorRaccroche should change the state to Repos', () => {
    phone.state = ('Sonnerie')
    phone.CorRaccroche()
    expect(phone.state).toEqual("Repos")    
  })
  it('CorDecroche should not change the state', () => {
    phone.state = ('Sonnerie')
    phone.CorDecroche()
    expect(phone.state).toEqual("Sonnerie")    
  })
  it('Numéroter should not change the state', () => {
    phone.state = ('Sonnerie')
    phone.Numeroter()
    expect(phone.state).toEqual("Sonnerie")    
  })
  it('Raccrocher should not change the state', () => {
    phone.state = ('Sonnerie')
    phone.Raccrocher()
    expect(phone.state).toEqual("Sonnerie")    
  })
  it('Decrocher should change the state to EnConversation', () => {
    phone.state = ('Sonnerie')
    phone.Decrocher()
    expect(phone.state).toEqual("EnConversation")    
  })
  it('AppelEntrant should not change the state', () => {
    phone.state = ('Sonnerie')
    phone.AppelEntrant()
    expect(phone.state).toEqual("Sonnerie")    
  })
})

/*EnConversation	TimeOut	EnConversation	No
EnConversation	CorRaccroche	Repos	Yes
EnConversation	CorDecroche	EnConversation	No
EnConversation	Numéroter	EnConversation	No
EnConversation	Raccrocher	Repos	Yes
EnConversation	Decrocher	EnConversation	No
EnConversation	phoneel Entrant	EnConversation	No*/

describe('EnConversation', () => {
  phone.state = "EnConversation"
  it('Timeout should not change the state', () => {
    phone.state = ('EnConversation')
    phone.Timeout()
    expect(phone.state).toEqual("EnConversation")    
  })
  it('CorRaccroche should change the state to Repos', () => {
    phone.state = ('EnConversation')
    phone.CorRaccroche()
    expect(phone.state).toEqual("Repos")    
  })
  it('CorDecroche should not change the state', () => {
    phone.state = ('EnConversation')
    phone.CorDecroche()
    expect(phone.state).toEqual("EnConversation")    
  })
  it('Numéroter should not change the state', () => {
    phone.state = ('EnConversation')
    phone.Numeroter()
    expect(phone.state).toEqual("EnConversation")    
  })
  it('Raccrocher should change the state to Repos', () => {
    phone.state = ('EnConversation')
    console.log('plouf')
    phone.Raccrocher()
    expect(phone.state).toEqual("Repos")    
  })
  it('Decrocher should not change the state', () => {
    phone.state = ('EnConversation')
    phone.Decrocher()
    expect(phone.state).toEqual("EnConversation")    
  })
  it('AppelEntrant should not change the state', () => {
    phone.state = ('EnConversation')
    phone.AppelEntrant()
    expect(phone.state).toEqual("EnConversation")    
  })
})

/*EnAppel	TimeOut	Décroché	Yes
EnAppel	CorRaccroche	EnAppel	No
EnAppel	CorDecroche	EnConversation	Yes
EnAppel	Numéroter	EnAppel	No
EnAppel	Raccrocher	Repos	Yes
EnAppel	Decrocher	EnAppel	No
EnAppel	phoneel Entrant	EnAppel	No*/

describe('EnAppel', () => {
  phone.state = "EnAppel"
  it('Timeout should change the state to Décroché', () => {
    phone.state = ('EnAppel')
    phone.Timeout()
    expect(phone.state).toEqual("Décroché")    
  })
  it('CorRaccroche should not change the state', () => {
    phone.state = ('EnAppel')
    phone.CorRaccroche()
    expect(phone.state).toEqual("EnAppel")    
  })
  it('CorDecroche should change the state to EnConversation', () => {
    phone.state = ('EnAppel')
    phone.CorDecroche()
    expect(phone.state).toEqual("EnConversation")    
  })
  it('Numéroter should not change the state', () => {
    phone.state = ('EnAppel')
    phone.Numeroter()
    expect(phone.state).toEqual("EnAppel")    
  })
  it('Raccrocher should change the state to Repos', () => {
    phone.state = ('EnAppel')
    phone.Raccrocher()
    expect(phone.state).toEqual("Repos")    
  })
  it('Decrocher should not change the state', () => {
    phone.state = ('EnAppel')
    phone.Decrocher()
    expect(phone.state).toEqual("EnAppel")    
  })
  it('AppelEntrant should not change the state', () => {
    phone.state = ('EnAppel')
    phone.AppelEntrant()
    expect(phone.state).toEqual("EnAppel")    
  })
})

/*Décroché	TimeOut	Décroché	No
Décroché	CorRaccroche	Décroché	No
Décroché	CorDecroche	Décroché	No
Décroché	Numéroter	EnAppel	Yes
Décroché	Raccrocher	Repos	Yes
Décroché	Decrocher	Décroché	No
Décroché	phoneel Entrant	Décroché	No*/

describe('Décroché', () => {
  phone.state = "Décroché"
  it('Timeout should not change the state', () => {
    phone.Timeout()
    expect(phone.state).toEqual("Décroché")
    phone.state = ('Décroché')
  })
  it('CorRaccroche should not change the state', () => {
    phone.CorRaccroche()
    expect(phone.state).toEqual("Décroché")
    phone.state = ('Décroché')
  })
  it('CorDecroche should not change the state', () => {
    phone.CorDecroche()
    expect(phone.state).toEqual("Décroché")
    phone.state = ('Décroché')
  })
  it('Numéroter should change the state to EnAppel', () => {
    phone.Numeroter()
    expect(phone.state).toEqual("EnAppel")
    phone.state = ('Décroché')
  })
  it('Raccrocher should change the state to Repos', () => {
    phone.Raccrocher()
    expect(phone.state).toEqual("Repos")
    phone.state = ('Décroché')
  })
  it('Decrocher should not change the state', () => {
    phone.Decrocher()
    expect(phone.state).toEqual("Décroché")
    phone.state = ('Décroché')
  })
  it('AppelEntrant should not change the state', () => {
    phone.AppelEntrant()
    expect(phone.state).toEqual("Décroché")
    phone.state = ('Décroché')
  })
})





