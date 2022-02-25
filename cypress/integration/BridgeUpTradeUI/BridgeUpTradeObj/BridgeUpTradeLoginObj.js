/// <reference types ="cypress"/>
class TradeLoginpage
{
   static EnterEmail(value)
    {
        const field = cy.get('.mt-8 > .MuiFormControl-root > .MuiFilledInput-root > .MuiFilledInput-input')
        field.clear()
        field.type(value)
        return this 
    }

    static EnterPassword(value)
    {
        const field = cy.get('.mt-10 > .MuiFormControl-root > .MuiFilledInput-root > .MuiFilledInput-input')
        field.clear()
        field.type(value)
        return this
    }
    static ClickLogin()
    {
        const button = cy.get('.MuiButton-contained') 
        button.click({ timeout: 40000 })
        cy.wait(15000)
    }
    static ClickLogout()
    {
      cy.wait(5000)
      const button = cy.get('.stepper-logout')
      button.click()
      cy.wait(5000)
    }

    static verifyDefaulTextwelcome()
    {       
        cy.get('.font-normal').should('have.text','Welcome')
    }

    static verifyDefaulTextBRIDGEUP()
    {       
        cy.get('.css-1wxaqej > .MuiGrid-root > :nth-child(3)').should('have.text','BRIDGEUP TECH PRIVATE LIMITED')
    }

    static verifyDefaulTextAvailableARR()
    {       
        cy.get(':nth-child(1) > .bup-dashboard-stats-card > .full-w > :nth-child(2) > .MuiTypography-root').should('have.text','Available ARR')
    }

    static verifyDefaulTextFacilityLimit()
    {       
        cy.get(':nth-child(2) > .bup-dashboard-stats-card > .full-w > .css-1sq1ipl > .MuiTypography-root').should('have.text','Facility Limit')
    }

    static verifyDefaulTextTotalAmountTraded()
    {       
        cy.get(':nth-child(3) > .bup-dashboard-stats-card > .full-w > .css-1sq1ipl > .MuiTypography-root').should('have.text','Total Amount Traded')
    }

    static verifyDefaulTextRemainingTradeLimit()
    {       
        cy.get(':nth-child(4) > .bup-dashboard-stats-card > .full-w > .css-1sq1ipl > .MuiTypography-root').should('have.text','Remaining Trade Limit')
    }

    static verifyDefaulTextOfferPrice()
    {       
        cy.get(':nth-child(5) > .bup-dashboard-stats-card > .css-1b1jvye > .css-1sq1ipl > .MuiTypography-root').should('have.text','Offer Price')
    }
    static verifyDefaulTextPrimaryLinkedAccount()
    {       
        cy.get(':nth-child(1) > .MuiCardHeader-root > .MuiCardHeader-content > .MuiTypography-root').should('have.text','Primary Linked Account')
    }
      
    static verifyDefaulTextUpcomingPayments()
    {       
        cy.get(':nth-child(2) > .MuiCardHeader-root > .MuiCardHeader-content > .MuiTypography-root').should('have.text','Upcoming Payments')
    }
}
export default TradeLoginpage  