/// <reference types ="cypress"/>
class PaymentMandatepage
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
    static ClickContinueTrading()
    {
        cy.get('.MuiAlert-action > a').click({timeout: 10000})
    } 
    



    static verifyDefaultTextRegister()
    {       
        cy.get('.text-24').should('have.text','Register for Payment Mandate')
    }

    static verifyDefaultTextApaymentmandate()
    {       
        cy.get('.px-4 > :nth-child(1) > .text-14').should('have.text','A payment mandate is generated to handle recurring payments without any hassle. This mandate will automate the transfer of your monthly payments for this trade to the investor account.')
    }

    static verifyDefaultTextCOMPLETELATER()
    {       
        cy.get('.MuiGrid-grid-md-auto > .MuiButton-root').should('have.text','COMPLETE LATER')
    }

    
    static verifyDefaultTextNext()
    {       
        cy.get('.MuiGrid-grid-md-2').should('have.text','Next')
    }

    static verifyDefaultTextTradeSummary()
    {       
        cy.get('.text-18').should('have.text','Trade Summary')
    }

    static verifyDefaultTextSelectedContracts()
    {       
        cy.get('.flex-col > :nth-child(1) > div.text-14').should('have.text','Selected Contracts')
    }

    static verifyDefaultTextOfferPrice()
    {       
        cy.get('.flex-col > :nth-child(2) > div.text-14').should('have.text','Offer Price')
    }

    static verifyDefaultTextTotalOfferAmount()
    {       
        cy.get(':nth-child(3) > div.text-14').should('have.text','Total Offer Amount')
    }

    static verifyDefaultTextPlatformFee()
    {       
        cy.get('.pt-4 > div.text-14').should('include.text','Platform Fee')
    }

    static verifyDefaultTextTermLength()
    {       
        cy.get(':nth-child(7) > :nth-child(1)').should('have.text','Term Length')
    }

    static verifyDefaultTextTotalPayout()
    {       
        cy.get('.mr-1 > .text-14').should('have.text','Total Payout')
    }
     
    
    static verifyDefaultTextMonthlyAmount()
    {       
        cy.get('.ml-1 > .text-14').should('have.text','Monthly Amount')
    }

    static verifyDefaultTextYourbankaccount()
    {       
        cy.get('.font-medium').should('have.text','Your bank account will be debited with Monthly Amount every month. However, NACH Mandate displays a Maximum Amount to cover for any missed/delayed payments and any applicable penalty charges during the term of the facility.')
    }
}

export default PaymentMandatepage