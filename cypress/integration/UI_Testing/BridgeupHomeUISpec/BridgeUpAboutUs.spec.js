/// <reference types ="cypress"/>
import BridgeAboutUsPage from'../BridgeupHomeUIpageObjects/BridgeupAboutUsObj'
describe('BridgeUp- UI- AboutUs- Test Suite', () => {
    beforeEach(function  (){
        cy.visit('https://bridgeup.com/about-us/');      
    })      
    it(`Test 001: Bridgeup-UI-AboutUs-positive`, () => {  
        BridgeAboutUsPage.verifyDefaultTitleDriven();
        BridgeAboutUsPage.verifyDefaultTextBridgeUpIntroduces();
        BridgeAboutUsPage.verifyDefaultTitleAboutBridgeUp();
        BridgeAboutUsPage.verifyDefaultTextAMethodFor();
        BridgeAboutUsPage.verifyDefaultTitlePurpose();
        BridgeAboutUsPage.verifyDefaultTextOurTeamOf();
        BridgeAboutUsPage.verifyDefaultTextEnsemple();
        BridgeAboutUsPage.verifyDefaultNameParijat();
        BridgeAboutUsPage.verifyDefaultNameSiddhant();
        BridgeAboutUsPage.verifyDefaultNameAnurag();
        BridgeAboutUsPage.verifyDefaultNameAdhityaLohia();
        BridgeAboutUsPage.verifyDefaultNameDipenPatel();
        BridgeAboutUsPage.verifyDefaultNameJahangirpanday();
        BridgeAboutUsPage.verifyDefaultNameZeusDhanbhoora();
        BridgeAboutUsPage.verifyDefaultNameDhineshkumar();
        BridgeAboutUsPage.verifyDefaultNameSaumen();
        BridgeAboutUsPage.verifyDefaultNameDaruvala();
    })
})