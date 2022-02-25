/// <reference types ="cypress"/>
import BridgeUpInvestors from'../BridgeUpDotCom/BridgeUpDotComPageObj/BridgeupInvestorsPageObj'
import { Investorstesturl } from './BridgeUpDotComConfig/InvestorspageConfig';
describe('BridgeUp- UI- Investors- Test Suite', () => {
    before(function  (){
        cy.visit(Investorstesturl);                                                                 
    })
        it(`Test 001:BridgeUpdotcom-InvestorPage-Default-Text-CompaniesLove-Verification`, () => {   
        BridgeUpInvestors.verifyDefaultTextCompaniesLove()
    }) 
        it(`Test 002:BridgeUpdotcom-InvestorPage-Default-Text-Receivefixed-Verification`, () => { 
        BridgeUpInvestors.verifyDefaultTextReceivefixed()
    })
        it(`Test 003:BridgeUpdotcom-InvestorPage-Default-Text-Startinvesting-Verification`, () => { 
        BridgeUpInvestors.verifyDefaultTextStartinvesting()
    })
        it(`Test 004:BridgeUpdotcom-InvestorPage-Default-Text-SetYour-Verification`, () => { 
        BridgeUpInvestors.verifyDefaultTextSetYour()
    })
        it(`Test 005:BridgeUpdotcom-InvestorPage-Default-Text-DifferentInvestors-Verification`, () => { 
        BridgeUpInvestors.verifyDefaultTextDifferentInvestors()
    })
        it(`Test 006:BridgeUpdotcom-InvestorPage-Default-Text-BidPurchase-Verification`, () => { 
        BridgeUpInvestors.verifyDefaultTextBidPurchase()
    })
        it(`Test 007:BridgeUpdotcom-InvestorPage-Default-Text-Placecompetitive-Verification`, () => { 
        BridgeUpInvestors.verifyDefaultTextPlacecompetitive()
    })
        it(`Test 008:BridgeUpdotcom-InvestorPage-Default-Text-ReceiveFixedReturns-Verification`, () => { 
        BridgeUpInvestors.verifyDefaultTextReceiveFixedReturns()
    })
        it(`Test 009:BridgeUpdotcom-InvestorPage-Default-Text-liquidasset-Verification`, () => { 
        BridgeUpInvestors.verifyDefaultTextliquidasset()
    })
        it(`Test 010:BridgeUpdotcom-InvestorPage-Default-Text-UncorrelatedAsset-Verification`, () => { 
        BridgeUpInvestors.verifyDefaultTextUncorrelatedAsset()
    })
        it(`Test 011:BridgeUpdotcom-InvestorPage-Default-Text-DiversifyYour-Verification`, () => { 
        BridgeUpInvestors.verifyDefaultTextDiversifyYour()
    })
        it(`Test 012:BridgeUpdotcom-InvestorPage-Default-Text-Startinvesting-Verification`, () => { 
        BridgeUpInvestors.verifyDefaultTextStartinvesting()
    })
        it(`Test 013:BridgeUpdotcom-InvestorPage-Default-Text-marketfluctuation-Verification`, () => { 
        BridgeUpInvestors.verifyDefaultTextmarketfluctuation()
    })
})