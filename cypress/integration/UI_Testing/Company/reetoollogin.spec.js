/// <reference types ="cypress"/>
import RetoolLogin from '../BridgeUpUIPageObjects/RetoolLoginObj'
describe('Bridgeup signuppage',()=>{
    before(function(){
        cy.clearLocalStorage()
        cy.clearCookies()
        cy.visit('https://bridgeup.retool.com/apps/OPSApp')
    })
it('test 001',()=>{
    const retool = new RetoolLogin()
       retool.EnterEmail('retool@bridgeup.com')
       retool.EnterPassword(' jsNLSSGlBpt4ZbdVlp4=')
       retool.ClickLogin()
    })
    
})