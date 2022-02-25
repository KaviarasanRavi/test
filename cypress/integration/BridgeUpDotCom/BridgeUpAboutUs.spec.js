/// <reference types ="cypress"/>
import BridgeAboutUsPage from'../BridgeUpDotCom/BridgeUpDotComPageObj/BridgeupAboutUsObj'
import { AboutUsPagetesturl } from './BridgeUpDotComConfig/AboutUsPageConfig';
describe('BridgeUp-AboutUsPage- Test Suite', () => {
    before(function  (){
        cy.visit(AboutUsPagetesturl);      
    })      
        it(`Test 001: BridgeUpdotcom-AboutUsPage-Default-Title-Driven-Verification`, () => {  
        BridgeAboutUsPage.verifyDefaultTitleDriven();
    })
        it(`Test 002: BridgeUpdotcom-AboutUsPage-Default-Text-BridgeUpIntroduces-Verification`, () => {
        BridgeAboutUsPage.verifyDefaultTextBridgeUpIntroduces();
    })
        it(`Test 003: BridgeUpdotcom-AboutUsPage--Default-Title-AboutBridgeUp-Verification`, () => {
        BridgeAboutUsPage.verifyDefaultTitleAboutBridgeUp();
    })
        it(`Test 004: BridgeUpdotcom-AboutUsPage-Default-Text-AMethodFor-Verification`, () => {
        BridgeAboutUsPage.verifyDefaultTextAMethodFor();
    }) 
        it(`Test 005: BridgeUpdotcom-AboutUsPage-Default-Title-Purpose-Verification`, () => {
        BridgeAboutUsPage.verifyDefaultTitlePurpose();
    }) 
        it(`Test 006: BridgeUpdotcom-AboutUsPage-Default-Text-OurTeamOf-Verification`, () => {
        BridgeAboutUsPage.verifyDefaultTextOurTeamOf();
    })
        it(`Test 007: BridgeUpdotcom-AboutUsPage-Default-Text-Ensemple-Verification`, () => {
        BridgeAboutUsPage.verifyDefaultTextEnsemple();
    })  
        it(`Test 008: BridgeUpdotcom-AboutUsPage-Default-Name-Parijat-Verification`, () => {
        BridgeAboutUsPage.verifyDefaultNameParijat();
    }) 
        it(`Test 009: BridgeUpdotcom-AboutUsPage-Default-Name-Siddhant-Verification`, () => {
        BridgeAboutUsPage.verifyDefaultNameSiddhant();
    }) 
        it(`Test 010: BridgeUpdotcom-AboutUsPage-Default-Name-Anurag-Verification`, () => {
        BridgeAboutUsPage.verifyDefaultNameAnurag();
    }) 
        it(`Test 011: BridgeUpdotcom-AboutUsPage-Default-Name-AdhityaLohia-Verification`, () => {
        BridgeAboutUsPage.verifyDefaultNameAdhityaLohia();
    }) 
        it(`Test 012: BridgeUpdotcom-AboutUsPage-Default-Name-DipenPatel-Verification`, () => {
        BridgeAboutUsPage.verifyDefaultNameDipenPatel();
    })
        it(`Test 013: BridgeUpdotcom-AboutUsPage-Default-Name-Jahangirpanday-Verification`, () => {
        BridgeAboutUsPage.verifyDefaultNameJahangirpanday();
    }) 
        it(`Test 014: BridgeUpdotcom-AboutUsPage-Default-Name-ZeusDhanbhoora-Verification`, () => {
        BridgeAboutUsPage.verifyDefaultNameZeusDhanbhoora();
    }) 
        it(`Test 015: BridgeUpdotcom-AboutUsPage-Default-Name-Dhineshkumar-Verification`, () => {
        BridgeAboutUsPage.verifyDefaultNameDhineshkumar();
    }) 
        it(`Test 016: BridgeUpdotcom-AboutUsPage-Default-Name-Saumen-Verification`, () => {
        BridgeAboutUsPage.verifyDefaultNameSaumen();
    }) 
        it(`Test 017: BridgeUpdotcom-AboutUsPage-Default-Name-Daruvala-Verification`, () => {
        BridgeAboutUsPage.verifyDefaultNameDaruvala();
    })
})