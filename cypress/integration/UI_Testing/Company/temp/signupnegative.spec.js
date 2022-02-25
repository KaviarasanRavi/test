/// <reference types ="cypress"/>
import SignupPage from '../../BridgeUpUIPageObjects/SignupPageObj'
describe('Bridgeup signuppage',()=>{
    before(function(){
        cy.visit('https://app.devbridgeup.com/signup')
    })
it('test 002',()=>{
    const sp = new SignupPage()
     sp.EnterCompanyName('BRIDGEUP TECH PRIVATE LIMITED')
     sp.EnterEmail('prabhakaran+314@bridgeup.com')
     sp.EnterPassword('Admin@123$')
     sp.ClickContinue()
     sp.VerifyNegativeEmailSignUp()
})
})