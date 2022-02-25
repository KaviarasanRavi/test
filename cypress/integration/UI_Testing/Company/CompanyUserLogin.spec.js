/// <reference types ="cypress"/>

import { Authid, hasuraid, loginTestUrl, ValidPassword, ValidUserid } from '../../../loginconfig';
import Loginpage from '../BridgeUpUIPageObjects/LoginPageObj'
/*
AUTHOR: TrackDfect
CompanyUserLogin Scenario
steps to run the code 
1.In package.json you have to change the path of the Script according to the script you are running
  for example :  "cypress run --spec 'cypress/integration/UI_Testing/Company/CompanyUserLogin.spec.js --headed"'
2.for getting html report you have to use "npm run test" command
3.no changes needed in userid
*/
describe('Company- UI- LoginPage- Test Suite', () => {
    beforeEach(function(){
        cy.intercept({hostname: Authid}).as('auth');
        cy.intercept({hostname: hasuraid}).as('hasura');
        cy.visit(loginTestUrl);
    })
    it(`Test 001:Company - UI - Loginpage - Default text Display - Testcase-Negative`, () => {  
    Loginpage.VerifyDefaultTextLogin()
    Loginpage.VerifyDefaultTextWelcomeBack()
    Loginpage.VerifyDefaultTextSlogan()
    Loginpage.VerifyDefaultTextAccountyet()
    Loginpage.VerifyDefaultTextForgetpassword()    
   
    })
    it(`Test 002:Company - UI - Loginpage - Login with invalid email - Testcase-Negative`, () => {  
        Loginpage.EnterEmail('1213@abc@td.com')
        Loginpage.EnterPassword(ValidPassword)
        Loginpage.ClickLogin()
        Loginpage.VerifyInvalidLoginMsg()    
       
    })

    it(`Test 003:Company - UI - Loginpage - Login with invalid Password - Testcase-Negative`, () => {
            Loginpage.EnterEmail(ValidUserid)
            Loginpage.EnterPassword('Invalid')
            Loginpage.ClickLogin()
            Loginpage.VerifyInvalidLoginMsg()     
    })
    
    it(`Test 004:Company - UI - Loginpage - Login with invalid Email & Password - Testcase-Negative`, () => {
        
                Loginpage.EnterEmail('Prabhakaran@121@bridgeup.com')
                Loginpage.EnterPassword('Invalid')
                Loginpage.ClickLogin()
                Loginpage.VerifyInvalidLoginMsg() 
                
    })
    it(`Test 005:Company - UI - Loginpage - Login with Empty Email & Password - Testcase-Negative`, () => {
        Loginpage.ClickLogin()
        Loginpage.VerifyInvalidEmailMSg() 
        
    })
    it(`Test 006:Company - UI - Loginpage - Login with BlankSpace Email & Password - Testcase-Negative`, () => {
        
        Loginpage.EnterEmail('          ')
        Loginpage.EnterPassword('          ')
        Loginpage.ClickLogin()
        Loginpage.VerifyInvalidLoginMsg(); 
    })

    it(`Test 007:Company - UI - Loginpage - Login with Emailwithout@ - Testcase-Negative`, () => {
        
        Loginpage.EnterEmail('prabha.karan.com')
        Loginpage.EnterPassword(ValidPassword)
        Loginpage.ClickLogin()
        Loginpage.VerifyInvalidLoginMsg()
    })
    it(`Test 008:Company - UI - Loginpage - Login with EmailwithoutDot - Testcase-Negative`, () => {
        
        Loginpage.EnterEmail('prabha@karan@bridgeup@com')
        Loginpage.EnterPassword(ValidPassword)
        Loginpage.ClickLogin()
        Loginpage.VerifyInvalidLoginMsg()           
    })
    it(`Test 009:Company - UI - Loginpage - Login with EmailwithLTandGTsymbol - Testcase-Negative`, () => {
        
        Loginpage.EnterEmail('Prabha<karan123@bridgeup.com>')
        Loginpage.EnterPassword(ValidPassword)
        Loginpage.ClickLogin()
        Loginpage.VerifyInvalidLoginMsg()
    })
    it(`Test 010:Company - UI - Loginpage - Login with Passwordwith7char - Testcase-Negative`, () => {
        
        Loginpage.EnterEmail(ValidUserid)
        Loginpage.EnterPassword('Admin@12')
        Loginpage.ClickLogin()
        Loginpage.VerifyInvalidLoginMsg()
    })
    it(`Test 011:Company - UI - Loginpage - Login with PasswordwithoutSPLchar - Testcase-Negative`, () => {
        
        Loginpage.EnterEmail(ValidUserid)
        Loginpage.EnterPassword('Praba123')
        Loginpage.ClickLogin()
        Loginpage.VerifyInvalidLoginMsg()
    })
    it(`Test 012:Company - UI - Loginpage - Login with PasswordwithoutCAPS - Testcase-Negative`, () => {
        
        Loginpage.EnterEmail(ValidUserid)
        Loginpage.EnterPassword('admin123')
        Loginpage.ClickLogin()
        Loginpage.VerifyInvalidLoginMsg()
    })
    it(`Test 013:Company - UI - Loginpage - Login with PasswordwithoutNBR - Testcase-Negative`, () => {
        
        Loginpage.EnterEmail(ValidUserid)
        Loginpage.EnterPassword('prabha@kar')
        Loginpage.ClickLogin()
        Loginpage.VerifyInvalidLoginMsg()
    })
    it(`Test 014:Company - UI - Loginpage - Login with Passwordwithspace9char - Testcase-Negative`, () => {
        
        Loginpage.EnterEmail(ValidUserid)
        Loginpage.EnterPassword('         ')
        Loginpage.ClickLogin()
        Loginpage.VerifyInvalidLoginMsg()
    })
    it(`Test 015:Company - UI - Loginpage - Login with Passwordwithspace9char - Testcase-Negative`, () => {
        
        Loginpage.EnterEmail(ValidUserid)
        Loginpage.EnterPassword('qwerty')
        Loginpage.ClickLogin()
        Loginpage.VerifyInvalidLoginMsg()
    })
    it(`Test 016:Company - UI - Loginpage - Login with valid  - Testcase-positive`, () => {
        
        Loginpage.EnterEmail(ValidUserid)
        Loginpage.EnterPassword(ValidPassword)
        Loginpage.ClickLogin()
        cy.wait('@auth');
        cy.wait('@hasura');
        Loginpage.VerifyValidLoginMsg()
})
});  