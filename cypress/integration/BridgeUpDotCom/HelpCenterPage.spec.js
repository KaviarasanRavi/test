/// <reference types ="cypress"/>

import HelpCenterPage from'../BridgeUpDotCom/BridgeUpDotComPageObj/HelpCenterPageObj'
import { Helpcentertesturl, ValidFirstName, ValidLastName, ValidMobileNumber, ValidWhatWeCanDo } from './BridgeUpDotComConfig/HelpcenterPageconfig';
describe('BridgeUp- UI- HomePage- Test Suite', () => {
    before(function  (){
        cy.visit(Helpcentertesturl);

    })
    // it(`Test 001:BridgeUp - UI - HelpCenterPage- negative`, () => {
    //     HelpCenterPage.verifyDefaultTextHelpCenter();
    //     HelpCenterPage.verifyTitleOpenASupport();
    //     HelpCenterPage.verifyTextFirstName();
    //     HelpCenterPage.verifyTextLastName();
    //     HelpCenterPage.verifyTextMobileNumber();
    //     HelpCenterPage.verifyTextWhatCanWe();
    //     HelpCenterPage.FirstName('automation');
    //     HelpCenterPage.LastName('testing');
    //     HelpCenterPage.MobileNumber('qwerty%&*()_+');
    //     HelpCenterPage.WhatWeCanDo('Bridgeup automated Helpcenter page');
    //     HelpCenterPage.ClickSubmit();
    //     HelpCenterPage.verifyHelpCenterformNotsignedup();
    // })     

    it(`Test 001:BridgeUpdotcom-HelpCentrePage-Default-Text-HelpCentre-Verification`, () => {           
        HelpCenterPage.verifyDefaultTextHelpCenter();
    })
    it(`Test 002:BridgeUpdotcom-HelpCentrePage-Default-Title-OpenASupport-Verification`, () => {
        HelpCenterPage.verifyTitleOpenASupport();
    })
    it(`Test 003:BridgeUpdotcom-HelpCentrePage-Default-Text-FirstName-Verification`, () => {
        HelpCenterPage.verifyDefaultTextFirstName();
    })
    it(`Test 004:BridgeUpdotcom-HelpCentrePage-Default-Text-LastName-Verification`, () => {
        HelpCenterPage.verifyDefaultTextLastName();
    })
    it(`Test 005:BridgeUpdotcom-HelpCentrePage-Default-Text-MobileNumber-Verification`, () => {
        HelpCenterPage.verifyDefaultTextMobileNumber();
    })
    it(`Test 006:BridgeUpdotcom-HelpCentrePage-Default-Text-WhatCanWe-Verification`, () => {
        HelpCenterPage.verifyDefaultTextWhatCanWe();
    }) 
    it(`Test 007:BridgeUpdotcom-HelpCentrePage-FormSignUp-Positive`, () => {
        HelpCenterPage.typeFirstName(ValidFirstName);
        HelpCenterPage.typeLastName(ValidLastName);
        HelpCenterPage.typeMobileNumber(ValidMobileNumber);                                 
        HelpCenterPage.typeWhatWeCanDo(ValidWhatWeCanDo);                               
        HelpCenterPage.ClickSubmit();                                                                                       
        HelpCenterPage.verifyHelpCenterformsignedup();                                                               
    })

})