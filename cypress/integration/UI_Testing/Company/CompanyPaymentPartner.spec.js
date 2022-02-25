/// <reference types ="cypress"/>
import {TestUrl,ValidUserid,ValidPassword,ValidPAN,PANCOMPANY,DifferentCompanyUserid,DifferentCompanyPassword,ChargebeeKey,ChargebeeSite} from '../../../config'
import {ValidPPPassword,ValidCSVAppstoreUserid,ValidCSVCashFreeUserid,ValidCSVChargebeeUserid,ValidCSVGooglePlayUserid,ValidCSVLT20MBUserid,ValidCSVPayUUserid,ValidCSVRazorpayUserid,ValidCSVStripeUserid,ValidCSVUserid,INValidDOCUserid,INValidPDFUserid,INValidPDFtoCSVReplaceUserid,INValidTXTUserid,INValidXLSXUserid,INValidCSVMT20MBUserid, Authid, hasuraid, paymentTestUrl} from '../../../PaymentPartnerconfig'
import Loginpage from '../BridgeUpUIPageObjects/LoginPageObj'
import LinkPanPage from '../BridgeUpUIPageObjects/LinkPanPageObj'
import LinkPaymentPartner from '../BridgeUpUIPageObjects/LinkPaymentPartnerObj'
/*
AUTHOR: TrackDfect
CompanyPaymentPartner Scenario
steps to run the code 
1.In package.json you have to change the path of the Script according to the script you are running
  for example :  "cypress run --spec 'cypress/integration/UI_Testing/Company/CompanyPaymentPartner.spec.js --headed"'
2.for getting html report you have to use "npm run test" command
3.no changes needed in userid
4.new mail id needed in the following testcases (change it in PaymentPartnerconfig.js)
006     razorpay
007     Appstore
008     cashfree
009     googleplay
010     pay u userid
011     valid csv user id
012     chargebee
5.chargebee credentials provided was not working in the live site so you can add the valid credentials and
remove the command slash from the code and it will run.
*/

