/// <reference types ="cypress"/>
class BridgeUpcareerpage
{
   static verifyDefaultTitleDriven()
    {       
        cy.get('.elementor-element-9cc0c65 > .elementor-widget-container > .elementor-heading-title').should('have.text','Driven By Disruption')
    }     
      
    static verifyDefaultTextBridgeUpIntroduces()
    {       
        cy.get('.elementor-element-69cb7f2 > .elementor-widget-container > .elementor-heading-title').should('have.text','BridgeUp introduces a new way of fundraising for companies with recurring revenue.')
    }
}

export default BridgeUpcareerpage