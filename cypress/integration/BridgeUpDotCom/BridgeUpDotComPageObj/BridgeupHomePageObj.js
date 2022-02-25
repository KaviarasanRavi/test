/// <reference types ="cypress"/>
class BridgeUpHome
{
    static verifyBridgeuplogo2()
    {       
        cy.get('a > .flogo').scrollIntoView();
        cy.get('a > .flogo').should('be.visible')
    }
    static verifyDefaultBridgeupLogo()
    {       
        cy.get(':nth-child(10) > .container > .navbar-header > #logo > a > .logo-trans').should('be.visible')
        
    }

    static verifyDefaultLinkInvestors()
    {       
        cy.get(':nth-child(10) > .container > .collapse > #menu-main > .menu-item-499 > a').should('have.text','For Investors')
       
    }    
    
    static verifyDefaultLinkContent()
    {       
        cy.get(':nth-child(10) > .container > .collapse > #menu-main > .menu-item-2548 > .dropdown-toggle').should('have.text','Content ')
    }

    static verifyDefaultLinkCompany()
    {       
        cy.get(':nth-child(10) > .container > .collapse > #menu-main > .menu-item-794 > .dropdown-toggle').should('have.text','Company ')
    }     

    static verifyDefaultLinkContact()
    {       
        cy.get(':nth-child(10) > .container > .collapse > #menu-main > .menu-item-502 > a').should('have.text','Contact')
    }

    static verifyDefaultLinkLogin()
    {       
        cy.get(':nth-child(10) > .container > .collapse > #menu-main > .menu-item-3017 > a').should('have.text','Login')
    }     

    static verifyDefaultLinkGetCapital()
    {       
        cy.get(':nth-child(10) > .container > .collapse > #menu-main > .th-accent > a').should('have.text','Get Capital')
    }
    
    static verifyDefaultTextRevenue()
    {       
        cy.get('.elementor-element-2e64f02d > .elementor-widget-container > .elementor-heading-title').should('have.text','Revenue Is Your Best Asset')
    }

    static verifyDefaultTextAccessinstant()
    {       
        cy.get('.elementor-element-62507c9b > .elementor-widget-container > .elementor-heading-title').should('include.text','Access instant capital by encashing your recurring revenue ')
    }    

    static verifyDefaultLinkGetStarted()
    {       
        cy.get('.elementor-element-3b3df350 > .elementor-widget-container > .elementor-button-wrapper > .elementor-button-link > .elementor-button-content-wrapper > .elementor-button-text').should('have.text','Get Started')
    }    

    static verifyDefaultMyDashboardImage()
    {       
        cy.get('.elementor-element-3b3df350 > .elementor-widget-container > .elementor-button-wrapper > .elementor-button-link > .elementor-button-content-wrapper > .elementor-button-text').should('be.visible')
    }

    static verifyDefaultTextGetPaidUpfront()
    {       
        cy.get('.elementor-element-1a9d8459 > .elementor-widget-container > .elementor-heading-title').should('have.text','Get Paid Upfront')     
    }     

    static verifyDefaultTextReceiveTheAnnual()
    {       
        cy.get('.elementor-element-5d47e041 > .elementor-widget-container > .elementor-heading-title').should('have.text','Receive the annual value of your monthly contracts within 48 hours.')     
    }     

    static verifyDefaultUiImage1()
    {       
        cy.get('.elementor-element-df93996 > .elementor-column-wrap > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .elementor-image > .attachment-full').should('be.visible')     
    }

    static verifyDefaultUiImage2()
    {       
        cy.get('.elementor-element-2d9e4fb > .elementor-column-wrap > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .elementor-image > .attachment-full').should('be.visible')     
    }    

    static verifyDefaultUiImage3()
    {       
        cy.get('.elementor-element-de86acb > .elementor-column-wrap > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .elementor-image > .attachment-full').should('be.visible')     
    }   

    static verifyDefaultUiImage4()
    {       
        cy.get('.elementor-element-25a197b > .elementor-column-wrap > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .elementor-image > .attachment-full').should('be.visible')     
    }  

    static verifyDefaultUiSmallImage1()  
    {       
        cy.get('.elementor-element-660deaca > .elementor-widget-container').should('be.visible')     
    }

    static verifyDefaultUiSmallImage2()
    {       
        cy.get('.elementor-element-406709bd > .elementor-widget-container').should('be.visible')     
    }

    static verifyDefaultUiSmallImage3()
    {       
        cy.get('.elementor-element-29a0b5f1 > .elementor-widget-container').should('be.visible')     
    }

    static verifyDefaultUiSmallImage4()
    {       
        cy.get('.elementor-element-2236e885 > .elementor-widget-container').should('be.visible')     
    }

    static verifyDefaultUiSmallImage5()
    {       
        cy.get('.elementor-element-115dda48 > .elementor-widget-container').should('be.visible')     
    }

    static verifyDefaultUiSmallImage6()
    {       
        cy.get('.elementor-element-53b9fc36 > .elementor-widget-container').should('be.visible')     
    } 
    
    static verifyDefaultTextCatch()
    {       
        cy.get('.elementor-element-76f60ff > .elementor-widget-container > .elementor-heading-title').should('include.text','the catch?')
        cy.get('.elementor-element-71fdcb8 > .elementor-widget-container > .elementor-heading-title').should('be.visible')
    }   
    
    static verifyDefaultTextFlawlessIntegration()
    {       
        cy.get('.elementor-element-1054d78 > .elementor-widget-container > .elementor-heading-title').should('have.text','Flawless Integration')
    } 

    static verifyDefaultTextIntuitive()
    {       
        cy.get('.elementor-element-4060671 > .elementor-widget-container > .elementor-heading-title').should('have.text','Intuitive & Effortless')
    }

