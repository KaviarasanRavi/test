/// <reference types ="cypress"/>
import { testurl, ValidEstimated, ValidFirstName, ValidLastName, ValidMobileNumber, ValidNameOfInstitution, ValidWorkEmail } from '../../../Investorformconfig';
import BridgeUpInvestorsFormPage from'../BridgeupHomeUIpageObjects/BridgeupInvestorSignupFormPageObj'
describe('BridgeUp- UI- BridgeUpInvestorSignUpFormPage- Test Suite', () => {
    beforeEach(function  (){
        cy.visit(testurl);            
    })

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
                                                                                                                             
    it(`Test 002:Bridgeup-UI-BridgeUpInvestorSignUpFormPage-Positive`, () => {                       
        BridgeUpInvestorsFormPage.verifyDefaultLookingForSupport();
        BridgeUpInvestorsFormPage.verifyDefaultTextFirstname();
        BridgeUpInvestorsFormPage.verifyDefaultTextLastname();
        BridgeUpInvestorsFormPage.verifyDefaultTextMobilenumber();
        BridgeUpInvestorsFormPage.verifyDefaultTextNameOfInstitution();
        BridgeUpInvestorsFormPage.verifyDefaultTextWorkEmail();
        BridgeUpInvestorsFormPage.verifyDefaultTextDiversify();                            
        BridgeUpInvestorsFormPage.FirstName(ValidFirstName);                           
        BridgeUpInvestorsFormPage.LastName(ValidLastName);                    
        BridgeUpInvestorsFormPage.MobileNumber(ValidMobileNumber);               
        BridgeUpInvestorsFormPage.NameOfInstitution(ValidNameOfInstitution);                 
        BridgeUpInvestorsFormPage.Estimated(ValidEstimated);                       
        BridgeUpInvestorsFormPage.WorkEmail(ValidWorkEmail);                 
        BridgeUpInvestorsFormPage.ClickSubmit();                        
        BridgeUpInvestorsFormPage.verifyinvestorformsignedup();           
    })                   
                                   
})                                                                                                 