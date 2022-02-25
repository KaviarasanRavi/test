/// <reference types ="cypress"/>
import Loginpage from '../BridgeUpUIPageObjects/LoginPageObj'
import LinkPanPage from '../BridgeUpUIPageObjects/LinkPanPageObj'
import LinkPaymentPartner from '../BridgeUpUIPageObjects/LinkPaymentPartnerObj'
import LinkBankData from '../BridgeUpUIPageObjects/LinkBankDataObj'

//const { default: Loginpage } = require("../BridgeUpUIPageObjects/LoginPageObj")

describe('Company - UI - Test Suit', () => {
     
    
    it(`Test 001:Company - UI - Login Testcase`, () => {
        
       cy.visit("https://app.devbridgeup.com/login")
        //cy.visit("https://app.devbridgeup.com/signup")

        const lp = new Loginpage()
        lp.EnterEmail('prabhakaran+105@bridgeup.com')
        lp.EnterPassword('Admin@123$') 
        lp.ClickLogin()   

        cy.wait(30000)

        const lpp = new LinkPanPage()
        //lpp.EnterPanNumber("AAJCB9440M")
       // lpp.ClickVerify()
       // cy.wait(60000)
        lpp.ClickNext()
        cy.wait(30000)
        const lppp = new LinkPaymentPartner()
          lppp.SelectEstimatedARR()
          cy.wait(10000)
          lppp.clickUpload()
          cy.wait(10000)
          lppp.UploadPaymentPartnerCSVFile("UploadFiles/PaymentPartner/subscription_data_testing.csv")
          cy.wait(10000)
          lppp.clickUploadfilebutton()
          cy.wait(60000)
          lppp.clickUploadfileClose()
          cy.wait(10000)
          lppp.ClickNext()
          cy.wait(30000)
          
          const lbd = new LinkBankData()

          lbd.ClickAddBank()
          cy.wait(10000)
          lbd.SelectBankName()
          lbd.SelectBankAccountType()
          lbd.ClickConfirm()
          cy.wait(10000)
          lbd.ClickNext()

        })
})
