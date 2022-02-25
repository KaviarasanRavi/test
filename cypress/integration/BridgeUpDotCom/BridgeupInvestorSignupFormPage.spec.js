/// <reference types ="cypress"/>
import BridgeUpInvestorsFormPage from'../BridgeUpDotCom/BridgeUpDotComPageObj/BridgeupInvestorSignupFormPageObj'
import { investorformtesturl, ValidEstimated, ValidFirstName, ValidLastName, ValidMobileNumber, ValidNameOfInstitution, ValidWorkEmail } from './BridgeUpDotComConfig/Investorformconfig';
describe('BridgeUp- UI- BridgeUpInvestorSignUpFormPage- Test Suite', () => {
    before(function  (){
        cy.visit(investorformtesturl);            
    })

    const uuid = () => Cypress._.random(0, 1000)
    // it(`Test 001:Bridgeup-UI-BridgeUpInvestorSignUpFormPage-Negative`, () => {
    //     BridgeUpInvestorsFormPage.verifyDefaultTextDiversify(); 
    //     BridgeUpInvestorsFormPage.FirstName('automation');                   
    //     BridgeUpInvestorsFormPage.LastName('Testing');                             
    //     BridgeUpInvestorsFormPage.MobileNumber('ascsds#$%^&*()');                                                
    //     BridgeUpInvestorsFormPage.NameOfInstitution('TrackDfect')                 
    //     BridgeUpInvestorsFormPage.Estimated('100-300Cr');                          
    //     BridgeUpInvestorsFormPage.WorkEmail('prabhakaran.s@trackdfect.com');          
    //     BridgeUpInvestorsFormPage.ClickSubmit();                  
    //     BridgeUpInvestorsFormPage.verifyinvestorformNotsignedup();             
    // })                                       
                                                                                                                             
        it(`Test 001:BridgeUpdotcom-InvestorSignUpFormPage-Default-Text-LookingForSupport-Verification `, () => {                    
        BridgeUpInvestorsFormPage.verifyDefaultLookingForSupport();
    }) 
        it(`Test 002:BridgeUpdotcom-InvestorSignUpFormPage-Default-Text-Firstname-Verification `, () => {
        BridgeUpInvestorsFormPage.verifyDefaultTextFirstname();
    })     
        it(`Test 003:BridgeUpdotcom-InvestorSignUpFormPage-Default-Text-Firstname-Verification `, () => {
        BridgeUpInvestorsFormPage.verifyDefaultTextLastname();
    })     
        it(`Test 004:BridgeUpdotcom-InvestorSignUpFormPage-Default-Text-Lastname-Verification `, () => {
        BridgeUpInvestorsFormPage.verifyDefaultTextMobilenumber();
    }) 
        it(`Test 005:BridgeUpdotcom-InvestorSignUpFormPage-Default-Text-NameOfInstitution-Verification `, () => {
        BridgeUpInvestorsFormPage.verifyDefaultTextNameOfInstitution();
    }) 
        it(`Test 006:BridgeUpdotcom-InvestorSignUpFormPage-Default-Text-WorkEmail-Verification `, () => {
        BridgeUpInvestorsFormPage.verifyDefaultTextWorkEmail();
    }) 
        it(`Test 007:BridgeUpdotcom-InvestorSignUpFormPage-Default-Text-Diversify-Verification `, () => {
        BridgeUpInvestorsFormPage.verifyDefaultTextDiversify();
    }) 
        it(`Test 008:BridgeUpdotcom-InvestorSignUpFormPage-Investors-SignUp-Form-positive `, () => {                            
        BridgeUpInvestorsFormPage.typeFirstName(ValidFirstName+uuid);                           
        BridgeUpInvestorsFormPage.typeLastName(ValidLastName);                    
        BridgeUpInvestorsFormPage.typeMobileNumber(ValidMobileNumber);               
        BridgeUpInvestorsFormPage.typeNameOfInstitution(ValidNameOfInstitution);                 
        BridgeUpInvestorsFormPage.typeEstimated(ValidEstimated);                       
        BridgeUpInvestorsFormPage.typeWorkEmail(ValidWorkEmail);                 
        BridgeUpInvestorsFormPage.ClickSubmit();                        
        BridgeUpInvestorsFormPage.verifyinvestorformsignedup();           
    })                   
                                   
})                                                                                                 