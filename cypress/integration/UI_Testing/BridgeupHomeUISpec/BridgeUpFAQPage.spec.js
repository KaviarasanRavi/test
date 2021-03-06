/// <reference types ="cypress"/>
import BridgeUpFAQPage from'../BridgeupHomeUIpageObjects/BridgeUpFAQObj'
describe('BridgeUp- UI- CareerPage- Test Suite', () => {
    beforeEach(function  (){
        cy.visit('https://bridgeup.com/faqs/');
    })
    it(`Test 001: Bridgeup-UI-FAQPage-positive`, () => {
BridgeUpFAQPage.verifyGeneral()
BridgeUpFAQPage.verifyFirstGeneralQn()
BridgeUpFAQPage.verifyFirstGeneralAns()
BridgeUpFAQPage.verifySecondGeneralQn()
BridgeUpFAQPage.verifySecondGeneralQnAns()
BridgeUpFAQPage.verifyThirdGeneralQn()
BridgeUpFAQPage.verifyThirdGeneralQnAns()
BridgeUpFAQPage.verifyFourthGeneralQn()
BridgeUpFAQPage.verifyFourthGeneralAns()
BridgeUpFAQPage.verifyFifthGeneralQn()
BridgeUpFAQPage.verifyFifthGeneralAns()
BridgeUpFAQPage.verifySixthGeneralQn()
BridgeUpFAQPage.verifySixthGeneralAns()
BridgeUpFAQPage.verifySeventhGeneralQn()
BridgeUpFAQPage.verifySeventhGeneralAns()
BridgeUpFAQPage.verifyEightGeneralQn()
BridgeUpFAQPage.verifyEightGeneralAns()
BridgeUpFAQPage.verifyFirstCompanyQn()
BridgeUpFAQPage.verifyFirstCompanyAns()
BridgeUpFAQPage.verifySecondCompanyQn()
BridgeUpFAQPage.verifyThirdCompanyQn()
BridgeUpFAQPage.verifyFourthCompanyQn()
BridgeUpFAQPage.verifyFourthCompanyAns()
BridgeUpFAQPage.verifyFifthCompanyQn()
BridgeUpFAQPage.verifyFifthCompanyAns()
BridgeUpFAQPage.verifySixthCompanyQn()
BridgeUpFAQPage.verifySixthCompanyAns()
BridgeUpFAQPage.verifyGettingStarted()
BridgeUpFAQPage.verifyGettingStartedQn1()
BridgeUpFAQPage.verifyGettingStartedAns1()
BridgeUpFAQPage.verifyGettingStartedQn2()
BridgeUpFAQPage.verifyGettingStartedAns2()
BridgeUpFAQPage.verifyGettingStartedQn3()
BridgeUpFAQPage.verifyGettingStartedAns3()
BridgeUpFAQPage.verifyGettingStartedQn4()
BridgeUpFAQPage.verifyGettingStartedAns4()
BridgeUpFAQPage.verifyForInvesters()
BridgeUpFAQPage.verifyForInvestersQn1()
BridgeUpFAQPage.verifyForInvestersAns1()
BridgeUpFAQPage.verifyForInvestersQn2()
BridgeUpFAQPage.verifyForInvestersAns2()
BridgeUpFAQPage.verifyForInvestersQn3()
BridgeUpFAQPage.verifyForInvestersAns3()
BridgeUpFAQPage.verifyCantFindText()
})
})
