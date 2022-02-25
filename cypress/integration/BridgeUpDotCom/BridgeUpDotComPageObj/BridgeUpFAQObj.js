class BridgeUpFAQPage
{
  static  verifyDefaultTextGeneral()
  {
      cy.get('.elementor-element-c8b25fd > .elementor-widget-container > .elementor-heading-title').should('have.text','General')
  }
  static  verifyDefaultTextFirstGeneralQn()
{
  cy.get('#elementor-tab-title-141 > .elementor-toggle-title').should('have.text','What is BridgeUp?')
}
static  verifyDefaultTextFirstGeneralAns()
{
  cy.get('#elementor-tab-content-141 > p').should('include.text','BridgeUp is a trading platform that provides businesses with the capital they need to accelerate their growth')

}

static  verifyDefaultTextSecondGeneralQn()
{
  cy.get('#elementor-tab-title-142 > .elementor-toggle-title').should('include.text','How does BridgeUp work?')
}
static  verifyDefaultTextSecondGeneralQnAns(){
  cy.get('#elementor-tab-content-142 > p').should('include.text','Companies sign up and sync their systems with BridgeUp, after which they are assigned a trade limit and a pool of their contracts are made available to trade.')

}


static  verifyDefaultTextThirdGeneralQn()
{
  cy.get('#elementor-tab-title-143 > .elementor-toggle-title').should('include.text','Is it an alternative to equity financing?')
}
static  verifyDefaultTextThirdGeneralQnAns()
{
  cy.get('#elementor-tab-content-143 > p').should('include.text','We believe that our model works wonderfully in tandem with equity financing.With BridgeUp, a company who is in need of capital doesn’t need to look to VCs as their only option. Our model allows businesses to grow on their own terms without any premature dilution of ownership to founders and early stage investors. This also empowers them to secure better valuations for later rounds.')
}

static  verifyDefaultTextFourthGeneralQn()
{
  cy.get('#elementor-tab-title-144 > .elementor-toggle-title').should('include.text','Is BridgeUp’s financing model similar to a loan/venture debt?')

}
static  verifyDefaultTextFourthGeneralAns()
{
  cy.get('#elementor-tab-content-144 > p').should('include.text','No, unlike with loans/venture debt, we do not take any collateral, warrants or personal guarantees or charge any interest.We treat recurring revenue as tradable assets. Our enlisted investors make bids to purchase a company’s monthly recurring revenue contracts in exchange for their annual value. This annual value is given to the company upfront. The company continues to receive payments from customers on a monthly basis as usual – which they then use to pay back the investors.')
}

static  verifyDefaultTextFifthGeneralQn()
{
  cy.get('#elementor-tab-title-144 > .elementor-toggle-title').should('include.text','Is BridgeUp’s financing model similar to a loan/venture debt?')
}

 static  verifyDefaultTextFifthGeneralAns()
 {
  cy.get('#elementor-tab-content-145 > p > span').should('include.text','Apples to Oranges. We are not a debt product. BridgeUp provides for an outright sale of revenue. The investors don’t have a lien on the assets of the companies. Additionally, since the amount to be paid against the sale is fixed, the cost of capital to companies trading on BridgeUp is both lower and far more predictable compared to RBF.')
 }
 static  verifyDefaultTextSixthGeneralQn()
 {
  cy.get('#elementor-tab-title-146 > .elementor-toggle-title').should('include.text','What kind of companies is BridgeUp best suited for?')
 }
 static  verifyDefaultTextSixthGeneralAns()
 {
  cy.get('#elementor-tab-content-146 > p').should('include.text','BridgeUp is a great fit for subscription based companies with')
 }
 
 static  verifyDefaultTextSeventhGeneralQn()
 {
  cy.get('#elementor-tab-title-147 > .elementor-toggle-title').should('include.text','What kind of investors are on the platform?')
 }
 static  verifyDefaultTextSeventhGeneralAns()
 {
  cy.get('#elementor-tab-content-147 > p').should('include.text','Currently, the buy-side consists of NBFCs (Non Banking Financial Companies) who place bids based solely on the performance of the company.')

 }
 static  verifyDefaultTextEightGeneralQn()
 {
  cy.get('#elementor-tab-title-148 > .elementor-toggle-title').should('include.text','Do I need to pay to Sign Up for BridgeUp')
 }
 static  verifyDefaultTextEightGeneralAns()
 {
  cy.get('#elementor-tab-content-148 > p > span').should('include.text','Nope. Signing up for the platform is totally')
 }

static  verifyDefaultTextFirstCompanyQn(){
cy.get('#elementor-tab-title-9501 > .elementor-toggle-title').should('include.text','How do I know if BridgeUp is right for my company?')

}
static  verifyDefaultTextFirstCompanyAns(){
cy.get('#elementor-tab-content-9501').should('include.text','If you’re a company with recurring revenue, looking for cash to grow and scale your business')

}

static  verifyDefaultTextSecondCompanyQn(){
cy.get('#elementor-tab-title-9502 > .elementor-toggle-title').should('include.text','Do I need to tell my Customers I’m using BridgeUp?')
}
static  verifyDefaultTextSecondCompanyAns(){
cy.get('#elementor-tab-content-9502').should('include.text','Nope. BridgeUp does not disrupt or interfere with your existing processes or workflow in any way at all.')

}

static  verifyDefaultTextThirdCompanyQn(){
cy.get('#elementor-tab-title-9503 > .elementor-toggle-title').should('include.text','How many contracts can I trade?')
}
static  verifyDefaultTextThirdCompanyAns(){
cy.get('#elementor-tab-content-9503 > p').should('include.text','BridgeUp provides each company with a trade limit, which is the maximum amount you can trade. This limit is based on information gathered from our evaluation of your business’ financials (We look at your growth patterns, runway, churn, burn rate and other such metrics.)You can select as many contracts as you like, within the trade limit. As you perform more trades, our systems get more analytics which let us reevaluate and increase your trade limit every fortnight.')

}


static  verifyDefaultTextFourthCompanyQn(){
cy.get('#elementor-tab-title-9504 > .elementor-toggle-title').should('include.text','What happens if one of my traded contracts churns?')
}
static  verifyDefaultTextFourthCompanyAns(){
cy.get('#elementor-tab-content-9504 > p').should('include.text','If a traded contract churns, it is automatically replaced with another contract of equal value.You don’t have to pay any penalties or fees.')

}

static  verifyDefaultTextFifthCompanyQn(){
cy.get('#elementor-tab-title-9505 > .elementor-toggle-title').should('include.text','What is the value an investor offers me for my contracts?')
}
static  verifyDefaultTextFifthCompanyAns(){
  cy.get('#elementor-tab-content-9505 > p > :nth-child(1)').should('include.text','The bid-value an investor will offer is determined based on')

}

static  verifyDefaultTextSixthCompanyQn(){
cy.get('#elementor-tab-title-9506 > .elementor-toggle-title').should('include.text','Other than giving me upfront cash, how can BridgeUp help my business?')
}

static  verifyDefaultTextSixthCompanyAns(){
cy.get('#elementor-tab-content-9506 > p').should('include.text','Not all money is created equal. We believe the capital you receive through BridgeUp is more valuable and powerful')

}





static  verifyDefaultTextGettingStarted(){
cy.get('.elementor-element-1085e1a > .elementor-widget-container > .elementor-heading-title').should('have.text','Getting Started')

}

static  verifyDefaultTextGettingStartedQn1(){
  cy.get('#elementor-tab-title-1551 > .elementor-toggle-title').should('include.text','How Do I Sign up for BridgeUp')
}
static  verifyDefaultTextGettingStartedAns1(){
cy.get('#elementor-tab-content-1551 > p').should('include.text','You can sign up for BridgeUp, free of charge by creating an account here.')
}
static  verifyDefaultTextGettingStartedQn2(){
cy.get('#elementor-tab-title-1552 > .elementor-toggle-title').should('include.text','Why do I need to share my banking/accounting details with BridgeUp')

}
static  verifyDefaultTextGettingStartedAns2(){
cy.get('#elementor-tab-content-1552 > p').should('include.text','This information is required so that we can seamlessly integrate with your systems to evaluate your financial performance and set your trade limit.')
}

static  verifyDefaultTextGettingStartedQn3(){
cy.get('#elementor-tab-title-1553 > .elementor-toggle-title').should('include.text','I’m having trouble syncing my systems with BridgeUp. Can you help?')

}
static  verifyDefaultTextGettingStartedAns3(){
cy.get('#elementor-tab-content-1553 > p').should('include.text','Yes! Please reach out to us at support@bridgeup.com')

}


static  verifyDefaultTextGettingStartedQn4(){
cy.get('#elementor-tab-title-1554 > .elementor-toggle-title').should('include.text','I am using a custom accounting method that is not listed on the platform?')

}
static  verifyDefaultTextGettingStartedAns4(){
cy.get('#elementor-tab-content-1554 > p').should('include.text','No problemo! Get in touch with us at support@bridgeup.com and')


}

static verifyDefaultTextForInvesters(){
cy.get('.elementor-element-f2fe8c1 > .elementor-widget-container > .elementor-heading-title').should('include.text','For Investors')

}
static verifyDefaultTextForInvestersQn1(){
cy.get('#elementor-tab-title-3971 > .elementor-toggle-title').should('include.text','I am an investor, how do I know if BridgeUp is right for me?')

}
static verifyDefaultTextForInvestersAns1(){
cy.get('#elementor-tab-content-3971 > p').should('include.text','BridgeUp gives you access to a new asset class')

}
static verifyDefaultTextForInvestersQn2(){
cy.get('#elementor-tab-title-3972 > .elementor-toggle-title').should('include.text','How do I get my money back?')

}
static verifyDefaultTextForInvestersAns2(){
cy.get('#elementor-tab-content-3972 > p').should('include.text','The upfront value of your investment is returned to you in the form of recurring')

}
static verifyDefaultTextForInvestersQn3(){
cy.get('#elementor-tab-title-3973 > .elementor-toggle-title').should('include.text','What is the bid-value an investor must offer for an annual contract?')

}
static verifyDefaultTextForInvestersAns3(){
cy.get('#elementor-tab-content-3973 > p').should('include.text','BridgeUp gives you complete control and allows you to set your own price')

}
static verifyDefaultTextCantFindText(){
cy.get('.th-cta-text > span').should('include.text','Can’t find what you need? Our award-winning customer care team is here.')
}
 }
export default BridgeUpFAQPage

