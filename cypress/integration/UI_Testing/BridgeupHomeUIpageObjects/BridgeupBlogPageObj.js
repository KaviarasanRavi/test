/// <reference types ="cypress"/>
class BridgeUpBlogPage
{
   static verifyDefaultTextBlog()
    {       
        cy.get('.elementor-icon-box-title > span').should('have.text','Blog')
    }     
      
    static verifyDefaulTextReadOur()
    {       
        cy.get('.elementor-icon-box-description').should('have.text','Read our latest updates')
    }

    static verifyDefaultLink1()
    {       
        cy.get('.post-3287 > :nth-child(1) > .img-responsive').should('have.string','https://bridgeup.com/wp-content/uploads/2021/12/bridge-up-02-1-394x222.jpg')
    }

    static verifyDefaultLink2()
    {       
        cy.get('.post-3184 > :nth-child(1) > .img-responsive').should('have.string','https://bridgeup.com/wp-content/uploads/2021/12/bridge-up-02-1-394x222.jpg')
    }

    static verifyDefaultLink3()
    {       
        cy.get('.post-3176 > :nth-child(1) > .img-responsive').should('have.string','https://bridgeup.com/wp-content/uploads/2021/12/bridge-up-02-1-394x222.jpg')
    }

    static verifyDefaultLink4()
    {       
        cy.get('.post-2939 > :nth-child(1) > .img-responsive').should('have.string','https://bridgeup.com/wp-content/uploads/2021/12/bridge-up-02-1-394x222.jpg')
    }

    static verifyDefaultLinkText1()
    {       
        cy.get('.post-3287 > .post-inner > .post-title > a').should('have.text','How BridgeUp is Different from Equity Financing')
    }

    static verifyDefaultLinkText2()
    {       
        cy.get('.post-3184 > .post-inner > .post-title > a').should('have.text','Why Get Paid Upfront?')
    }

    static verifyDefaultLinkText3()
    {       
        cy.get('.post-3176 > .post-inner > .post-title > a').should('have.text','How to Manage Cashflow Efficiently to ‘Power of Non-dilutive Financing’')
    }

    static verifyDefaultLinkText4()
    {       
        cy.get('.post-2939 > .post-inner > .post-title > a').should('have.text','A new way to get funding for SaaS Companies')
    }
}

export default BridgeUpBlogPage