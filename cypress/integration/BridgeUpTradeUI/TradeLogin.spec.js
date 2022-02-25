/// <reference types ="cypress"/>
import { Authid, hasuraid, tradeLogintesturl, TradeValidMailId, TradeValidPassword } from "./BridgeUpTradeConfig/TradeLoginConfig";
import TradeLoginpage from "./BridgeUpTradeObj/BridgeUpTradeLoginObj";

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
        TradeLoginpage.verifyDefaulTextwelcome()
        TradeLoginpage.verifyDefaulTextBRIDGEUP()
        TradeLoginpage.verifyDefaulTextAvailableARR()
        TradeLoginpage.verifyDefaulTextFacilityLimit()
        TradeLoginpage.verifyDefaulTextTotalAmountTraded()
        TradeLoginpage.verifyDefaulTextRemainingTradeLimit()
        TradeLoginpage.verifyDefaulTextOfferPrice()
        TradeLoginpage.verifyDefaulTextPrimaryLinkedAccount()
        TradeLoginpage.verifyDefaulTextUpcomingPayments()        
   
    })
})