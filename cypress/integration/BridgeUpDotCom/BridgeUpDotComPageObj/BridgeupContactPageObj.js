/// <reference types ="cypress"/>
class BridgeUpContactPage
{
    static verifyDefaultTextContactUs()
    {       
        cy.get('.elementor-element-70c1203 > .elementor-container > .elementor-row > .elementor-column > .elementor-column-wrap > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .elementor-heading-title').should('have.text','Contact Us')
    }     
      
    static verifyDefaultMobileNum()
    {       
        cy.get('.elementor-element-5fd1afa2 > .elementor-widget-container > .th-service-block-w > .elementor-icon-box-wrapper > .elementor-icon-box-content > .elementor-icon-box-title > a').should('have.text','+91 98196 60287')
    }

    static verifyDefaultEmail()
    {       
        cy.get('.elementor-element-2dd690d4 > .elementor-widget-container > .th-service-block-w > .elementor-icon-box-wrapper > .elementor-icon-box-content > .elementor-icon-box-title > a').should('have.text','contact@bridgeup.com')
    }

    static verifyDefaultTitleHeadOffice()
    {       
        cy.get('.elementor-icon-box-title > span').should('have.text','Head Office')
    }

    static verifyDefaultAddress()
    {       
        cy.get('.elementor-element-905525f > .elementor-widget-container > .th-service-block-w > .elementor-icon-box-wrapper > .elementor-icon-box-content > .elementor-icon-box-description').should('include.text','31/C 3rd Floor')
    }  

    static verifyDefaultTitleSendUsAMessage()
    {       
        cy.get('.elementor-element-78760bc8 > .elementor-widget-container > .elementor-heading-title').should('have.text','Send us a message')
    }  

    static verifyDefaultLookingForSupport()
    {       
        cy.get('.elementor-element-7e2e76d7 > .elementor-column-wrap > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .elementor-heading-title').should('have.text','Looking for support? Visit our help center.')
    }

    static typeName(value)
    {
        const field = cy.get('#field_xipbjr3')
        field.clear()
        field.type(value)
        return this 
    } 
    
    static typeEmail(value)
    {
        const field = cy.get('#field_jaehy83')
        field.clear()
        field.type(value)
        return this 
    }

    static typePhone(value)
    {
        const field = cy.get('#field_cqpguu3')
        field.clear()
        field.type(value)
        return this 
    }

    static typeSubject(value)
    {
        const field = cy.get('#field_w7ueyk3')
        field.clear()
        field.type(value)
        return this 
    }
                                                                                                                               
    static typeMessage(value)
    {
        const field = cy.get('#field_kggkvh3')
        field.clear()
        field.type(value)
        return this 
    }      

    static ClickSubmit()     
    {
        const button = cy.get('.frm_submit > input') 
        button.click({ timeout: 40000 })
    }   

    static verifyFormSubmitted()
    {       
        cy.get('.frm_message > p').should('have.text','Your message has been submitted. Thank you!')
    }

}

export default BridgeUpContactPage