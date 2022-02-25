/// <reference types ="cypress"/>
import BridgeUpInvestors from'../BridgeupHomeUIpageObjects/BridgeupInvestorsPageObj'
describe('BridgeUp- UI- Investors- Test Suite', () => {
    beforeEach(function  (){
        cy.visit('https://bridgeup.com/investors/');                                                                 
    })
    it(`Test 001:Bridgeup-UI-Investors- `, () => {   
        BridgeUpInvestors.CompaniesLove()
        BridgeUpInvestors.Receivefixed()
        BridgeUpInvestors.Startinvesting()
        BridgeUpInvestors.SetYour()
        BridgeUpInvestors.DifferentInvestors()
        BridgeUpInvestors.BidPurchase()
        BridgeUpInvestors.Placecompetitive()
        BridgeUpInvestors.ReceiveFixedReturns()
        BridgeUpInvestors.liquidasset()
        BridgeUpInvestors.UncorrelatedAsset()
        BridgeUpInvestors.DiversifyYour()
        BridgeUpInvestors.Startinvesting()
    })
})