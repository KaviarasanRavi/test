/// <reference types ="cypress"/>
import BridgeUpFAQPage from'../BridgeUpDotCom/BridgeUpDotComPageObj/BridgeUpFAQObj'
import { FAQPagetesturl } from './BridgeUpDotComConfig/fAQConfig';
describe('BridgeUp- UI- CareerPage- Test Suite', () => {
    before(function  (){
        cy.visit(FAQPagetesturl);
    })
    it(`Test 001:BridgeUpdotcom-FAQPage-Default-Text-General-Verification`, () => {
        BridgeUpFAQPage.verifyDefaultTextGeneral()
        })
        it(`Test 002:BridgeUpdotcom-FAQPage-Default-Text-FirstGeneralQn-Verification`, () => {
        BridgeUpFAQPage.verifyDefaultTextFirstGeneralQn()
        })
        it(`Test 003:BridgeUpdotcom-FAQPage-Default-Text-FirstGeneralAns-Verification`, () => {
        BridgeUpFAQPage.verifyDefaultTextFirstGeneralAns()
        })
        it(`Test 004:BridgeUpdotcom-FAQPage-Default-Text-SecondGeneralQn-Verification`, () => {
        BridgeUpFAQPage.verifyDefaultTextSecondGeneralQn()
        })
        it(`Test 005:BridgeUpdotcom-FAQPage-Default-Text-SecondGeneralQnAns-Verification`, () => {
        BridgeUpFAQPage.verifyDefaultTextSecondGeneralQnAns()
        })
        it(`Test 006:BridgeUpdotcom-FAQPage-Default-Text-ThirdGeneralQn-Verification`, () => {
        BridgeUpFAQPage.verifyDefaultTextThirdGeneralQn()
        })
        it(`Test 007:BridgeUpdotcom-FAQPage-Default-Text-ThirdGeneralQnAns-Verification`, () => {
        BridgeUpFAQPage.verifyDefaultTextThirdGeneralQnAns()
        })
        it(`Test 008:BridgeUpdotcom-FAQPage-Default-Text-FourthGeneralQn-Verification`, () => {
        BridgeUpFAQPage.verifyDefaultTextFourthGeneralQn()
        })
        it(`Test 009:BridgeUpdotcom-FAQPage-Default-Text-FourthGeneralAns-Verification`, () => {
        BridgeUpFAQPage.verifyDefaultTextFourthGeneralAns()
        })
        it(`Test 010:BridgeUpdotcom-FAQPage-Default-Text-FifthGeneralQn-Verification`, () => {
        BridgeUpFAQPage.verifyDefaultTextFifthGeneralQn()
        })
        it(`Test 011:BridgeUpdotcom-FAQPage-Default-Text-FifthGeneralAns-Verification`, () => {
        BridgeUpFAQPage.verifyDefaultTextFifthGeneralAns()
        })
        it(`Test 012:BridgeUpdotcom-FAQPage-Default-Text-SixthGeneralQn-Verification`, () => {
        BridgeUpFAQPage.verifyDefaultTextSixthGeneralQn()
        })
        it(`Test 013:BridgeUpdotcom-FAQPage-Default-Text-SixthGeneralAns-Verification`, () => {
        BridgeUpFAQPage.verifyDefaultTextSixthGeneralAns()
        })
        it(`Test 014:BridgeUpdotcom-FAQPage-Default-Text-SeventhGeneralQn-Verification`, () => {
        BridgeUpFAQPage.verifyDefaultTextSeventhGeneralQn()
        })
        it(`Test 015:BridgeUpdotcom-FAQPage-Default-Text-SeventhGeneralAns-Verification`, () => {
        BridgeUpFAQPage.verifyDefaultTextSeventhGeneralAns()
        })
        it(`Test 016:BridgeUpdotcom-FAQPage-Default-Text-EightGeneralQn-Verification`, () => {
        BridgeUpFAQPage.verifyDefaultTextEightGeneralQn()
        })
        it(`Test 017:BridgeUpdotcom-FAQPage-Default-Text-EightGeneralAns-Verification`, () => {
        BridgeUpFAQPage.verifyDefaultTextEightGeneralAns()
        })
        it(`Test 018:BridgeUpdotcom-FAQPage-Default-Text-FirstCompanyQn-Verification`, () => {
        BridgeUpFAQPage.verifyDefaultTextFirstCompanyQn()
        })
        it(`Test 019:BridgeUpdotcom-FAQPage-Default-Text-irstCompanyAns-Verification`, () => {
        BridgeUpFAQPage.verifyDefaultTextFirstCompanyAns()
        })
        it(`Test 020:BridgeUpdotcom-FAQPage-Default-Text-SecondCompanyQn-Verification`, () => {
        BridgeUpFAQPage.verifyDefaultTextSecondCompanyQn()
        })
        it(`Test 021:BridgeUpdotcom-FAQPage-Default-Text-ThirdCompanyQn-Verification`, () => {
        BridgeUpFAQPage.verifyDefaultTextThirdCompanyQn()
        })
        it(`Test 022:BridgeUpdotcom-FAQPage-Default-Text-FourthCompanyQn-Verification`, () => {
        BridgeUpFAQPage.verifyDefaultTextFourthCompanyQn()
        })
        it(`Test 023:BridgeUpdotcom-FAQPage-Default-Text-FourthCompanyAns-Verification`, () => {
        BridgeUpFAQPage.verifyDefaultTextFourthCompanyAns()
        })
        it(`Test 024:BridgeUpdotcom-FAQPage-Default-Text-FifthCompanyQn-Verification`, () => {
        BridgeUpFAQPage.verifyDefaultTextFifthCompanyQn()
        })
        it(`Test 025:BridgeUpdotcom-FAQPage-Default-Text-FifthCompanyAns-Verification`, () => {
        BridgeUpFAQPage.verifyDefaultTextFifthCompanyAns()
        })
        it(`Test 026:BridgeUpdotcom-FAQPage-Default-Text-SixthCompanyQn-Verification`, () => {
        BridgeUpFAQPage.verifyDefaultTextSixthCompanyQn()
        })
        it(`Test 027:BridgeUpdotcom-FAQPage-Default-Text-SixthCompanyAns-Verification`, () => {
        BridgeUpFAQPage.verifyDefaultTextSixthCompanyAns()
        })
        it(`Test 028:BridgeUpdotcom-FAQPage-Default-Text-GettingStarted-Verification`, () => {
        BridgeUpFAQPage.verifyDefaultTextGettingStarted()
        })
        it(`Test 029:BridgeUpdotcom-FAQPage-Default-Text-GettingStartedQn1-Verification`, () => {
        BridgeUpFAQPage.verifyDefaultTextGettingStartedQn1()
        })
        it(`Test 030:BridgeUpdotcom-FAQPage-Default-Text-GettingStartedAns1-Verification`, () => {
        BridgeUpFAQPage.verifyDefaultTextGettingStartedAns1()
        })
        it(`Test 031:BridgeUpdotcom-FAQPage-Default-Text-GettingStartedQn2-Verification`, () => {
        BridgeUpFAQPage.verifyDefaultTextGettingStartedQn2()
        })
        it(`Test 032:BridgeUpdotcom-FAQPage-Default-Text-GettingStartedAns2-Verification`, () => {
        BridgeUpFAQPage.verifyDefaultTextGettingStartedAns2()
        })
        it(`Test 033:BridgeUpdotcom-FAQPage-Default-Text-GettingStartedQn3-Verification`, () => {
        BridgeUpFAQPage.verifyDefaultTextGettingStartedQn3()
        })
        it(`Test 034:BridgeUpdotcom-FAQPage-Default-Text-GettingStartedAns3-Verification`, () => {
        BridgeUpFAQPage.verifyDefaultTextGettingStartedAns3()
        })
        it(`Test 035:BridgeUpdotcom-FAQPage-Default-Text-GettingStartedQn4-Verification`, () => {
        BridgeUpFAQPage.verifyDefaultTextGettingStartedQn4()
        })
        it(`Test 036:BridgeUpdotcom-FAQPage-Default-Text-GettingStartedAns4-Verification`, () => {
        BridgeUpFAQPage.verifyDefaultTextGettingStartedAns4()
        })
        it(`Test 037:BridgeUpdotcom-FAQPage-Default-Text-ForInvesters-Verification`, () => {
        BridgeUpFAQPage.verifyDefaultTextForInvesters()
        })
        it(`Test 038:BridgeUpdotcom-FAQPage-Default-Text-InvestersQn1-Verification`, () => {
        BridgeUpFAQPage.verifyDefaultTextForInvestersQn1()
        })
        it(`Test 039:BridgeUpdotcom-FAQPage-Default-Text-ForInvestersAns1-Verification`, () => {
        BridgeUpFAQPage.verifyDefaultTextForInvestersAns1()
        })
        it(`Test 040:BridgeUpdotcom-FAQPage-Default-Text-ForInvestersQn2-Verification`, () => {
        BridgeUpFAQPage.verifyDefaultTextForInvestersQn2()
        })
        it(`Test 041:BridgeUpdotcom-FAQPage-Default-Text-ForInvestersAns2-Verification`, () => {
        BridgeUpFAQPage.verifyDefaultTextForInvestersAns2()
        })
        it(`Test 042:BridgeUpdotcom-FAQPage-Default-Text-ForInvestersQn3-Verification`, () => {
        BridgeUpFAQPage.verifyDefaultTextForInvestersQn3()
        })
        it(`Test 043:BridgeUpdotcom-FAQPage-Default-Text-ForInvestersAns3-Verification`, () => {
        BridgeUpFAQPage.verifyDefaultTextForInvestersAns3()
        })
        it(`Test 044:BridgeUpdotcom-FAQPage-Default-Text-CantFind-Verification`, () => {
        BridgeUpFAQPage.verifyDefaultTextCantFindText()
        })
    })