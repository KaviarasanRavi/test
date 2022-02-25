/// <reference types ="cypress"/>
import { Authid, hasuraid, testingurl, ValidaccountingdataPassword, validaccountingdatauserid } from '../../../linkaccountingdata';
import LinkAccountingData from '../BridgeUpUIPageObjects/LinkAccountingDataObj'
/* 
AUTHOR: TrackDfect
CompanyLinkAccountData Scenario
steps to run the code 
1.In package.json you have to change the path of the Script according to the script you are running
  for example :  "cypress run --spec 'cypress/integration/UI_Testing/Company/CompanyLinkAccountData.spec.js --headed"'
2.for getting html report you have to use "npm run test" command
3.no changes needed in userid but if you are giving new user id make sure bank details and statements where
  uploaded in that user id
*/

describe('Company- UI- LinkAccountData- Test Suite', () => {
      
    beforeEach(function(){
        cy.intercept({hostname: Authid}).as('auth');
        cy.intercept({hostname: hasuraid}).as('hasura');
        cy.visit(testingurl);
    })
    it(`Test 001:Company - UI - LinkBankData - Default text Display - Testcase-positive`, () => {
        LinkAccountingData.EnterEmail(validaccountingdatauserid);
        LinkAccountingData.EnterPassword(ValidaccountingdataPassword);
        LinkAccountingData.ClickLogin();
        LinkAccountingData.Panpage('AAJCB9440M');
        LinkAccountingData.paymentpartner()
        LinkAccountingData.ClickNext();
        LinkAccountingData.VerifyDefaultImageBridgeup()
        LinkAccountingData.VerifyDefaultTexLinkAccountData();
        LinkAccountingData.VerifyDefaultAccountingData();
        LinkAccountingData.VerifyDefaultBankData();
        LinkAccountingData.VerifyDefaultPaymentPartner();
        LinkAccountingData.VerifyDefaultTextDescription()
        LinkAccountingData.VerifyDefaultLogout()
        LinkAccountingData.VerifyDefaultBack()
        LinkAccountingData.VerifyDefaultSubmitForReview()
    })  
    it(`Test 002:Company - UI - LinkAccountData - upload pdf file - Testcase-negative`, () => {
        LinkAccountingData.EnterEmail(validaccountingdatauserid);
        LinkAccountingData.EnterPassword(ValidaccountingdataPassword);
        LinkAccountingData.ClickLogin();
        LinkAccountingData.Panpage('AAJCB9440M');
        LinkAccountingData.paymentpartner()
        LinkAccountingData.ClickNext();
        LinkAccountingData.clickUpload();
        cy.wait('@hasura');
        LinkAccountingData.verifyDefaultTextInUploadFilePopUp();
        LinkAccountingData.UploadAccountingDataFile("1.pdf");
        LinkAccountingData.clickUploadfilebutton();
        cy.wait('@hasura');
        LinkAccountingData.VerifyDefaultErrorForInvalidSubmit()
        LinkAccountingData.VerifySubmit();
    })
    it(`Test 003:Company - UI - LinkAccountData - upload doc file - Testcase-negative`, () => {
        LinkAccountingData.EnterEmail(validaccountingdatauserid);
        LinkAccountingData.EnterPassword(ValidaccountingdataPassword);
        LinkAccountingData.ClickLogin();
        LinkAccountingData.Panpage('AAJCB9440M');
        LinkAccountingData.paymentpartner()
        LinkAccountingData.ClickNext();
        LinkAccountingData.clickUpload();
        LinkAccountingData.UploadAccountingDataFile("file-sample_500kB.doc");
        LinkAccountingData.clickUploadfilebutton();
        cy.wait('@hasura');
        LinkAccountingData.VerifyDefaultErrorForInvalidSubmit()
        LinkAccountingData.VerifySubmit();
    })
    it(`Test 004:Company - UI - LinkAccountData - upload txt file - Testcase-negative`, () => {
        LinkAccountingData.EnterEmail(validaccountingdatauserid);
        LinkAccountingData.EnterPassword(ValidaccountingdataPassword);
        LinkAccountingData.ClickLogin();
        LinkAccountingData.Panpage('AAJCB9440M');      
        LinkAccountingData.paymentpartner()
        LinkAccountingData.ClickNext();
        LinkAccountingData.clickUpload();
        LinkAccountingData.UploadAccountingDataFile("sample3.txt");
        LinkAccountingData.clickUploadfilebutton();
        cy.wait('@hasura');
        LinkAccountingData.VerifyDefaultErrorForInvalidSubmit()
        LinkAccountingData.VerifySubmit();
    })
    it(`Test 005:Company - UI - LinkAccountData - upload valid Excel file - Testcase-positive`, () => {
        LinkAccountingData.EnterEmail(validaccountingdatauserid);
        LinkAccountingData.EnterPassword(ValidaccountingdataPassword);
        LinkAccountingData.ClickLogin();
        LinkAccountingData.Panpage('AAJCB9440M');
        LinkAccountingData.paymentpartner()
        LinkAccountingData.ClickNext();
        LinkAccountingData.clickUpload();
        LinkAccountingData.UploadAccountingDataFile("UploadFiles/AccountingData/sample-Accountingnew.xlsx");
        LinkAccountingData.clickUploadfilebutton();
        LinkAccountingData.VerifyvalidSubmit();
    })
    it(`Test 006:Company - UI - LinkAccountData - Verifyquickbook and zoho - Testcase-positive`, () => {
        LinkAccountingData.EnterEmail(validaccountingdatauserid);
        LinkAccountingData.EnterPassword(ValidaccountingdataPassword);
        LinkAccountingData.ClickLogin();
        LinkAccountingData.Panpage('AAJCB9440M');
        LinkAccountingData.paymentpartner()
        LinkAccountingData.ClickNext();
        LinkAccountingData.verifyQuickBooksPage()
        LinkAccountingData.verifyZohoPage()
      })
      it(`Test 007:Company - UI - LinkAccountData - TallyUpload - Testcase-positive`, () => {
        LinkAccountingData.EnterEmail(validaccountingdatauserid);
        LinkAccountingData.EnterPassword(ValidaccountingdataPassword);
        LinkAccountingData.ClickLogin();
        LinkAccountingData.Panpage('AAJCB9440M');
        LinkAccountingData.paymentpartner()
        LinkAccountingData.ClickNext();
        LinkAccountingData.clickTally();
        LinkAccountingData.UploadAccountingDataFile("sample3.txt");
        LinkAccountingData.clickPopUpUploadFile();
        LinkAccountingData.VerifySubmit();
    })
    it(`Test 008:Company - UI - LinkAccountData - FreshBookUpload - Testcase-positive`, () => {
        LinkAccountingData.EnterEmail(validaccountingdatauserid);
        LinkAccountingData.EnterPassword(ValidaccountingdataPassword);
        LinkAccountingData.ClickLogin();
        LinkAccountingData.Panpage('AAJCB9440M');
        LinkAccountingData.paymentpartner()
        LinkAccountingData.ClickNext();
        LinkAccountingData.clickFreshBook()
        LinkAccountingData.UploadAccountingDataFile("sample3.txt");
        LinkAccountingData.clickPopUpUploadFile();
        LinkAccountingData.VerifySubmit();
    })
    it(`Test 009:Company - UI - LinkAccountData - XeroUpload - Testcase-positive`, () => {
        LinkAccountingData.EnterEmail(validaccountingdatauserid);
        LinkAccountingData.EnterPassword(ValidaccountingdataPassword);
        LinkAccountingData.ClickLogin();
        LinkAccountingData.Panpage('AAJCB9440M');
        LinkAccountingData.paymentpartner()
        LinkAccountingData.ClickNext();
        LinkAccountingData.clickXero()
        LinkAccountingData.UploadAccountingDataFile("sample3.txt");
        LinkAccountingData.clickPopUpUploadFile();
        LinkAccountingData.VerifySubmit();
    })
})