    static verifyDefaultTextSelect()
    {       
        cy.get('.elementor-element-f967a2b > .elementor-widget-container > .elementor-icon-box-wrapper > .elementor-icon-box-content > .elementor-icon-box-title > span').should('have.text','Select')
    }

    static verifyDefaultTextSelectcontracts()
    {       
        cy.get('.elementor-element-f967a2b > .elementor-widget-container > .elementor-icon-box-wrapper > .elementor-icon-box-content > .elementor-icon-box-description').should('have.text','Select contracts to trade.')
    }
    
    static verifyDefaultTextPayout()
    {       
        cy.get('.elementor-element-05ae656 > .elementor-widget-container > .elementor-icon-box-wrapper > .elementor-icon-box-content > .elementor-icon-box-title > span').should('have.text','Payout')
    }

    static verifyDefaultTextInstantpayout()
    {       
        cy.get('.elementor-element-05ae656 > .elementor-widget-container > .elementor-icon-box-wrapper > .elementor-icon-box-content > .elementor-icon-box-description').should('have.text','Instant payout within 48 hours.')
    }

    static verifyDefaultTextPayback()  
    {       
        cy.get('.elementor-element-a73c22b > .elementor-widget-container > .elementor-icon-box-wrapper > .elementor-icon-box-content > .elementor-icon-box-title > span').should('have.text','Payback')
    }  
    
    static verifyDefaultTextPaybackwhen()
    {       
        cy.get('.elementor-element-a73c22b > .elementor-widget-container > .elementor-icon-box-wrapper > .elementor-icon-box-content > .elementor-icon-box-description').should('have.text','Pay back when customers pay you.')
    }
    static verifyWhoCan()
    {       
        cy.get('.elementor-element-343debeb > .elementor-widget-container > .elementor-heading-title').should('have.text','Who Can BridgeUp?')
    }
    static verifyDefaultTextthesky()
    {       
        cy.get('.elementor-element-6c86c207 > .elementor-widget-container > .elementor-heading-title').should('include.text','BridgeUp is industry agnostic, and the sky')
    }

    static verifyDefaultTextTakeOur()
    {       
        cy.get('.elementor-element-4c95a48 > .elementor-widget-container > .elementor-heading-title').should('include.text','Take Our Word For It')
    }
    static verifyDefaultSwiper()
    {       
        cy.get('.swiper-pagination').should('be.visible')
    }
    static verifyDefaultTextNeedInstant()
    {       
        cy.get('.elementor-element-36947e56 > .elementor-widget-container > .elementor-heading-title').should('have.text','Need Instant Capital?\nBridgeUp Your Revenue')
    }
    static verifyDefaultLinkGetcapital2()
    {       
        cy.get('.elementor-element-227ba45b > .elementor-widget-container > .elementor-button-wrapper > .elementor-button-link > .elementor-button-content-wrapper > .elementor-button-text').should('have.text','Get capital')
    }
    static verifyDefaultFooterMain()
    {       
        cy.get('.footer-area-1 > .widget > .widget-inner > .widget-title').should('have.text','Main')
    }

    static verifyDefaultFooterContent()
    {       
        cy.get('.footer-area-2 > .widget > .widget-inner > .widget-title').should('have.text','Content')
    }

    static verifyDefaultFooterCompany()
    {       
        cy.get('.footer-area-3 > .widget > .widget-inner > .widget-title').should('have.text','Company')
    }

    static verifyDefaultFooterReachOut()
    {       
        cy.get('.footer-area-4 > .widget > .widget-inner > .widget-title').should('have.text','Reach Out')
    }

    static verifyDefaultFooterHome()
    {       
        cy.get('.current-menu-item > a').should('have.text','Home')
    }

    static verifyDefaultFooterFAQs()
    {       
        cy.get('#menu-footer-content > .menu-item-type-custom > a').should('have.text','FAQs')
    }

    
    static verifyDefaultFooterAboutUs()
    {       
        cy.get('.menu-item-832 > a').should('have.text','About Us')
    }

    static verifyDefaultFooterContact()
    {       
        cy.get('.menu-item-834 > a').should('have.text','Contact')
    }

    static verifyDefaultFooterForInvestors()
    {       
        cy.get('.menu-item-828 > a').should('have.text','For Investors')
    }

    static verifyDefaultFooterBlog()
    {       
        cy.get('#menu-footer-content > .menu-item-type-post_type > a').should('have.text','Blog')
    }

    static verifyDefaultFooterCareers()
    {       
        cy.get('.menu-item-833 > a').should('have.text','Careers')
    }

    static verifyDefaultFooterGetCapital()
    {       
        cy.get('.menu-item-835 > a').should('have.text','Get Capital')
    }    
    static verifylinkedInlogo()
    {       
        cy.get('[href="https://www.linkedin.com/company/bridgeup/"] > .fa').should('be.visible')
    }     
     
    static verifyTwitterlogo()
    {       
        cy.get('[href="https://twitter.com/bridgeuphq"] > .fa').should('be.visible')
    }     
    
    static verifyDefaultBridgeUpTechPvtLtd()
    {       
        cy.get('.footer_credit > [href="https://bridgeup.com"]').should('have.text','BridgeUp Tech Pvt Ltd.')
    }

    // static verifyDefaultPrivacypolicy()
    // {       
    //     cy.get('[href="https://cdn.bridgeup.com/policy/privacy.pdf"]')
    // }    

    // static verifyDefaultTermsandConditions()
    // {       
    //     cy.get('[href="https://cdn.bridgeup.com/policy/terms.pdf"]')
    // }
}



export default BridgeUpHome