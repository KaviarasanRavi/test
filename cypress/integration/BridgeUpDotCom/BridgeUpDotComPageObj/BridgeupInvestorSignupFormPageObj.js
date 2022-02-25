/// <reference types ="cypress"/>
class BridgeUpInvestorsFormPage
{
    static verifyDefaultTextDiversify()
    {       
        cy.get('.elementor-icon-box-title > span').should('have.text','Diversify Your Portfolio With Recurring Revenue')
    } 

    static verifyDefaultLookingForSupport()
    {       
        cy.get('.elementor-element-7e2e76d7 > .elementor-column-wrap > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .elementor-heading-title').should('have.text','Looking for support? Visit our help center.')
    }

    static verifyDefaultTextFirstname()
    {       
        cy.get('#frm_field_60_container > .frm_primary_label').should('include.text','First Name')
    } 

    static verifyDefaultTextLastname()
    {       
        cy.get('#frm_field_61_container > .frm_primary_label').should('include.text','Last Name')
    } 

    static verifyDefaultTextMobilenumber()
    {       
        cy.get('#frm_field_62_container > .frm_primary_label').should('include.text','Mobile Number')
    } 

    static verifyDefaultTextNameOfInstitution()
    {       
        cy.get('#frm_field_64_container > .frm_primary_label').should('include.text','Name of Institution')
    } 

    static verifyDefaultTextEstimatedCommitment()
    {       
        cy.get('#field_dhje339b0f8d31c_label').should('have.text','Estimated Commitment')
    }

    static verifyDefaultTextWorkEmail()
    {       
        cy.get('#frm_field_67_container > .frm_primary_label').should('include.text','Work Email Address')
    } 

    static typeFirstName(value)
    {
        const field = cy.get('#field_xipbjr3d870948890fa25111cc2')
        field.clear()
        field.type(value)
        return this 
    }       

    static typeLastName(value)
    {
        const field = cy.get('#field_k6byy3bcf6cab59')
        field.clear()
        field.type(value)
        return this 
    }

    static typeMobileNumber(value)
    {
        const field = cy.get('#field_cqpguu3afd3d9067dafd29c3a36')
        field.clear()
        field.type(value)
        return this 
    }

    static typeNameOfInstitution(value)
    {
        const field = cy.get('#field_pjylof6c3475367')
        field.clear()
        field.type(value)
        return this 
    }

    static typeEstimated(value)
    {
        cy.get('#field_dhje339b0f8d31c').select(value);
    }    

    static typeWorkEmail(value)
    {
        const field = cy.get('#field_jaehy838bd03d80d1465ee8f3d9')
        field.clear()
        field.type(value)
        return this 
    }

    static ClickSubmit()     
    {
        const button = cy.get('.frm_submit > input') 
        button.click({ timeout: 40000 })
    } 

    static verifyinvestorformsignedup()
    {       
        cy.wait(10000)
        cy.get('.frm_message > p').should('include.text','Thank you!')
    } 

    static verifyinvestorformNotsignedup()
    {       
        cy.wait(10000)
        cy.get('.frm_message > p').should('not.include.text','Thank you!')
    } 
   
}

export default BridgeUpInvestorsFormPage