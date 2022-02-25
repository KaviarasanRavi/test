/// <reference types ="cypress"/>
import { testurl, ValidFirstName, ValidLastName, ValidMobileNumber, ValidWhatWeCanDo } from '../../../HelpcenterPageconfig';
import HelpCenterPage from'../BridgeupHomeUIpageObjects/HelpCenterPageObj'
describe('BridgeUp- UI- HomePage- Test Suite', () => {
    beforeEach(function  (){
        cy.visit(testurl);

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

    it(`Test 002:BridgeUp - UI - HelpCenterPage- positive`, () => {           
        HelpCenterPage.verifyDefaultTextHelpCenter();
        HelpCenterPage.verifyTitleOpenASupport();
        HelpCenterPage.verifyTextFirstName();
        HelpCenterPage.verifyTextLastName();
        HelpCenterPage.verifyTextMobileNumber();
        HelpCenterPage.verifyTextWhatCanWe();
        HelpCenterPage.FirstName(ValidFirstName);
        HelpCenterPage.LastName(ValidLastName);
        HelpCenterPage.MobileNumber(ValidMobileNumber);                                 
        HelpCenterPage.WhatWeCanDo(ValidWhatWeCanDo);                               
        HelpCenterPage.ClickSubmit();                                                                                       
        HelpCenterPage.verifyHelpCenterformsignedup();                                                               
    })

})