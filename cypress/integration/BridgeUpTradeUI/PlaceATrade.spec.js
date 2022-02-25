/// <reference types ="cypress"/>
import { Authid, hasuraid, tradeLogintesturl, TradeValidMailId, TradeValidPassword } from "./BridgeUpTradeConfig/TradeLoginConfig";
import TradeLoginpage from "./BridgeUpTradeObj/BridgeUpTradeLoginObj";
import PlaceATrade from "./BridgeUpTradeObj/BridgeUpPlaceATradeObj";
describe('Company- UI- LoginPage- Test Suite', () => {
    beforeEach(function(){
        cy.intercept({hostname: Authid}).as('auth');
        cy.intercept({hostname: hasuraid}).as('hasura');
        cy.visit(tradeLogintesturl);
    })
    it(`Test 001:Company - UI - Loginpage - Default text Display - Testcase-Negative`, () => {  
        TradeLoginpage.EnterEmail(TradeValidMailId);
        TradeLoginpage.EnterPassword(TradeValidPassword);
        TradeLoginpage.ClickLogin();
        cy.wait('@hasura');
        PlaceATrade.ClickTrade();
        PlaceATrade.verifyDefaultTextNewTrade();
        PlaceATrade.verifyDefaultTextOne();
        PlaceATrade.verifyDefaultTextSelectContracts();
        PlaceATrade.verifyDefaultTextTwo();
        PlaceATrade.verifyDefaultTextAssetPurchaseAgreement();
        PlaceATrade.verifyDefaultTextSelectOfferAmount();
        PlaceATrade.verifyDefaultTextRemainingTradeLimit();
        PlaceATrade.verifyDefaultTextSelectedContracts();
        PlaceATrade.verifyDefaultTextTotalOfferAmount();
        PlaceATrade.verifyDefaultTextPlatformFee();
        PlaceATrade.verifyDefaultTextTotalPayout();
        PlaceATrade.verifyDefaultTextPLACETRADE();
        PlaceATrade.verifyDefaultTextCLEARSELECTION();
        cy.wait('@hasura');
        PlaceATrade.ClickpageContracts();
        PlaceATrade.ClickNextPage();
        PlaceATrade.ClickpageContracts();
        PlaceATrade.ClickNextPage();
        PlaceATrade.ClickpageContracts();
        PlaceATrade.ClickPlaceTrade();


    })
})