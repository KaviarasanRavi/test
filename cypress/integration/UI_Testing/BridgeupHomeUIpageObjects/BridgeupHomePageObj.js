/// <reference types ="cypress"/>
class BridgeUpHome
{
    static bridgeupLogo()
    {       
        cy.get(':nth-child(2) > .container > .navbar-header > #logo > a > .logo-trans').should('be.visible')
    }

    static defaultLinkInvestors()
    {       
        cy.get(':nth-child(2) > .container > .collapse > #menu-main > .menu-item-499 > a').should('have.text','For Investors')
    }    
    
    static defaultLinkContent()
    {       
        cy.get(':nth-child(2) > .container > .collapse > #menu-main > .menu-item-2548 > .dropdown-toggle').should('have.text','Content ')
    }

    static defaultLinkCompany()
    {       
        cy.get(':nth-child(2) > .container > .collapse > #menu-main > .menu-item-794 > .dropdown-toggle').should('have.text','Company ')
    }     

    static defaultLinkContact()
    {       
        cy.get(':nth-child(2) > .container > .collapse > #menu-main > .menu-item-502 > a').should('have.text','Contact')
    }

    static defaultLinkLogin()
    {       
        cy.get(':nth-child(2) > .container > .collapse > #menu-main > .menu-item-3017 > a').should('have.text','Login')
    }     

    static defaultLinkGetCapital()
    {       
        cy.get(':nth-child(2) > .container > .collapse > #menu-main > .th-accent > a').should('have.text','Get Capital')
    }
    
    static defaultTextRevenue()
    {       
        cy.get('.elementor-element-2e64f02d > .elementor-widget-container > .elementor-heading-title').should('have.text','Revenue Is Your Best Asset')
    }

    static defaultTextAccessinstant()
    {       
        cy.get('.elementor-element-62507c9b > .elementor-widget-container > .elementor-heading-title').should('include.text','Access instant capital by encashing your recurring revenue ')
    }    

    static defaultLinkGetStarted()
    {       
        cy.get('.elementor-element-3b3df350 > .elementor-widget-container > .elementor-button-wrapper > .elementor-button-link > .elementor-button-content-wrapper > .elementor-button-text').should('have.text','Get Started')
    }    

    static defaultMyDashboardImage()
    {       
        cy.get('.elementor-element-3b3df350 > .elementor-widget-container > .elementor-button-wrapper > .elementor-button-link > .elementor-button-content-wrapper > .elementor-button-text').should('be.visible')
    }

    static defaultTextGetPaidUpfront()
    {       
        cy.get('.elementor-element-1a9d8459 > .elementor-widget-container > .elementor-heading-title').should('have.text','Get Paid Upfront')     
    }     

    static defaultTextReceiveTheAnnual()
    {       
        cy.get('.elementor-element-5d47e041 > .elementor-widget-container > .elementor-heading-title').should('have.text','Receive the annual value of your monthly contracts within 48 hours.')     
    }     

    static defaultUiImage1()
    {       
        cy.get('.elementor-element-df93996 > .elementor-column-wrap > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .elementor-image > .attachment-full').should('be.visible')     
    }

    static defaultUiImage2()
    {       
        cy.get('.elementor-element-2d9e4fb > .elementor-column-wrap > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .elementor-image > .attachment-full').should('be.visible')     
    }    

    static defaultUiImage3()
    {       
        cy.get('.elementor-element-de86acb > .elementor-column-wrap > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .elementor-image > .attachment-full').should('be.visible')     
    }   

    static defaultUiImage4()
    {       
        cy.get('.elementor-element-25a197b > .elementor-column-wrap > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .elementor-image > .attachment-full').should('be.visible')     
    }  

    static defaultUiSmallImage1()
    {       
        cy.get('.elementor-element-660deaca > .elementor-widget-container').should('be.visible')     
    }

    static defaultUiSmallImage2()
    {       
        cy.get('.elementor-element-406709bd > .elementor-widget-container').should('be.visible')     
    }

    static defaultUiSmallImage3()
    {       
        cy.get('.elementor-element-29a0b5f1 > .elementor-widget-container').should('be.visible')     
    }

    static defaultUiSmallImage4()
    {       
        cy.get('.elementor-element-2236e885 > .elementor-widget-container').should('be.visible')     
    }

    static defaultUiSmallImage5()
    {       
        cy.get('.elementor-element-115dda48 > .elementor-widget-container').should('be.visible')     
    }

    static defaultUiSmallImage6()
    {       
        cy.get('.elementor-element-53b9fc36 > .elementor-widget-container').should('be.visible')     
    } 
    
    static defaultTextCatch()
    {       
        cy.get('.elementor-element-76f60ff > .elementor-widget-container > .elementor-heading-title').should('include.text','the catch?')
        cy.get('.elementor-element-71fdcb8 > .elementor-widget-container > .elementor-heading-title').should('be.visible')
    }   
    
    static defaultTextFlawlessIntegration()
    {       
        cy.get('.elementor-element-1054d78 > .elementor-widget-container > .elementor-heading-title').should('have.text','Flawless Integration')
    } 

    static defaultTextIntuitive()
    {       
        cy.get('.elementor-element-4060671 > .elementor-widget-container > .elementor-heading-title').should('have.text','Intuitive & Effortless')
    }

