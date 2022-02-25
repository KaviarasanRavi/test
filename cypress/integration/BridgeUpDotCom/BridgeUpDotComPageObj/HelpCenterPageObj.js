/// <reference types ="cypress"/>
class HelpCenterPage
{
    static verifyDefaultTextHelpCenter()
    {       
        cy.get('.elementor-icon-box-title > span').should('have.text','Help Center')
    } 

    static typeFirstName(value)
    {
        const field = cy.get('#field_xipbjr3d8709488905740b8e9d61072de8a83')
        field.clear()
        field.type(value)
        return this 
    }       
    
    static typeLastName(value)
    {       
        const field = cy.get('#field_k6byybf982abd964c8351b035')
        field.clear()
        field.type(value)
        return this 
    }

    static typeMobileNumber(value)
    {
        const field = cy.get('#field_cqpguu3afd3d9067d4eb34339a6c4460af162')
        field.clear()
        field.type(value)
        return this 
    }

    static typeWhatWeCanDo(value)
    {
        const field = cy.get('#field_zsny60d435a4351')
        field.clear()
        field.type(value)
        return this 
    }

    static ClickSubmit()     
    {
        const button = cy.get('.frm_submit > input') 
        button.click({ timeout: 40000 })
    } 

    static verifyHelpCenterformsignedup()
    {       
        cy.wait(10000)
        cy.get('.frm_message > p').should('include.text','Thank you!')
    } 
    static verifyHelpCenterformNotsignedup()
    {       
        cy.wait(10000)
        cy.get('.frm_message > p').should('include.text','Thank you!')
    } 

    static verifyTitleHelpCenter()
    {       
        cy.get('.elementor-icon-box-title > span').should('include.text','Help Center')
    }   
   
    static verifyTitleOpenASupport()
    {       
        cy.get('.elementor-heading-title').should('include.text','Open a Support Ticket')
    }     

    static verifyDefaultTextFirstName()
    {       
        cy.get('#frm_field_81_container > .frm_primary_label').should('include.text','First Name')
    }

    static verifyDefaultTextLastName()
    {       
        cy.get('#frm_field_82_container > .frm_primary_label').should('include.text','Last Name')
    }     
   
    static verifyDefaultTextMobileNumber()
    {       
        cy.get('#frm_field_83_container > .frm_primary_label').should('include.text','Mobile Number')
    }

    static verifyDefaultTextWhatCanWe()
    {       
        cy.get('#field_zsny60d435a4351_label').should('include.text','What Can We Help You With?')
    }
}    

export default HelpCenterPage