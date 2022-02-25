/// <reference types ="cypress"/>
import { Authid, DifferentCompanyPassword, DifferentCompanyUserid, DifferentPAN, hasuraid, PANCOMPANY, TestUrl, ValidPAN, ValidPassword, ValidUserid } from '../../../linkpanconfig';
import LinkPanPage from '../BridgeUpUIPageObjects/LinkPanPageObj'
/*
AUTHOR: TrackDfect
CompanyLinkPan Scenario
steps to run the code 
1.In package.json you have to change the path of the Script according to the script you are running
  for example :  "cypress run --spec 'cypress/integration/UI_Testing/Company/CompanyLinkPan.spec.js --headed"'
2.for getting html report you have to use "npm run test" command
3. give a newly signed up email in the validuserid field, which you needed to change in the linkpanconfig.js file
*/                                                                                                

describe('Company- UI- LinkPanPage- Test Suite', () => {
      
    before(function(){
        cy.intercept({hostname: Authid}).as('auth');
        cy.intercept({hostname: hasuraid}).as('hasura');
        cy.visit(TestUrl);
        LinkPanPage.EnterEmail(ValidUserid)
        LinkPanPage.EnterPassword(ValidPassword)
        LinkPanPage.ClickLogin()
        cy.wait('@auth');
        cy.wait('@hasura');
    })
    it(`Test 001:Company - UI - LinkPanPage - Default text Display - Testcase-verification`, () => {
        LinkPanPage.VerifyDefaultTextAddyourPan();
        LinkPanPage.VerifyDefaultTextPanInfo();
        LinkPanPage.VerifyDefaultTextonverifyPan();
        LinkPanPage.VerifyDefaultLabelPANNumber();
        LinkPanPage.VerifyDefaultNextbuttonDisabled();
        LinkPanPage.VerifyDefaultMenuList();
        LinkPanPage.VerifyDefaultLogoutbuttonEnabled();


    })  
    
    it(`Test 002:Company - UI - LinkPanPage - Enter Null PAN Number - Testcase-negative`, () => {
        LinkPanPage.ClickVerify();
        LinkPanPage.VerifyInvalidPANMsg()  
    })  
    it(`Test 003:Company - UI - LinkPanPage - Enter Blankspace in PAN Number - Testcase-negative`, () => {
        
        LinkPanPage.EnterPanNumber('            ');
        LinkPanPage.ClickVerify();
        LinkPanPage.VerifyInvalidPANMsg()
       
    })
    it(`Test 004:Company - UI - LinkPanPage - Enter Invalid in PAN Number - Testcase-negative`, () => {
        
        LinkPanPage.EnterPanNumber('AASSDDFF10');
        LinkPanPage.ClickVerify();
        LinkPanPage.VerifyInvalidPANMsg()
       
    })
    it(`Test 005:Company - UI - LinkPanPage - Enter SpecialChar in PAN Number - Testcase-negative`, () => {
        
        LinkPanPage.EnterPanNumber('AA$#DDFF10');
        LinkPanPage.ClickVerify();
        LinkPanPage.VerifyInvalidPANMsg()
       
    })
    it(`Test 006:Company - UI - LinkPanPage - Enter len less than 10 chr in PAN Number - Testcase-negative`, () => {
        
        LinkPanPage.EnterPanNumber('AADF10');
        LinkPanPage.ClickVerify();
        LinkPanPage.VerifyInvalidPANMsg()
       
    })
    it(`Test 007:Company - UI - LinkPanPage - Enter len More than 10 chr in PAN Number - Testcase-negative`, () => {
        
        LinkPanPage.EnterPanNumber('AADF10000qwer234445555ssffafggg');
        LinkPanPage.ClickVerify();
        cy.wait(10000);
        LinkPanPage.VerifyInvalidPANMsg()
        cy.wait(10000);
       
    })
    it(`Test 008:Company - UI - LinkPanPage - Enter different PAN Number - Testcase-negative`, () => {
        cy.visit(TestUrl);
        LinkPanPage.EnterEmail(DifferentCompanyUserid)
        LinkPanPage.EnterPassword(DifferentCompanyPassword)
        LinkPanPage.ClickLogin()
        LinkPanPage.EnterPanNumber(DifferentPAN);
        LinkPanPage.ClickVerify();
        LinkPanPage.VerifyInvalidCompanyNameMismatchMsg()
        LinkPanPage.ClickReenterPAN();
        LinkPanPage.ClickLogout();

    })

    it(`Test 009:Company - UI - LinkPanPage - Enter valid PAN Number - Testcase-positive`, () => {
        cy.visit(TestUrl);
        LinkPanPage.EnterEmail(ValidUserid)
        LinkPanPage.EnterPassword(ValidPassword)
        LinkPanPage.ClickLogin()
        LinkPanPage.EnterPanNumber(ValidPAN);
        LinkPanPage.ClickVerify();
        LinkPanPage.VerifyvalidPANMsg();
        LinkPanPage.VerifyvalidCompanyName(PANCOMPANY);
        LinkPanPage.ClickLogout();
    })
   
});  