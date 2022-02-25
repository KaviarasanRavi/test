/// <reference types ="cypress"/>
import { Authid, endtoendurl, hasuraid, ValidPassword, ValidUser01, ValidUser02, ValidUser03 } from './BridgeUpConfig/CompanyAccountSetUpEndToEndconfig';
import EndtoendSetup from '../BridgeupDemo/BridgeUpPageObj/CompanyAccountSetupEndToEndObj'
/* 
AUTHOR: TrackDfect
CompanyAccountSetUpEndToEnd Scenario
steps to run the code 
1.In package.json you have to change the path of the Script according to the script you are running
  for example :  "cypress run --spec 'cypress/integration/UI_Testing/Company/CompanyAccountSetUpEndToEnd.spec.js --headed"'
2.for getting html report you have to use "npm run test" command
3. give a newly or not modified user ids to all three testcases 
*/
describe('Company- UI- AccountSetupEndToEnd- Test Suite', () => {
    beforeEach(function(){
        cy.intercept({hostname: Authid}).as('auth');
        cy.intercept({hostname: hasuraid}).as('hasura');
        cy.visit(endtoendurl);
    })
    it(`Test 001:Company - UI - AccountSetupEndToEnd- withprimarybankaccount`, () => {
        EndtoendSetup.EnterEmail(ValidUser01)
        EndtoendSetup.EnterPassword(ValidPassword)
        EndtoendSetup.ClickLogin()
        cy.wait('@hasura');
        EndtoendSetup.CheckAndAddPAN('AAJCB9440M')
        cy.wait('@hasura');
        EndtoendSetup.SelectEstimatedARRValue('2');
        EndtoendSetup.clickUpload();
        EndtoendSetup.UploadPaymentPartnerFile('UploadFiles/PaymentPartner/subscription_100000_plus_recordslessthan20mbsize.csv');
        EndtoendSetup.clickUploadfilebutton();
        EndtoendSetup.ClickNext()
        cy.wait('@hasura');
        EndtoendSetup.ClickAddBank()
        EndtoendSetup.SelectBankNameValue('65');
        EndtoendSetup.SelectBankAccountTypeValue('0');
        EndtoendSetup.ClickConfirm();
        EndtoendSetup.UploadBankDataPdfFile('detailStatement.pdf')
        EndtoendSetup.ClickVerifyBankData()
        EndtoendSetup.ClickNext()
        EndtoendSetup.clickUploadAccountingData();
        cy.wait('@hasura');
        EndtoendSetup.UploadAccountingDataFile("UploadFiles/AccountingData/sample-Accountingtest.xlsx"); 
        EndtoendSetup.clickUploadfilebutton();
        EndtoendSetup.ClickSubmitforReview()
        EndtoendSetup.verifyAccountSetup();
    })
});  