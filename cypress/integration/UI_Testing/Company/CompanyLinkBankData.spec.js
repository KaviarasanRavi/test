/// <reference types ="cypress"/>
import { Authid, bankurl, hasuraid, ValidbankPassword, Validuseridbanktco1, Validuseridbanktco2, Validuseridbanktco3, Validuseridbanktco4, Validuseridbanktco5, Validuseridbanktco6, Validuseridbanktco7 } from '../../../linkbankdataconfig';
import LinkBankData from '../BridgeUpUIPageObjects/LinkBankDataObj'

/* 
AUTHOR: TrackDfect
CompanyLinkBankData Scenario
steps to run the code 
1.In package.json you have to change the path of the Script according to the script you are running
  for example :  "cypress run --spec 'cypress/integration/UI_Testing/Company/CompanyLinkBankData.spec.js --headed"'
2.for getting html report you have to use "npm run test" command
3. give a newly or not modified user ids to all the testcases 
*/

describe('Company- UI- LinkBankData- Test Suite', () => {
      
    beforeEach(function(){
        cy.intercept({hostname: Authid}).as('auth');
        cy.intercept({hostname: hasuraid}).as('hasura');
        cy.visit(bankurl);
    })

    it(`Test 001:Company - UI - LinkBankData - Default text Display - Testcase-positive`, () => {
        LinkBankData.EnterEmail(Validuseridbanktco1);
        LinkBankData.EnterPassword(ValidbankPassword);
        LinkBankData.ClickLogin();
        cy.wait('@auth');
        cy.wait('@hasura');
        LinkBankData.Panpage('AAJCB9440M');
        cy.wait('@hasura');
        LinkBankData.SelectEstimatedARRValue('2');
        cy.wait('@hasura');
        LinkBankData.ClickNext()
        cy.wait('@hasura');
        LinkBankData.VerifyDefaultTexLinkBankData();
        LinkBankData.VerifyDefaultTextBankDescribtion();
        LinkBankData.VerifyDefaultMenuList();
        LinkBankData.VerifyDefaultLogoutbuttonEnabled();
        LinkBankData.VerifyDefaultBackbuttonEnabled();
    })  

    it(`Test 002:Company - UI - LinkBankData - Check AddBankAccount - Testcase-positive`, () => {
        LinkBankData.EnterEmail(Validuseridbanktco2);
        LinkBankData.EnterPassword(ValidbankPassword);
        LinkBankData.ClickLogin();
        cy.wait('@auth');
        cy.wait('@hasura');
        LinkBankData.Panpage('AAJCB9440M');
        cy.wait('@hasura');
        LinkBankData.SelectEstimatedARRValue('2');
        cy.wait('@hasura');
        LinkBankData.ClickNext()
        LinkBankData.ClickAddBank();
        cy.wait('@hasura');
        LinkBankData.SelectBankNameValue('65');
        LinkBankData.SelectBankAccountTypeValue('0');
        LinkBankData.ClickConfirm();
        cy.wait('@hasura');
        LinkBankData.verifybankname();
    })
    
    it(`Test 003:Company - UI - LinkBankData - UploadinvalidStatement - Testcase-positive`, () => {
        LinkBankData.EnterEmail(Validuseridbanktco3);
        LinkBankData.EnterPassword(ValidbankPassword);
        LinkBankData.ClickLogin();
        cy.wait('@auth');
        cy.wait('@hasura');
        LinkBankData.Panpage('AAJCB9440M');
        cy.wait('@hasura');
        LinkBankData.SelectEstimatedARRValue('2');
        cy.wait('@hasura');
        LinkBankData.ClickNext()
        LinkBankData.ClickAddBank();
        cy.wait('@hasura');
        LinkBankData.SelectBankNameValue('30');
        LinkBankData.SelectBankAccountTypeValue('0');
        LinkBankData.ClickConfirm();
        cy.wait('@hasura');
        LinkBankData.ClickAddBankStatement();
        cy.wait('@hasura');
        LinkBankData.UploadBankDataPdfFile('1.pdf');
        LinkBankData.ClickVerifyBankData();
        LinkBankData.ClickLogout();
        LinkBankData.EnterEmail(Validuseridbanktco3);
        LinkBankData.EnterPassword(ValidbankPassword);
        LinkBankData.ClickLogin();
        cy.wait('@auth');
        cy.wait('@hasura');
        LinkBankData.Panpage('AAJCB9440M');
        cy.wait('@hasura');
        LinkBankData.SelectEstimatedARRValue('2');
        cy.wait('@auth');
        cy.wait('@hasura');
        LinkBankData.ClickNext()
        cy.wait('@hasura');
        LinkBankData.verifyfailed()
    })  

    it(`Test 004:Company - UI - LinkBankData - VerifyValidStatementPassed-Testcase-positive`, () => {
        LinkBankData.EnterEmail(Validuseridbanktco4);
        LinkBankData.EnterPassword(ValidbankPassword);
        LinkBankData.ClickLogin();
        cy.wait('@auth');
        cy.wait('@hasura');
        LinkBankData.Panpage('AAJCB9440M');
        cy.wait('@hasura');
        LinkBankData.SelectEstimatedARRValue('2');
        cy.wait('@hasura');
        LinkBankData.ClickNext()
        cy.wait('@hasura');
        LinkBankData.ClickAddBank();
        cy.wait('@hasura');
        LinkBankData.SelectBankNameValue('62');
        LinkBankData.SelectBankAccountTypeValue('0');
        LinkBankData.ClickConfirm();
        cy.wait('@hasura');
        LinkBankData.ClickAddBankStatement();
        cy.wait('@hasura');
        LinkBankData.UploadBankDataPdfFile('detailStatement.pdf');
        LinkBankData.ClickVerifyBankData();
        LinkBankData.ClickLogout();
        LinkBankData.EnterEmail(Validuseridbanktco4);
        LinkBankData.EnterPassword(ValidbankPassword);
        LinkBankData.ClickLogin();
        cy.wait('@auth');
        cy.wait('@hasura');
        LinkBankData.Panpage('AAJCB9440M');
        cy.wait('@hasura');
        LinkBankData.SelectEstimatedARRValue('2');
        cy.wait('@hasura');
        LinkBankData.ClickNext();
        cy.wait('@hasura');
        LinkBankData.verifyvalidpassed()
    })

    it(`Test 005:Company - UI - LinkBankData -45statement- Testcase-positive`, () => {
        LinkBankData.EnterEmail(Validuseridbanktco5);
        LinkBankData.EnterPassword(ValidbankPassword);
        LinkBankData.ClickLogin();
        cy.wait('@auth');
        cy.wait('@hasura');
        LinkBankData.Panpage('AAJCB9440M');
        cy.wait('@hasura');
        LinkBankData.SelectEstimatedARRValue('2');
        cy.wait('@hasura');
        LinkBankData.ClickNext()
        cy.wait('@hasura');
        LinkBankData.ClickAddBank();
        cy.wait('@hasura');
        LinkBankData.SelectBankNameValue('62');
        LinkBankData.SelectBankAccountTypeValue('0');
        LinkBankData.ClickConfirm();
        cy.wait('@hasura');
        LinkBankData.ClickAddBankStatement();
        cy.wait('@hasura');
        LinkBankData.UploadBankDataPdfFile('1.pdf');
        LinkBankData.UploadBankDataPdfFile('2.pdf');
        LinkBankData.UploadBankDataPdfFile('3.pdf');
        LinkBankData.UploadBankDataPdfFile('4.pdf');
        LinkBankData.UploadBankDataPdfFile('5.pdf');
        LinkBankData.UploadBankDataPdfFile('6.pdf');
        LinkBankData.UploadBankDataPdfFile('7.pdf');
        LinkBankData.UploadBankDataPdfFile('8.pdf');
        LinkBankData.UploadBankDataPdfFile('9.pdf');
        LinkBankData.UploadBankDataPdfFile('10.pdf');
        LinkBankData.UploadBankDataPdfFile('11.pdf');
        LinkBankData.UploadBankDataPdfFile('12.pdf');
        LinkBankData.UploadBankDataPdfFile('13.pdf');
        LinkBankData.UploadBankDataPdfFile('14.pdf');
        LinkBankData.UploadBankDataPdfFile('15.pdf');
        LinkBankData.UploadBankDataPdfFile('16.pdf');
        LinkBankData.UploadBankDataPdfFile('17.pdf');
        LinkBankData.UploadBankDataPdfFile('18.pdf');
        LinkBankData.UploadBankDataPdfFile('19.pdf');
        LinkBankData.UploadBankDataPdfFile('20.pdf');
        LinkBankData.UploadBankDataPdfFile('1.pdf');
        LinkBankData.UploadBankDataPdfFile('2.pdf');
        LinkBankData.UploadBankDataPdfFile('3.pdf');
        LinkBankData.UploadBankDataPdfFile('4.pdf');
        LinkBankData.UploadBankDataPdfFile('5.pdf');
        LinkBankData.UploadBankDataPdfFile('6.pdf');
        LinkBankData.UploadBankDataPdfFile('7.pdf');
        LinkBankData.UploadBankDataPdfFile('8.pdf');
        LinkBankData.UploadBankDataPdfFile('9.pdf');
        LinkBankData.UploadBankDataPdfFile('10.pdf');
        LinkBankData.UploadBankDataPdfFile('11.pdf');
        LinkBankData.UploadBankDataPdfFile('12.pdf');
        LinkBankData.UploadBankDataPdfFile('13.pdf');
        LinkBankData.UploadBankDataPdfFile('14.pdf');
        LinkBankData.UploadBankDataPdfFile('15.pdf');
        LinkBankData.UploadBankDataPdfFile('16.pdf');
        LinkBankData.UploadBankDataPdfFile('17.pdf');
        LinkBankData.UploadBankDataPdfFile('18.pdf');
        LinkBankData.UploadBankDataPdfFile('19.pdf');
        LinkBankData.UploadBankDataPdfFile('20.pdf');
        LinkBankData.UploadBankDataPdfFile('1.pdf');
        LinkBankData.UploadBankDataPdfFile('2.pdf');
        LinkBankData.UploadBankDataPdfFile('3.pdf');
        LinkBankData.UploadBankDataPdfFile('4.pdf');
        LinkBankData.UploadBankDataPdfFile('5.pdf');
        LinkBankData.ClickVerifyBankData();
        LinkBankData.verifystatementuploaded();
    })

    it(`Test 006:Company - UI - LinkBankData -Add60 statement- Testcase-negative`, () => {
        LinkBankData.EnterEmail(Validuseridbanktco6);
        LinkBankData.EnterPassword(ValidbankPassword);
        LinkBankData.ClickLogin();
        cy.wait('@auth');
        cy.wait('@hasura');
        LinkBankData.Panpage('AAJCB9440M');
        cy.wait('@hasura');
        LinkBankData.SelectEstimatedARRValue('2');
        cy.wait('@hasura');
        LinkBankData.ClickNext()
        cy.wait('@hasura');
        LinkBankData.ClickAddBank();
        cy.wait('@hasura');
        LinkBankData.SelectBankNameValue('62');
        LinkBankData.SelectBankAccountTypeValue('0');
        LinkBankData.ClickConfirm();
        cy.wait('@hasura');
        LinkBankData.ClickAddBank();
        LinkBankData.ClickAddBankStatement();
        cy.wait('@hasura');
        LinkBankData.UploadBankDataPdfFile('1.pdf');
        LinkBankData.UploadBankDataPdfFile('2.pdf');
        LinkBankData.UploadBankDataPdfFile('3.pdf');
        LinkBankData.UploadBankDataPdfFile('4.pdf');
        LinkBankData.UploadBankDataPdfFile('5.pdf');
        LinkBankData.UploadBankDataPdfFile('6.pdf');
        LinkBankData.UploadBankDataPdfFile('7.pdf');
        LinkBankData.UploadBankDataPdfFile('8.pdf');
        LinkBankData.UploadBankDataPdfFile('9.pdf');
        LinkBankData.UploadBankDataPdfFile('10.pdf');
        LinkBankData.UploadBankDataPdfFile('11.pdf');
        LinkBankData.UploadBankDataPdfFile('12.pdf');
        LinkBankData.UploadBankDataPdfFile('13.pdf');
        LinkBankData.UploadBankDataPdfFile('14.pdf');
        LinkBankData.UploadBankDataPdfFile('15.pdf');
        LinkBankData.UploadBankDataPdfFile('16.pdf');
        LinkBankData.UploadBankDataPdfFile('17.pdf');
        LinkBankData.UploadBankDataPdfFile('18.pdf');
        LinkBankData.UploadBankDataPdfFile('19.pdf');
        LinkBankData.UploadBankDataPdfFile('20.pdf');
        LinkBankData.UploadBankDataPdfFile('1.pdf');
        LinkBankData.UploadBankDataPdfFile('2.pdf');
        LinkBankData.UploadBankDataPdfFile('3.pdf');
        LinkBankData.UploadBankDataPdfFile('4.pdf');
        LinkBankData.UploadBankDataPdfFile('5.pdf');
        LinkBankData.UploadBankDataPdfFile('6.pdf');
        LinkBankData.UploadBankDataPdfFile('7.pdf');
        LinkBankData.UploadBankDataPdfFile('8.pdf');
        LinkBankData.UploadBankDataPdfFile('9.pdf');
        LinkBankData.UploadBankDataPdfFile('10.pdf');
        LinkBankData.UploadBankDataPdfFile('11.pdf');
        LinkBankData.UploadBankDataPdfFile('12.pdf');
        LinkBankData.UploadBankDataPdfFile('13.pdf');
        LinkBankData.UploadBankDataPdfFile('14.pdf');
        LinkBankData.UploadBankDataPdfFile('15.pdf');
        LinkBankData.UploadBankDataPdfFile('16.pdf');
        LinkBankData.UploadBankDataPdfFile('17.pdf');
        LinkBankData.UploadBankDataPdfFile('18.pdf');
        LinkBankData.UploadBankDataPdfFile('19.pdf');
        LinkBankData.UploadBankDataPdfFile('20.pdf');
        LinkBankData.UploadBankDataPdfFile('1.pdf');
        LinkBankData.UploadBankDataPdfFile('2.pdf');
        LinkBankData.UploadBankDataPdfFile('3.pdf');
        LinkBankData.UploadBankDataPdfFile('4.pdf');
        LinkBankData.UploadBankDataPdfFile('5.pdf');
        LinkBankData.UploadBankDataPdfFile('6.pdf');
        LinkBankData.UploadBankDataPdfFile('7.pdf');
        LinkBankData.UploadBankDataPdfFile('8.pdf');
        LinkBankData.UploadBankDataPdfFile('9.pdf');
        LinkBankData.UploadBankDataPdfFile('10.pdf');
        LinkBankData.UploadBankDataPdfFile('11.pdf');
        LinkBankData.UploadBankDataPdfFile('12.pdf');
        LinkBankData.UploadBankDataPdfFile('13.pdf');
        LinkBankData.UploadBankDataPdfFile('14.pdf');
        LinkBankData.UploadBankDataPdfFile('15.pdf');
        LinkBankData.UploadBankDataPdfFile('16.pdf');
        LinkBankData.UploadBankDataPdfFile('17.pdf');
        LinkBankData.UploadBankDataPdfFile('18.pdf');
        LinkBankData.UploadBankDataPdfFile('19.pdf');
        LinkBankData.UploadBankDataPdfFile('20.pdf');
        LinkBankData.ClickVerifyBankData();
        LinkBankData.verifystatementuploaded();
       
    })
    
    it(`Test 007 :Company - UI - LinkBankData - uploadingInvalidsecondarydata - Testcase-Negative`, () => {
        LinkBankData.EnterEmail(Validuseridbanktco7);
        LinkBankData.EnterPassword(ValidbankPassword);
        LinkBankData.ClickLogin();
        LinkBankData.Panpage('AAJCB9440M');
        LinkBankData.SelectEstimatedARRValue('2');
        cy.wait('@hasura');
        LinkBankData.ClickNext()
        cy.wait('@hasura');
        LinkBankData.ClickAddBank();
        LinkBankData.SelectBankNameValue('62');
        LinkBankData.SelectBankAccountTypeValue('0');
        LinkBankData.secondarySelectBankNameAndTypeValue('63','0');
        LinkBankData.ClickConfirm();
        cy.wait('@hasura');
        LinkBankData.UploadBankDataPdfFile('detailStatement.pdf')
        LinkBankData.ClickVerifyBankData()
        LinkBankData.UploadSecondaryBankDataPdfFile('detailStatement.pdf')
        LinkBankData.ClickVerifySecondaryBankData()
        LinkBankData.verifyinvalidsecondary()


    })
}) 