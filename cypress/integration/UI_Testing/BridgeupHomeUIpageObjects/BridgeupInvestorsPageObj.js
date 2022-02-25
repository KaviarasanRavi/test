/// <reference types ="cypress"/>
class BridgeUpInvestors
{
    static CompaniesLove()
    {       
        cy.get('.elementor-element-2e64f02d > .elementor-widget-container > .elementor-heading-title').should('include.text','Companies Love Recurring Revenue ')
    }    
    
    static Receivefixed()
    {       
        cy.get('.elementor-element-62507c9b > .elementor-widget-container > .elementor-heading-title').should('include.text','Receive fixed and predictable returns by investing in recurring revenue.')
    }
    
    static Startinvesting()
    {       
        cy.get('.elementor-element-3b3df350 > .elementor-widget-container > .elementor-button-wrapper > .elementor-button-link > .elementor-button-content-wrapper > .elementor-button-text').should('be.visible')
    }
    
    static SetYour()
    {       
        cy.get('.elementor-element-cc7a615 > .elementor-widget-container > .elementor-heading-title').should('have.text','Set Your Investment Criteria')
    }

    static DifferentInvestors()
    {       
        cy.get('.elementor-element-63ed35b > .elementor-widget-container > .elementor-heading-title').should('include.text','Different Investors have different investment criteria.')
    }    
    
    static BidPurchase()
    {       
        cy.get('.elementor-element-1a9d8459 > .elementor-widget-container > .elementor-heading-title').should('have.text','Bid & Purchase Contracts')
    }      

    static Placecompetitive()
    {       
        cy.get('.elementor-element-5d47e041 > .elementor-widget-container > .elementor-heading-title').should('have.text','Place competitive bids and purchase contracts.')
    }   

    static ReceiveFixedReturns()
    {       
        cy.get('.elementor-element-76f60ff > .elementor-widget-container > .elementor-heading-title').should('have.text','Receive Fixed Returns')
    }
    
    static liquidasset()
    {       
        cy.get('.elementor-element-71fdcb8 > .elementor-widget-container > .elementor-heading-title').should('have.text','Receive fixed income returns on a liquid asset.')
    }     
    
    static UncorrelatedAsset()
    {       
        cy.get('.elementor-element-99d6d2f > .elementor-widget-container > .elementor-heading-title').should('have.text','Uncorrelated Asset')
    }

    static marketfluctuation()
    {       
        cy.get('.elementor-element-e1e4923 > .elementor-widget-container > .elementor-heading-title').should('have.text','Investments in recurring revenue contracts are unaffected by market fluctuation.')
    }     

    static DiversifyYour()
    {       
        cy.get('.elementor-element-0a19689 > .elementor-widget-container > .elementor-heading-title').should('have.text','Diversify Your Portfolio With Recurring Revenue')
    }

    static Startinvesting()
    {       
        cy.get('.elementor-element-b2dc21a > .elementor-widget-container > .elementor-button-wrapper > .elementor-button-link').should('include.text','Start investing')
    }
}

export default BridgeUpInvestors