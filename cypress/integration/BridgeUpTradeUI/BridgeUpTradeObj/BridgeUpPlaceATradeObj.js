/// <reference types ="cypress"/>
class PlaceATrade
{
   static EnterEmail(value)
    {
        const field = cy.get('.mt-8 > .MuiFormControl-root > .MuiFilledInput-root > .MuiFilledInput-input')
        field.clear()
        field.type(value)
        return this 
    }

    static ClickTrade()
    {
        const button = cy.get('.MuiGrid-grid-xs-auto > .MuiButton-root') 
        button.click({timeout: 40000 })
    }

    static verifyDefaultTextNewTrade()
    {       
        cy.get('.pb-3 > :nth-child(1) > .w-full > :nth-child(3)').should('have.text','New Trade')
    }

    static verifyDefaultTextOne()
    {       
        cy.get(':nth-child(1) > .MuiStepLabel-root > .MuiStepLabel-iconContainer > .MuiSvgIcon-root > .MuiStepIcon-text').should('have.text','1')
    }
    
    static verifyDefaultTextSelectContracts()
    {       
        cy.get(':nth-child(1) > .MuiStepLabel-root > .MuiStepLabel-labelContainer > .MuiStepLabel-label').should('have.text','Select Contracts')
    }

    static verifyDefaultTextTwo()
    {       
        cy.get(':nth-child(3) > .MuiStepLabel-root > .MuiStepLabel-iconContainer > .MuiSvgIcon-root > .MuiStepIcon-text').should('have.text','2')
    }

    static verifyDefaultTextPaymentMandate()
    {       
        cy.get(':nth-child(3) > .MuiStepLabel-root > .MuiStepLabel-labelContainer > .MuiStepLabel-label').should('have.text','Payment Mandate')
    }

    static verifyDefaultTextThree()
    {       
        cy.get(':nth-child(5) > .MuiStepLabel-root > .MuiStepLabel-iconContainer > .MuiSvgIcon-root > .MuiStepIcon-text').should('have.text','3')
    }

    static verifyDefaultTextAssetPurchaseAgreement()
    {       
        cy.get(':nth-child(5) > .MuiStepLabel-root > .MuiStepLabel-labelContainer > .MuiStepLabel-label').should('have.text','Asset Purchase Agreement')
    }

    static verifyDefaultTextViewContracts()
    {       
        cy.get('.pr-4').should('have.text','View Contracts:')
    }

    static verifyDefaultTextSelectOfferAmount()
    {       
        cy.get('.MuiGrid-container > :nth-child(1) > .text-18').should('include.text','Select Offer Amount')
    }

    static verifyDefaultTextRemainingTradeLimit()
    {       
        cy.get('div.text-12').should('have.text','Remaining Trade Limit:')
    }

    static verifyDefaultTextTradeSummary()
    {       
        cy.get('.w-full > :nth-child(1) > .text-18').should('have.text','Trade Summary')
    }

    static verifyDefaultTextSelectedContracts()
    {       
        cy.get('.flex-col > :nth-child(1) > div.text-14').should('have.text','Selected Contracts')
    }

    static verifyDefaultTextOfferPrice()
    {       
        cy.get(':nth-child(2) > div.text-14').should('have.text','Offer Price')
    }

    static verifyDefaultTextTotalOfferAmount()
    {       
        cy.get(':nth-child(3) > div.text-14').should('have.text','Total Offer Amount')
    }

    static verifyDefaultTextPlatformFee()
    {       
        cy.get('.pt-4 > div.text-14').should('include.text','Platform Fee')
    }

    static verifyDefaultTextTotalPayout()
    {       
        cy.get('.flex-col > :nth-child(7) > :nth-child(1)').should('have.text','Total Payout')
    }

    static verifyDefaultTextPLACETRADE()
    {       
        cy.get('.MuiButton-root > .text-14').should('have.text','PLACE TRADE')
    }

    static verifyDefaultTextCLEARSELECTION()
    {       
        cy.get('.pt-3').should('have.text','CLEAR SELECTION')
    }

    static ClickpageContracts()
    {       
        cy.wait(15000)
        const button = cy.get('.MuiDataGrid-columnHeaderTitleContainer > .MuiCheckbox-root > .PrivateSwitchBase-input') 
        button.click({ timeout: 40000,force: true })
        cy.wait(15000)
    }

    static ClickNextPage()
    {       
        cy.get('[data-testid="NavigateNextIcon"]').click({timeout: 10000})
    }   

    static ClickPlaceTrade()
    {       
        cy.wait(15000)
        const button = cy.get('.MuiDialogContent-root > .btn-holders > .MuiButton-contained') 
        button.click({ timeout: 40000,force: true })
        cy.wait(15000)
    }

    static verifyDefaultTextPaymentMandate()
    {       
        cy.get(':nth-child(3) > div.text-14').should('have.text','Total Offer Amount')
    }
}      
export default PlaceATrade  