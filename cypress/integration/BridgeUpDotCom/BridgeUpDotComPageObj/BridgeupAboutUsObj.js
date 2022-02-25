/// <reference types ="cypress"/>
class BridgeAboutUsPage
{
   static verifyDefaultTitleDriven()
    {       
        cy.get('.elementor-element-9cc0c65 > .elementor-widget-container > .elementor-heading-title').should('have.text','Driven By Disruption')
    }     
      
    static verifyDefaultTextBridgeUpIntroduces()
    {       
        cy.get('.elementor-element-69cb7f2 > .elementor-widget-container > .elementor-heading-title').should('have.text','BridgeUp introduces a new way of fundraising for companies with recurring revenue.')
    }

    static verifyDefaultTitleAboutBridgeUp()
    {       
        cy.get('.elementor-element-2f52cfe > .elementor-widget-container > .elementor-heading-title').should('have.text','About BridgeUp')
    }

    static verifyDefaultTextAMethodFor()
    {       
        cy.get('.elementor-element-8b76f2b > .elementor-widget-container > .elementor-heading-title').should('include.text','A method for businesses to raise capital, without having to jump through the hoops of traditional fundraising or bear the burdens of debt or dilution.')
    }

    static verifyDefaultTitlePurpose()
    {       
        cy.get('.elementor-element-931c56a > .elementor-widget-container > .elementor-heading-title').should('have.text','Purpose & Passion')
    }

    static verifyDefaultTextOurTeamOf()
    {       
        cy.get('.elementor-element-675c7de > .elementor-widget-container > .elementor-heading-title').should('have.text','Our team of insanely talented, detail-obsessed individuals is the lifeblood of our organization. We believe in going the extra mile, ten times over, in our effort to create the next-big-thing. ')
    }

    static verifyDefaultTextEnsemple()
    {       
        cy.get('.elementor-element-3879e3a0 > .elementor-widget-container > .elementor-heading-title').should('have.text','The Ensemble')
    }

    static verifyDefaultNameParijat()
    {       
        cy.get('.elementor-element-f80eee7 > .elementor-column-wrap > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .th-team-member > .th-team-member-content > :nth-child(1) > .th-team-member-name').should('have.text','Parijat Garg')
    }

    static verifyDefaultNameSiddhant()
    {       
        cy.get('.elementor-element-119c3a6 > .elementor-column-wrap > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .th-team-member > .th-team-member-content > :nth-child(1) > .th-team-member-name').should('have.text','Siddhant Gupta')
    }

    static verifyDefaultNameAnurag()
    {       
        cy.get('.elementor-element-42416a9 > .elementor-column-wrap > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .th-team-member > .th-team-member-content > :nth-child(1) > .th-team-member-name').should('have.text','Anurag Santhalia')
    }

    static verifyDefaultNameAdhityaLohia()
    {       
        cy.get('.elementor-element-b14907a > .elementor-column-wrap > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .th-team-member > .th-team-member-content > :nth-child(1) > .th-team-member-name').should('have.text','Aditya Lohia')
    }

    static verifyDefaultNameDipenPatel()
    {       
        cy.get('.elementor-element-2468f8a1 > .elementor-column-wrap > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .th-team-member > .th-team-member-content > :nth-child(1) > .th-team-member-name').should('have.text','Dipen Patel')
    }

    static verifyDefaultNameJahangirpanday()
    {       
        cy.get('.elementor-element-9077fc1 > .elementor-column-wrap > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .th-team-member > .th-team-member-content > :nth-child(1) > .th-team-member-name').should('have.text','Jahangir Panday')
    }

    static verifyDefaultNameZeusDhanbhoora()
    {       
        cy.get('.elementor-element-235dba4 > .elementor-column-wrap > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .th-team-member > .th-team-member-content > :nth-child(1) > .th-team-member-name').should('have.text',' Zeus Dhanbhoora')
    }

    static verifyDefaultNameDhineshkumar()
    {       
        cy.get('.elementor-element-8a8a679 > .elementor-column-wrap > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .th-team-member > .th-team-member-content > :nth-child(1) > .th-team-member-name').should('have.text','Dinesh Kumar Mehrotra')
    }

    static verifyDefaultNameSaumen()
    {       
        cy.get('.elementor-element-f14eeea > .elementor-column-wrap > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .th-team-member > .th-team-member-content > :nth-child(1) > .th-team-member-name').should('have.text','Saumen Chakraborty')
    }

    static verifyDefaultNameDaruvala()
    {       
        cy.get('.elementor-element-ca640ae > .elementor-column-wrap > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .th-team-member > .th-team-member-content > :nth-child(1) > .th-team-member-name').should('have.text','Toos N. Daruvala')
    }
}

export default BridgeAboutUsPage