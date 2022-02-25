/// <reference types ="cypress"/>
import Loginpage from '../BridgeUpUIPageObjects/LoginPageObj'
import LinkPanPage from '../BridgeUpUIPageObjects/LinkPanPageObj'
import LinkPaymentPartner from '../BridgeUpUIPageObjects/LinkPaymentPartnerObj'
import LinkBankData from '../BridgeUpUIPageObjects/LinkBankDataObj'
import LinkAccountingData from '../BridgeUpUIPageObjects/LinkAccountingDataObj'

//const { default: Loginpage } = require("../BridgeUpUIPageObjects/LoginPageObj")

describe('Company - UI - Test Suit', () => {
     
    
    it(`Test 001:Company - UI - Login Testcase`, () => {
     cy.visit("https://app.devbridgeup.com/login")
     //cy.visit("https://app.devbridgeup.com/signup")

     const lp = new Loginpage()
     lp.EnterEmail('prabhakaran+115@bridgeup.com')
     lp.EnterPassword('Admin@123$')
     lp.ClickLogin()

     cy.wait(30000)

     const lpp = new LinkPanPage()
     lpp.EnterPanNumber("AAJCB9440M")
     lpp.ClickVerify()
     cy.wait(50000)
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
       //lppp.clickUploadfileClose()
       //cy.wait(10000)
       lppp.ClickNext()
       cy.wait(10000)
       
       const lbd = new LinkBankData()

       lbd.ClickAddBank()
       cy.wait(10000)
       lbd.SelectBankName()
       lbd.SelectBankAccountType()
       lbd.ClickConfirm()
       cy.wait(10000)

       lbd.ClickAddBankStatement()
       cy.wait(10000)
       lbd.UploadBankDataPdfFile("UploadFiles/BankData/Bank_Account_Statement1.pdf")
       cy.wait(10000)
       lbd.ClickVerifyBankData()
       cy.wait(50000)
       lbd.ClickNext(); 

       cy.wait(10000)
       
       const lad = new LinkAccountingData()


       lad.clickUpload()
       cy.wait(10000)
      
       lad.UploadAccountingDataXlsFile("UploadFiles/AccountingData/Balance-sheet1.xlsx")
       cy.wait(10000)
      
       lad.clickUploadfilebutton()
       cy.wait(60000)
       lad.ClickSubmitforReview()
       //lad.clickUploadfileClose()
       cy.wait(10000)
    
       lad.ClickLogout() 
    
       /* ==== Generated with Cypress Studio ==== */
     //cy.get(':nth-child(8) > .each-box > .brand-logo').click();
     //cy.get('.upload-file > :nth-child(2) > :nth-child(1)').click();
     //cy.get('.btn-holders > .MuiButton-root').click();
     /* ==== End Cypress Studio ==== */
    })
})