    static defaultTextSelect()
    {       
        cy.get('.elementor-element-f967a2b > .elementor-widget-container > .elementor-icon-box-wrapper > .elementor-icon-box-content > .elementor-icon-box-title > span').should('have.text','Select')
    }

    static defaultTextSelectcontracts()
    {       
        cy.get('.elementor-element-f967a2b > .elementor-widget-container > .elementor-icon-box-wrapper > .elementor-icon-box-content > .elementor-icon-box-description').should('have.text','Select contracts to trade.')
    }
    
    static defaultTextPayout()
    {       
        cy.get('.elementor-element-05ae656 > .elementor-widget-container > .elementor-icon-box-wrapper > .elementor-icon-box-content > .elementor-icon-box-title > span').should('have.text','Payout')
    }

    static defaultTextInstantpayout()
    {       
        cy.get('.elementor-element-05ae656 > .elementor-widget-container > .elementor-icon-box-wrapper > .elementor-icon-box-content > .elementor-icon-box-description').should('have.text','Instant payout within 48 hours.')
    }

    static defaultTextPayback()
    {       
        cy.get('.elementor-element-a73c22b > .elementor-widget-container > .elementor-icon-box-wrapper > .elementor-icon-box-content > .elementor-icon-box-title > span').should('have.text','Payback')
    }  
    
    static defaultTextPaybackwhen()
    {       
        cy.get('.elementor-element-a73c22b > .elementor-widget-container > .elementor-icon-box-wrapper > .elementor-icon-box-content > .elementor-icon-box-description').should('have.text','Pay back when customers pay you.')
    }
    static WhoCan()
    {       
        cy.get('.elementor-element-343debeb > .elementor-widget-container > .elementor-heading-title').should('have.text','Who Can BridgeUp?')
    }
    static defaultTextthesky()
    {       
        cy.get('.elementor-element-6c86c207 > .elementor-widget-container > .elementor-heading-title').should('include.text','BridgeUp is industry agnostic, and the sky')
    }

    static defaultTextTakeOur()
    {       
        cy.get('.elementor-element-4c95a48 > .elementor-widget-container > .elementor-heading-title').should('include.text','Take Our Word For It')
    }
    static defaultSwiper()
    {       
        cy.get('.swiper-pagination').should('be.visible')
    }
    static defaultTextNeedInstant()
    {       
        cy.get('.elementor-element-36947e56 > .elementor-widget-container > .elementor-heading-title').should('have.text','Need Instant Capital?\nBridgeUp Your Revenue')
    }
    static defaultLinkGetcapital2()
    {       
        cy.get('.elementor-element-227ba45b > .elementor-widget-container > .elementor-button-wrapper > .elementor-button-link > .elementor-button-content-wrapper > .elementor-button-text').should('have.text','Get capital')
    }
    static defaultFooterMain()
    {       
        cy.get('.footer-area-1 > .widget > .widget-inner > .widget-title').should('have.text','Main')
    }

    static defaultFooterContent()
    {       
        cy.get('.footer-area-2 > .widget > .widget-inner > .widget-title').should('have.text','Content')
    }

    static defaultFooterCompany()
    {       
        cy.get('.footer-area-3 > .widget > .widget-inner > .widget-title').should('have.text','Company')
    }

    static defaultFooterReachOut()
    {       
        cy.get('.footer-area-4 > .widget > .widget-inner > .widget-title').should('have.text','Reach Out')
    }

    static defaultFooterHome()
    {       
        cy.get('.current-menu-item > a').should('have.text','Home')
    }

    static defaultFooterFAQs()
    {       
        cy.get('#menu-footer-content > .menu-item-type-custom > a').should('have.text','FAQs')
    }

    
    static defaultFooterAboutUs()
    {       
        cy.get('.menu-item-832 > a').should('have.text','About Us')
    }

    static defaultFooterContact()
    {       
        cy.get('.menu-item-834 > a').should('have.text','Contact')
    }

    static defaultFooterForInvestors()
    {       
        cy.get('.menu-item-828 > a').should('have.text','For Investors')
    }

    static defaultFooterBlog()
    {       
        cy.get('#menu-footer-content > .menu-item-type-post_type > a').should('have.text','Blog')
    }

    static defaultFooterCareers()
    {       
        cy.get('.menu-item-833 > a').should('have.text','Careers')
    }

    static defaultFooterGetCapital()
    {       
        cy.get('.menu-item-835 > a').should('have.text','Get Capital')
    }   
    
    static bridgeuplogo2()
    {       
        cy.get('a > .flogo').scrollIntoView();
        cy.get('a > .flogo').should('be.visible')
    }
    
    static linkedInlogo()
    {       
        cy.get('[href="https://www.linkedin.com/company/bridgeup/"] > .fa').should('be.visible')
    }     
     
    static twitterlogo()
    {       
        cy.get('[href="https://twitter.com/bridgeuphq"] > .fa').should('be.visible')
    }     
    
    static defaultBridgeUpTechPvtLtd()
    {       
        cy.get('.footer_credit > [href="https://bridgeup.com"]').should('have.text','BridgeUp Tech Pvt Ltd.')
    }

    static defaultprivacypolicy()
    {       
        cy.get('[href="https://cdn.bridgeup.com/policy/privacy.pdf"]').should('be.visible')
    }    

    static defaultTermsandConditions()
    {       
        cy.get('[href="https://cdn.bridgeup.com/policy/terms.pdf"]').should('have.text','Terms and Conditions')
    }
}



export default BridgeUpHome