/// <reference types ="cypress"/>
import { Authid, hasuraid, tradeLogintesturl, TradeValidMailId, TradeValidPassword } from "./BridgeUpTradeConfig/TradeLoginConfig";
import TradeLoginpage from "./BridgeUpTradeObj/BridgeUpTradeLoginObj";
import PaymentMandatepage from "./BridgeUpTradeObj/PaymentMandateObj";

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
        PaymentMandatepage.ClickContinueTrading();
        PaymentMandatepage.verifyDefaultTextRegister();
        PaymentMandatepage.verifyDefaultTextApaymentmandate();
        PaymentMandatepage.verifyDefaultTextCOMPLETELATER();
        PaymentMandatepage.verifyDefaultTextNext();
        PaymentMandatepage.verifyDefaultTextTradeSummary();
        PaymentMandatepage.verifyDefaultTextSelectedContracts();
        PaymentMandatepage.verifyDefaultTextOfferPrice();
        PaymentMandatepage.verifyDefaultTextTotalOfferAmount()
        PaymentMandatepage.verifyDefaultTextPlatformFee()
        PaymentMandatepage.verifyDefaultTextTermLength()
        PaymentMandatepage.verifyDefaultTextTotalPayout()
        PaymentMandatepage.verifyDefaultTextMonthlyAmount()
        PaymentMandatepage.verifyDefaultTextYourbankaccount()
    })
})    