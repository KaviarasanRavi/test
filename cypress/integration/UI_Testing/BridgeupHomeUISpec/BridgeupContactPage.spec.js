/// <reference types ="cypress"/>
import { testurl, ValidMail, Validmessage, ValidName, ValidPhonenumber, Validsubject } from '../../../Contactpageconfig';
import BridgeUpContactPage from'../BridgeupHomeUIpageObjects/BridgeupContactPageObj'
describe('BridgeUp- UI- ContactPage- Test Suite', () => {
    beforeEach(function  (){
        cy.visit(testurl);

    })
    // it(`Test 001: Bridgeup-UI-ContactPage-Negative`, () => {  
    //     BridgeUpContactPage.verifyDefaultTextContactUs();
    //     BridgeUpContactPage.verifyDefaultMobileNum();
    //     BridgeUpContactPage.verifyDefaultEmail();
    //     BridgeUpContactPage.verifyDefaultTitleHeadOffice();
    //     BridgeUpContactPage.verifyDefaultAddress();
    //     BridgeUpContactPage.verifyDefaultLookingForSupport();
    //     BridgeUpContactPage.verifyDefaultTitleSendUsAMessage();
    //     BridgeUpContactPage.Name();
    //     BridgeUpContactPage.Email();
    //     BridgeUpContactPage.Phone('dhhdt(*&^%');
    //     BridgeUpContactPage.Subject('testing');
    //     BridgeUpContactPage.Message('BridgeUp contact')
    //     BridgeUpContactPage.ClickSubmit();
    //     BridgeUpContactPage.verifyFormSubmitted();

    // })
    it(`Test 002: Bridgeup-UI-ContactPage-positive`, () => {  
        BridgeUpContactPage.verifyDefaultTextContactUs();
        BridgeUpContactPage.verifyDefaultMobileNum();
        BridgeUpContactPage.verifyDefaultEmail();
        BridgeUpContactPage.verifyDefaultTitleHeadOffice();
        BridgeUpContactPage.verifyDefaultAddress();
        BridgeUpContactPage.verifyDefaultLookingForSupport();
        BridgeUpContactPage.verifyDefaultTitleSendUsAMessage();
        BridgeUpContactPage.Name(ValidName);
        BridgeUpContactPage.Email(ValidMail);
        BridgeUpContactPage.Phone(ValidPhonenumber);
        BridgeUpContactPage.Subject(Validsubject);
        BridgeUpContactPage.Message(Validmessage)
        BridgeUpContactPage.ClickSubmit();
        BridgeUpContactPage.verifyFormSubmitted();

    })

    
})