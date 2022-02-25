/// <reference types ="cypress"/>

import BridgeUpContactPage from'../BridgeUpDotCom/BridgeUpDotComPageObj/BridgeupContactPageObj'
import { Contacttesturl, ValidMail, Validmessage, ValidName, ValidPhonenumber, Validsubject } from './BridgeUpDotComConfig/Contactpageconfig';
describe('BridgeUp- UI- ContactPage- Test Suite', () => {
    before(function  (){
        cy.visit(Contacttesturl);
    })
    
    // it(`Test 001: Bridgeup-UI-ContactPage-Negative`, () => {  
    //     BridgeUpContactPage.verifyDefaultTextContactUs();
    //     BridgeUpContactPage.verifyDefaultMobileNum();
    //     BridgeUpContactPage.verifyDefaultEmail();
    //     BridgeUpContactPage.verifyDefaultTitleHeadOffice();
    //     BridgeUpContactPage.verifyDefaultAddress();
    //     BridgeUpContactPage.verifyDefaultLookingForSupport();
    //     BridgeUpContactPage.verifyDefaultTitleSendUsAMessage();
    //     BridgeUpContactPage.TypeName();
    //     BridgeUpContactPage.TypeEmail();
    //     BridgeUpContactPage.TypePhone('dhhdt(*&^%');
    //     BridgeUpContactPage.TypeSubject('testing');
    //     BridgeUpContactPage.TypeMessage('BridgeUp contact')
    //     BridgeUpContactPage.ClickSubmit();
    //     BridgeUpContactPage.verifyFormSubmitted();
    // })

    it(`Test 001:BridgeUpdotcom-ContactPage-Default-Text-ContactUS-Verification`, () => {   
        BridgeUpContactPage.verifyDefaultTextContactUs();
    })
    it(`Test 002:BridgeUpdotcom-ContactPage-Default-MobileNum-Verification`, () => {
        BridgeUpContactPage.verifyDefaultMobileNum();
    })
    it(`Test 003:BridgeUpdotcom-ContactPage-Default-Email-Verification`, () => {
        BridgeUpContactPage.verifyDefaultEmail();
    })
    it(`Test 004:BridgeUpdotcom-ContactPage-Default-Title-HeadOffice-Verification`, () => {
        BridgeUpContactPage.verifyDefaultTitleHeadOffice();
    })
    it(`Test 005:BridgeUpdotcom-ContactPage-Default-Addres-Verification`, () => {
        BridgeUpContactPage.verifyDefaultAddress();
    })
    it(`Test 006:BridgeUpdotcom-ContactPage-Default-LookingForSupport-Verification`, () => {
        BridgeUpContactPage.verifyDefaultLookingForSupport();
    })
    it(`Test 007:BridgeUpdotcom-ContactPage-Default-Title-SendUsAMessage-Verification`, () => {
        BridgeUpContactPage.verifyDefaultTitleSendUsAMessage();
    })
    it(`Test 008:BridgeUpdotcom-ContactPage-ContactForm-Positive`, () => {
        BridgeUpContactPage.typeName(ValidName);
        BridgeUpContactPage.typeEmail(ValidMail);
        BridgeUpContactPage.typePhone(ValidPhonenumber);
        BridgeUpContactPage.typeSubject(Validsubject);
        BridgeUpContactPage.typeMessage(Validmessage)
        BridgeUpContactPage.ClickSubmit();
        BridgeUpContactPage.verifyFormSubmitted();
    })

})