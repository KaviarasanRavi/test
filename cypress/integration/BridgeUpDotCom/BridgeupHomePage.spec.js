/// <reference types ="cypress"/>
import BridgeUpHome from'../BridgeUpDotCom/BridgeUpDotComPageObj/BridgeupHomePageObj'
import { HomePagetesturl } from './BridgeUpDotComConfig/HomePageConfig';
describe('BridgeUp- UI- HomePage- Test Suite', () => {
    before(function  (){
        cy.visit(HomePagetesturl);
    })
it(`Test 001:BridgeUpdotcom-Homepage-Bridgeuplogo2-Verification`, () => {
BridgeUpHome.verifyBridgeuplogo2()
})
it(`Test 002:BridgeUpdotcom-Homepage-Bridgeuplogo-Verification`, () => {
BridgeUpHome.verifyDefaultBridgeupLogo()
})
it(`Test 003:BridgeUpdotcom-Homepage-Default-LinkInvestors-Verification`, () => {
BridgeUpHome.verifyDefaultLinkInvestors()
})
it(`Test 004:BridgeUpdotcom-Homepage-Default-LinkContent-Verification`, () => {
BridgeUpHome.verifyDefaultLinkContent()
})
it(`Test 005:BridgeUpdotcom-Homepage-Default-LinkCompany-Verification`, () => {
BridgeUpHome.verifyDefaultLinkCompany()
})
it(`Test 006:BridgeUpdotcom-Homepage-Default-LinkContact-Verification`, () => {
BridgeUpHome.verifyDefaultLinkContact()
})
it(`Test 007:BridgeUpdotcom-Homepage-Default-LinkLogin-Verification`, () => {
BridgeUpHome.verifyDefaultLinkLogin()
})
it(`Test 008:BridgeUpdotcom-Homepage-Default-LinkGetCapital-Verification`, () => {
BridgeUpHome.verifyDefaultLinkGetCapital()
})
it(`Test 009:BridgeUpdotcom-Homepage-Default-TextRevenue-Verification`, () => {
BridgeUpHome.verifyDefaultTextRevenue()
})
it(`Test 010:BridgeUpdotcom-Homepage-Default-TextAccessinstant-Verification`, () => {
BridgeUpHome.verifyDefaultTextAccessinstant()
})
it(`Test 011:BridgeUpdotcom-Homepage-Default-LinkGetStarted-Verification`, () => {
BridgeUpHome.verifyDefaultLinkGetStarted()
})
it(`Test 012:BridgeUpdotcom-Homepage-Default-MyDashboardImage-Verification`, () => {
BridgeUpHome.verifyDefaultMyDashboardImage()
})
it(`Test 013:BridgeUpdotcom-Homepage-Default-TextGetPaidUpfront-Verification`, () => {
BridgeUpHome.verifyDefaultTextGetPaidUpfront()
})
it(`Test 014:BridgeUpdotcom-Homepage-Default-TextReceiveTheAnnual-Verification`, () => {
BridgeUpHome.verifyDefaultTextReceiveTheAnnual()
})
it(`Test 015:BridgeUpdotcom-Homepage-Default-UiImage1-Verification`, () => {
BridgeUpHome.verifyDefaultUiImage1()
})
it(`Test 016:BridgeUpdotcom-Homepage-Default-UiImage2-Verification`, () => {
BridgeUpHome.verifyDefaultUiImage2()
})
it(`Test 017:BridgeUpdotcom-Homepage-Default-UiImage3-Verification`, () => {
BridgeUpHome.verifyDefaultUiImage3()
})
it(`Test 018:BridgeUpdotcom-Homepage-Default-UiImage4-Verification`, () => {
BridgeUpHome.verifyDefaultUiImage4()
})
it(`Test 019:BridgeUpdotcom-Homepage-Default-UiSmallImage1-Verification`, () => {
BridgeUpHome.verifyDefaultUiSmallImage1()
})
it(`Test 020:BridgeUpdotcom-Homepage-Default-UiSmallImage2-Verification`, () => {
BridgeUpHome.verifyDefaultUiSmallImage2()
})
it(`Test 021:BridgeUpdotcom-Homepage-Default-UiSmallImage3-Verification`, () => {
BridgeUpHome.verifyDefaultUiSmallImage3()
})
it(`Test 022:BridgeUpdotcom-Homepage-Default-UiSmallImage4-Verification`, () => {
BridgeUpHome.verifyDefaultUiSmallImage4()
})
it(`Test 023:BridgeUpdotcom-Homepage-Default-UiSmallImage5-Verification`, () => {
BridgeUpHome.verifyDefaultUiSmallImage5()
})
it(`Test 024:BridgeUpdotcom-Homepage-Default-UiSmallImage6-Verification`, () => {
BridgeUpHome.verifyDefaultUiSmallImage6()
})
it(`Test 025:BridgeUpdotcom-Homepage-Default-TextCatch-Verification`, () => {
BridgeUpHome.verifyDefaultTextCatch()
})
it(`Test 026:BridgeUpdotcom-Homepage-Default-TextFlawlessIntegration-Verification`, () => {
BridgeUpHome.verifyDefaultTextFlawlessIntegration()
})
it(`Test 027:BridgeUpdotcom-Homepage-Default-TextIntuitive-Verification`, () => {
BridgeUpHome.verifyDefaultTextIntuitive()
})
it(`Test 028:BridgeUpdotcom-Homepage-Default-TextSelectVerification`, () => {
BridgeUpHome.verifyDefaultTextSelect()
})
it(`Test 029:BridgeUpdotcom-Homepage-Default-TextSelectcontractsVerification`, () => {
BridgeUpHome.verifyDefaultTextSelectcontracts()
})
it(`Test 030:BridgeUpdotcom-Homepage-Default-Text-Payout-Verification`, () => {
BridgeUpHome.verifyDefaultTextPayout()
})
it(`Test 031:BridgeUpdotcom-Homepage-Default-TextInstantpayout-Verification`, () => {
BridgeUpHome.verifyDefaultTextInstantpayout()
})
it(`Test 032:BridgeUpdotcom-Homepage-Default-TextPayback-Verification`, () => {
BridgeUpHome.verifyDefaultTextPayback()
})
it(`Test 033:BridgeUpdotcom-Homepage-Default-TextPaybackwhen-Verification`, () => {
BridgeUpHome.verifyDefaultTextPaybackwhen()
})
it(`Test 034:BridgeUpdotcom-Homepage-WhoCan-Verification`, () => {
BridgeUpHome.verifyWhoCan()
})
it(`Test 035:BridgeUpdotcom-Homepage-Default-Textthesky-Verification`, () => {
BridgeUpHome.verifyDefaultTextthesky()
})
it(`Test 036:BridgeUpdotcom-Homepage-Default-TextTakeOur-Verification`, () => {
BridgeUpHome.verifyDefaultTextTakeOur()
})
it(`Test 037:BridgeUpdotcom-Homepage-Default-Swiper-Verification`, () => {
BridgeUpHome.verifyDefaultSwiper()
})
it(`Test 038:BridgeUpdotcom-Homepage-Default-TextNeedInstant-Verification`, () => {
BridgeUpHome.verifyDefaultTextNeedInstant()
})
it(`Test 039:BridgeUpdotcom-Homepage-Default-LinkGetcapital2t-Verification`, () => {
BridgeUpHome.verifyDefaultLinkGetcapital2()
})
it(`Test 040:BridgeUpdotcom-Homepage-Default-FooterMain-Verification`, () => {
BridgeUpHome.verifyDefaultFooterMain()
})
it(`Test 041:BridgeUpdotcom-Homepage-Default-FooterContent-Verification`, () => {
BridgeUpHome.verifyDefaultFooterContent()
})
it(`Test 042:BridgeUpdotcom-Homepage-Default-FooterCompany-Verification`, () => {
BridgeUpHome.verifyDefaultFooterCompany()
})
it(`Test 043:BridgeUpdotcom-Homepage-Default-FooterReachOut-Verification`, () => {
BridgeUpHome.verifyDefaultFooterReachOut()
})
it(`Test 044:BridgeUpdotcom-Homepage-Default-FooterHome-Verification`, () => {
BridgeUpHome.verifyDefaultFooterHome()
})
it(`Test 045:BridgeUpdotcom-Homepage-Default-FooterFAQs-Verification`, () => {
BridgeUpHome.verifyDefaultFooterFAQs()
})
it(`Test 046:BridgeUpdotcom-Homepage-Default-FooterAboutUs-Verification`, () => {
BridgeUpHome.verifyDefaultFooterAboutUs()
})
it(`Test 047:BridgeUpdotcom-Homepage-Default-FooterForInvestors-Verification`, () => {
BridgeUpHome.verifyDefaultFooterForInvestors()
})
it(`Test 048:BridgeUpdotcom-Homepage-Default-FooterGetCapital-Verification`, () => {
BridgeUpHome.verifyDefaultFooterGetCapital()
})
it(`Test 049:BridgeUpdotcom-Homepage-Twitterlogo-Verification`, () => {
BridgeUpHome.verifyTwitterlogo()
})
it(`Test 050:BridgeUpdotcom-Homepage-Default-BridgeUpTechPvtLtd-Verification`, () => {
BridgeUpHome.verifyDefaultBridgeUpTechPvtLtd()
})   
});






