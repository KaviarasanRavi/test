/// <reference types ="cypress"/>
import SignupPage from '../../UI_Testing/BridgeUpUIPageObjects/tempSignupPageObj'
describe('Bridgeup signuppage',()=>{
    before(function(){
        cy.visit('https://app.bridgeup.com/signup')
    })
it('test 001',()=>{
     const sp = new SignupPage()
     const dayjs = require("dayjs")
     const todaysDate = dayjs().format("YYYYMMDDHHmmss");
     const validmailid = 'prabhakaran+'+todaysDate+'@bridgeUp.com'
     cy.log(validmailid);

     sp.EnterCompanyName('BRIDGEUP TECH PRIVATE LIMITED')
     sp.EnterEmail('')
     sp.EnterPassword('Admin@123$')
     sp.ClickContinue()
     sp.EnterFirstName('BRIDGEUP')
     sp.EnterLastName('TESTING')
     sp.EnterDesignation('testing')
     sp.EnterPhonenumber('+916381794677')
     sp.CheckIAccept()
     sp.ClickSignUp()
     cy.wait(30000)
     sp.VerifySignup()
    })
    
})