describe('CompanyAccountSetup- LinkPaymentPartnerPage- Test Suite -1', () => {
    beforeEach(function(){
        cy.intercept({hostname: Authid}).as('auth');
        cy.intercept({hostname: hasuraid}).as('hasura');
        cy.visit(paymentTestUrl);
    })
    
    it(`Testcase 001:CompanyAccSetup-UI-LinkPaymentPartner - Default text Display`, () => {
        Loginpage.EnterEmail(INValidPDFUserid);
        Loginpage.EnterPassword(ValidPassword);
        Loginpage.ClickLogin();
        cy.wait('@auth');
        cy.wait('@hasura');
        Loginpage.VerifyValidLoginMsg();
        cy.wait('@hasura');
        LinkPanPage.CheckAndAddPAN(ValidPAN)
        cy.wait('@hasura');
         LinkPaymentPartner.VerifyDefaultTexLinkPayementPartner();
         LinkPaymentPartner.VerifyDefaultTextDescribtion();
         LinkPaymentPartner.VerifyDefaultMenuList();
         LinkPaymentPartner.VerifyDefaultLogoutbuttonEnabled();
         LinkPaymentPartner.VerifyDefaultBackbuttonEnabled();
         Loginpage.ClickLogout();  
    })  

    it(`Testcase 002:CompanyAccSetup-UI-LinkPaymentPartner- Upload invalid file Format - pdf`, () => {
        Loginpage.EnterEmail(INValidPDFUserid);
        Loginpage.EnterPassword(ValidPassword);
        Loginpage.ClickLogin();
        cy.wait('@auth');
        cy.wait('@hasura');
        Loginpage.VerifyValidLoginMsg();
        cy.wait('@hasura');
        LinkPanPage.CheckAndAddPAN(ValidPAN)
        LinkPaymentPartner.SelectEstimatedARRValue('2');
        LinkPaymentPartner.clickUpload();
        LinkPaymentPartner.UploadPaymentPartnerFile('UploadFiles/PaymentPartner/subscription_data_testing.pdf');
        LinkPaymentPartner.clickUploadfilebutton();
        LinkPaymentPartner.VerifyFileUploadNotSuccessfully();
        cy.wait(5000);
        Loginpage.ClickLogout();
    })

      it(`Testcase 003:CompanyAccSetup-UI-LinkPaymentPartner - Upload inValid file Format - xlsx`, () => {
        Loginpage.EnterEmail(INValidXLSXUserid);
        Loginpage.EnterPassword(ValidPassword);
        Loginpage.ClickLogin();
        Loginpage.VerifyValidLoginMsg();
        LinkPanPage.CheckAndAddPAN(ValidPAN)
        LinkPaymentPartner.SelectEstimatedARRValue('0');
        LinkPaymentPartner.clickUpload();
        LinkPaymentPartner.UploadPaymentPartnerFile('UploadFiles/PaymentPartner/subscription_data_testing.xlsx');
        LinkPaymentPartner.clickUploadfilebutton();
        LinkPaymentPartner.VerifyFileUploadNotSuccessfully();
        cy.wait(5000);
        Loginpage.ClickLogout();
    })

    it(`Testcase 004:CompanyAccSetup-UI-LinkPaymentPartner - Upload inValid file Format - doc`, () => {
        Loginpage.EnterEmail(INValidDOCUserid);
        Loginpage.EnterPassword(ValidPassword);
        Loginpage.ClickLogin();
        Loginpage.VerifyValidLoginMsg();
        cy.wait('@hasura');
        LinkPanPage.CheckAndAddPAN(ValidPAN)
        LinkPaymentPartner.SelectEstimatedARRValue('0');
        LinkPaymentPartner.clickUpload();
        LinkPaymentPartner.UploadPaymentPartnerFile('UploadFiles/PaymentPartner/subscription_data_testing.doc');
        LinkPaymentPartner.clickUploadfilebutton();
        LinkPaymentPartner.VerifyFileUploadNotSuccessfully();
        cy.wait(5000);
        Loginpage.ClickLogout();
    })

    it(`Testcase 005:CompanyAccSetup-UI-LinkPaymentPartner - Upload inValid file Format - txt`, () => {
        Loginpage.EnterEmail(INValidTXTUserid);
        Loginpage.EnterPassword(ValidPassword);
        Loginpage.ClickLogin();
        cy.wait('@auth');
        cy.wait('@hasura');
        Loginpage.VerifyValidLoginMsg();
        LinkPanPage.CheckAndAddPAN(ValidPAN)
        LinkPaymentPartner.SelectEstimatedARRValue('0');
        LinkPaymentPartner.clickUpload();
        LinkPaymentPartner.UploadPaymentPartnerFile('UploadFiles/PaymentPartner/subscription_data_testing.txt');
        LinkPaymentPartner.clickUploadfilebutton();
        LinkPaymentPartner.VerifyFileUploadNotSuccessfully();
        cy.wait(5000);
        Loginpage.ClickLogout();
    })

    it(`Test 006:Company - UI - LinkPaymentPartner - click RazorPay and link data - Testcase`, () => {
        Loginpage.EnterEmail(ValidCSVRazorpayUserid);
        Loginpage.EnterPassword(ValidPassword);
        Loginpage.ClickLogin();
        cy.wait('@auth');
        cy.wait('@hasura');
        Loginpage.VerifyValidLoginMsg();
        cy.wait('@hasura');
        LinkPanPage.CheckAndAddPAN(ValidPAN)
        cy.wait('@hasura');
        LinkPaymentPartner.SelectEstimatedARRValue('1');
        LinkPaymentPartner.clickRazorPay();
        LinkPaymentPartner.VerifyDefaultTestAlertMsg();
        LinkPaymentPartner.clickAlertMsgUpload();
        LinkPaymentPartner.UploadPaymentPartnerFile("UploadFiles/PaymentPartner/subscription_data_testing.csv");
        LinkPaymentPartner.clickAlertMsgUpload();
        cy.wait(40000)
        LinkPaymentPartner.VerifyFileUploadSuccesfully();
        Loginpage.ClickLogout();
    })

    it(`Test 007:Company - UI - LinkPaymentPartner - click Appstore and link data - Testcase`, () => {
        Loginpage.EnterEmail(ValidCSVAppstoreUserid);
        Loginpage.EnterPassword(ValidPassword);
        Loginpage.ClickLogin();
        cy.wait('@auth');
        cy.wait('@hasura');
        Loginpage.VerifyValidLoginMsg();
        cy.wait('@hasura');
        LinkPanPage.CheckAndAddPAN(ValidPAN)
        cy.wait('@hasura');
        LinkPaymentPartner.SelectEstimatedARRValue('2');
        LinkPaymentPartner.clickAppStore();
        LinkPaymentPartner.VerifyDefaultTestAlertMsg();
        LinkPaymentPartner.clickAlertMsgUpload();
        LinkPaymentPartner.UploadPaymentPartnerFile("UploadFiles/PaymentPartner/subscription_data_testing.csv");
        LinkPaymentPartner.clickAlertMsgUpload();
        cy.wait(40000)
        LinkPaymentPartner.VerifyFileUploadSuccesfully();
        Loginpage.ClickLogout();
    })

    it(`Test 008:Company - UI - LinkPaymentPartner - click CashFree and link data - Testcase`, () => {
        Loginpage.EnterEmail(ValidCSVCashFreeUserid);
        Loginpage.EnterPassword(ValidPassword);
        Loginpage.ClickLogin();
        cy.wait('@auth');
        cy.wait('@hasura');
        Loginpage.VerifyValidLoginMsg();
        cy.wait('@hasura');
        LinkPanPage.CheckAndAddPAN(ValidPAN)
        cy.wait('@hasura');
        LinkPaymentPartner.SelectEstimatedARRValue('3');
        LinkPaymentPartner.clickCashFree();
        LinkPaymentPartner.VerifyDefaultTestAlertMsg();
        LinkPaymentPartner.clickAlertMsgUpload();
        LinkPaymentPartner.UploadPaymentPartnerFile("UploadFiles/PaymentPartner/subscription_data_testing.csv");
        LinkPaymentPartner.clickAlertMsgUpload();
        cy.wait(40000)
        LinkPaymentPartner.VerifyFileUploadSuccesfully();
        Loginpage.ClickLogout();
    })

    it(`Test 009:Company - UI - LinkPaymentPartner - click GooglePlay and link data - Testcase`, () => {
        Loginpage.EnterEmail(ValidCSVGooglePlayUserid);
        Loginpage.EnterPassword(ValidPassword);
        Loginpage.ClickLogin();
        cy.wait('@auth');
        cy.wait('@hasura');
        Loginpage.VerifyValidLoginMsg();
        cy.wait('@hasura');
        LinkPanPage.CheckAndAddPAN(ValidPAN)
        cy.wait('@hasura');
        LinkPaymentPartner.SelectEstimatedARRValue('4');
        LinkPaymentPartner.clickGooglePlay();
        LinkPaymentPartner.VerifyDefaultTestAlertMsg();
        LinkPaymentPartner.clickAlertMsgUpload();
        LinkPaymentPartner.UploadPaymentPartnerFile("UploadFiles/PaymentPartner/subscription_data_testing.csv");
        LinkPaymentPartner.clickAlertMsgUpload();
        cy.wait(40000)
        LinkPaymentPartner.VerifyFileUploadSuccesfully();
        Loginpage.ClickLogout();
    })

    it(`Test 010:Company - UI - LinkPaymentPartner - click PayU and link data - Testcase`, () => {
        Loginpage.EnterEmail(ValidCSVPayUUserid);
        Loginpage.EnterPassword(ValidPassword);
        Loginpage.ClickLogin();
        cy.wait('@auth');
        cy.wait('@hasura');
        Loginpage.VerifyValidLoginMsg();
        cy.wait('@hasura');
        LinkPanPage.CheckAndAddPAN(ValidPAN)
        cy.wait('@hasura');
        LinkPaymentPartner.SelectEstimatedARRValue('0');
        LinkPaymentPartner.clickPayU();
        LinkPaymentPartner.VerifyDefaultTestAlertMsg();
        LinkPaymentPartner.clickAlertMsgUpload();
        LinkPaymentPartner.UploadPaymentPartnerFile("UploadFiles/PaymentPartner/subscription_data_testing.csv");
        LinkPaymentPartner.clickAlertMsgUpload();
        cy.wait(40000)
        LinkPaymentPartner.VerifyFileUploadSuccesfully();
        Loginpage.ClickLogout();
    })

    it(`Test 011:Company - UI - LinkPaymentPartner - click UploadFile and link data - Testcase`, () => {
        Loginpage.EnterEmail(ValidCSVUserid);
        Loginpage.EnterPassword(ValidPassword);
        Loginpage.ClickLogin();
        cy.wait('@auth');
        cy.wait('@hasura');
        Loginpage.VerifyValidLoginMsg();
        cy.wait('@hasura');
        LinkPanPage.CheckAndAddPAN(ValidPAN)
        LinkPaymentPartner.SelectEstimatedARRValue('0');
        LinkPaymentPartner.clickUpload();
        LinkPaymentPartner.UploadPaymentPartnerFile("UploadFiles/PaymentPartner/subscription_data_testing.csv")
        LinkPaymentPartner.clickUploadfilebutton();
        cy.wait(40000) 
        LinkPaymentPartner.VerifyFileUploadSuccesfully();
        Loginpage.ClickLogout();
    })

    // it(`Test 012:Company - UI - LinkPaymentPartner - AddChargebeeAsPaymentpartner `, () => {
    // Loginpage.EnterEmail(ValidCSVChargebeeUserid);
    // Loginpage.EnterPassword(ValidPassword);
    // Loginpage.ClickLogin();
    // cy.wait('@auth');
    // cy.wait('@hasura');
    // Loginpage.VerifyValidLoginMsg();
    // cy.wait('@hasura');
    // LinkPanPage.CheckAndAddPAN(ValidPAN)
    // cy.wait('@hasura');
    //     LinkPaymentPartner.SelectEstimatedARRValue('0');
    //     cy.wait('@hasura');
    //     LinkPaymentPartner.AddChargebeeAsPaymentpartner('test_SZlGsnwAI7bT14ci6UDcxrmxnVNtNymA','aditya-bridgeup-test');
    //     cy.wait('@hasura');
    //     Loginpage.ClickLogout();
    // })

    it.only(`Test 013:Company - UI - LinkPaymentPartner - click Stripe and link data`, () => {
        Loginpage.EnterEmail('prabhakaran+387@bridgeup.com');
        Loginpage.EnterPassword(ValidPassword);
        Loginpage.ClickLogin();
        cy.wait('@auth');
        cy.wait('@hasura');
        Loginpage.VerifyValidLoginMsg();
        cy.wait('@hasura');
        LinkPanPage.CheckAndAddPAN(ValidPAN)
        cy.wait('@hasura'); 
        LinkPaymentPartner.SelectEstimatedARRValue('0');
        LinkPaymentPartner.AddStripeAsPaymentpartner();
        Loginpage.ClickLogout();
    })

    it(`Testcase 014:CompanyAccSetup-UI-LinkPaymentPartner - Upload Valid file Format LT20MB - csv`, () => {
        Loginpage.EnterEmail(ValidCSVLT20MBUserid);
        Loginpage.EnterPassword(ValidPassword);
        Loginpage.ClickLogin();
        cy.wait('@auth');
        cy.wait('@hasura');
        Loginpage.VerifyValidLoginMsg();
        cy.wait('@hasura');
        LinkPanPage.CheckAndAddPAN(ValidPAN)
        cy.wait('@hasura');
        LinkPaymentPartner.SelectEstimatedARRValue('0');
        LinkPaymentPartner.clickUpload();
        LinkPaymentPartner.UploadPaymentPartnerFile('UploadFiles/PaymentPartner/subscription_100000_plus_recordslessthan20mbsize.csv');
        LinkPaymentPartner.clickUploadfilebutton();
        LinkPaymentPartner.VerifyFileUploadSuccesfully();
        cy.wait(5000);
        Loginpage.ClickLogout();
    })

    it(`Testcase 015:CompanyAccSetup-UI-LinkPaymentPartner - Upload InValid file Format MT20MB - csv`, () => {
        Loginpage.EnterEmail(INValidCSVMT20MBUserid);
        Loginpage.EnterPassword(ValidPassword);
        Loginpage.ClickLogin();
        cy.wait('@auth');
        cy.wait('@hasura');
        Loginpage.VerifyValidLoginMsg();
        cy.wait('@hasura');
        LinkPanPage.CheckAndAddPAN(ValidPAN)
        cy.wait('@hasura');
        LinkPaymentPartner.SelectEstimatedARRValue('0');
        LinkPaymentPartner.clickUpload();
        LinkPaymentPartner.UploadPaymentPartnerFile('UploadFiles/PaymentPartner/subscription_100000_plus_recordsmorethan20mbsize.csv');
        LinkPaymentPartner.clickUploadfilebutton();
        cy.wait(15000);
        LinkPaymentPartner.VerifyFileUploadNotSuccessfully();
        cy.wait(5000);
        Loginpage.ClickLogout();
    })



}) 


      
