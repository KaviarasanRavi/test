/// <reference types ="cypress"/>
import LoginpageNew from '../Documents/cypress project/cypress/integration/UI_Testing/BridgeUpUIPageObjects/LoginPageObjNew';
describe('Company- UI- Loginpage- Test Suite', () => {
    before(function () {
        cy.visit('https://app.bridgeup.com/login');
    })


    it.only(`Test 001:Company - UI - Loginpage - Login with valid Email & Password - Testcase`, () => {
        const Loginp = new LoginpageNew()
        Loginp.EnterEmail('prabhakaran+531@bridgeup.com')         
        Loginp.EnterPassword('Admin@123$')
        Loginp.ClickLogin()
        Loginp.EnterAddPAN('AAJCB9440M')
        Loginp.EnterEstimated()
        Loginp.AddBankDetails()
        // Loginp.BankStatementUpload('Bizgaze-MG Car-Statement.pdf','yesbankstatement.pdf','ICICI-Credit-Card-Statement.pdf')
    });

    // /* ==== Test Created with Cypress Studio ==== */
    // it('esti arr', function() {
    //     /* ==== Generated with Cypress Studio ==== */
    //     cy.get('#mui-1').clear();
    //     cy.get('#mui-1').type('prabhakaran+330@bridgeup.com');
    //     cy.get('#mui-1').click();
    //     cy.get('#mui-1').clear();
    //     cy.get('#mui-1').type('prabhakaran+345@bridgeup.com');
    //     cy.get('#mui-2').clear();
    //     cy.get('#mui-2').type('Admin@123$');
    //     cy.get('.MuiButton-contained').click();
    //     cy.get('.MuiButton-root').click();
    //     cy.get('body').click();
    //     cy.get('[data-value="100"]').click();
    //     cy.get(':nth-child(2) > .MuiButton-root').click();
    /* ==== End Cypress Studio ==== */
    // });

    /* ==== Test Created with Cypress Studio ==== */
    // it('check1', function() {
    /* ==== Generated with Cypress Studio ==== */
    //     cy.get('#mui-1').clear();
    //     cy.get('#mui-1').type('prabhakaran+344@bridgeup.com');
    //     cy.get('#mui-1').click();
    //     cy.get('#mui-1').clear();
    //     cy.get('#mui-1').type('prabhakaran+350@bridgeup.com');
    //     cy.get('#mui-2').click();
    //     cy.get('#mui-2').clear();
    //     cy.get('#mui-2').type('Admin@123$');
    //     cy.get('.MuiButton-contained').click();
    //     cy.get('.MuiButton-root').click();
    //     cy.get('body').click();
    //     cy.get('[data-value="100"]').click();
    //     cy.get('body').click();
    //     cy.get('[data-value="500"]').click();
    //     /* ==== End Cypress Studio ==== */
    // });

    /* ==== Test Created with Cypress Studio ==== */
    // it('send', function() {
    //     /* ==== Generated with Cypress Studio ==== */
    //     cy.get('#mui-1').clear();
    //     cy.get('#mui-1').type('prabhakaran+357@bridgeup.com');
    //     cy.get('#mui-2').click();
    //     cy.get('#mui-2').clear();
    //     cy.get('#mui-2').type('Admin@123$');
    //     cy.get('.MuiButton-contained').click();
    //     cy.get('.MuiButton-root').click();
    //     /* ==== End Cypress Studio ==== */
    // });                              

    /* ==== Test Created with Cypress Studio ==== */
    it('charge bee', function() {
        /* ==== Generated with Cypress Studio ==== */
        cy.get('#mui-1').clear();
        cy.get('#mui-1').type('prabhakaran+330@bridgeup.com');
        cy.get('#mui-1').clear();
        cy.get('#mui-1').type('prabhakaran+309@bridgeup.com');
        cy.get('#mui-2').clear();
        cy.get('#mui-2').type('Admin@123$');
        cy.get('form.mt-5 > :nth-child(1)').click();
        cy.get('.MuiButton-contained').click();
        cy.get('.MuiButton-root').click();
        cy.get(':nth-child(2) > .each-box > .brand-logo').click();
        cy.get('#mui-5').clear();
        cy.get('#mui-5').type('test_SZlGsnwAI7bT14ci6UDcxrmxnVNtNymA');
        cy.get('#mui-6').clear();
        cy.get('#mui-6').type('aditya-bridgeup-test');
        cy.get('.btn-holders > .MuiButton-root').click();
        /* ==== End Cypress Studio ==== */
    });

    // /* ==== Test Created with Cypress Studio ==== */
    // it.only('check  karo', function() {
    //     /* ==== Generated with Cypress Studio ==== */
    //     cy.get('#mui-1').clear();
    //     cy.get('#mui-1').type('prabhakaran+330@bridgeup.com');
    //     cy.get('#mui-1').click();
    //     cy.get('#mui-1').clear();
    //     cy.get('#mui-1').type('prabhakaran+305@bridgeup.com');
    //     cy.get('#mui-2').clear();
    //     cy.get('#mui-2').type('Admin@123$');
    //     cy.get('.MuiButton-contained').click();
    //     cy.get('.MuiButton-root').click();
    //     cy.get('body').click();
    //     cy.get('[data-value="100"]').click();
    //     cy.get(':nth-child(2) > .MuiButton-root').click();
    //     cy.get(':nth-child(2) > .MuiButton-root').click();
    //     cy.get(':nth-child(1) > .MuiButton-root').click();
    //     cy.get('.mt-14').click();
    //     cy.get('.MuiDialogContent-root > :nth-child(2) > .css-16a96b4 > :nth-child(2) > .input-fields > .select-bank-dropdown > .MuiFormControl-root > .MuiFilledInput-root > .MuiAutocomplete-endAdornment > .MuiButtonBase-root > [data-testid="ArrowDropDownIcon"]').click();
    //     cy.get('#auto-complete-option-62').click();
    //     cy.get(':nth-child(1) > .mt-4 > .css-16a96b4 > :nth-child(2) > .input-fields > .select-bank-dropdown > .MuiFormControl-root > .MuiFilledInput-root > .MuiAutocomplete-endAdornment > .MuiButtonBase-root > [data-testid="ArrowDropDownIcon"]').click();
    //     cy.get('#auto-complete-option-220').click();
    //     cy.get(':nth-child(1) > .mt-4 > .css-16a96b4 > .MuiGrid-container > .MuiGrid-root > .input-fields > .select-bank-dropdown > .MuiFormControl-root > .MuiFilledInput-root > .MuiAutocomplete-endAdornment > .MuiButtonBase-root > [data-testid="ArrowDropDownIcon"] > path').click();
    //     cy.get('#auto-complete-option-0').click();
    //     cy.get('.btn-holders > .MuiButton-contained').click();
    //     cy.get('.mt-10 > .accounts > .lowerG > .MuiGrid-container > .MuiGrid-grid-sm-9 > .mt-5 > .uppercase').click();
    //     cy.get(':nth-child(4) > .accounts > .lowerG > .MuiGrid-container > .MuiGrid-grid-sm-9 > .mt-5 > .uppercase').click();
    //     cy.get('.mt-10 > .accounts > .lowerG > :nth-child(2) > .MuiGrid-grid-sm-9 > .mt-5 > .MuiButton-root').click();
    //     cy.get(':nth-child(4) > .accounts > .lowerG > .MuiGrid-container > .MuiGrid-grid-sm-9 > .mt-5').click();
    //     cy.get('.MuiGrid-container > :nth-child(2) > .MuiButton-root').click();
    //     cy.get('.stepper-logout').click();
    //     cy.get('#mui-7').clear();
    //     cy.get('#mui-7').type('prabhakaran+303@bridgeup.com');
    //     cy.get('#mui-8').clear();
    //     cy.get('#mui-8').type('Admin@123$');
    //     cy.get('.MuiButton-contained').click();
    //     cy.get(':nth-child(1) > .MuiButton-root').click();
    //     cy.get('.mt-14').click();
    //     cy.get('[data-testid="CloseOutlinedIcon"]').click();
    //     cy.get(':nth-child(1) > .MuiButton-root').click();
    //     cy.get(':nth-child(2) > .MuiButton-root').click();
    //     cy.get('.mt-14').click();
    //     cy.get('.MuiDialogContent-root > :nth-child(2) > .css-16a96b4 > :nth-child(2) > .input-fields > .select-bank-dropdown > .MuiFormControl-root > .MuiFilledInput-root > .MuiAutocomplete-endAdornment > .MuiButtonBase-root > [data-testid="ArrowDropDownIcon"]').click();
    //     cy.get('#auto-complete-option-62').click();
    //     cy.get('.MuiDialogContent-root > :nth-child(2) > .css-16a96b4 > .MuiGrid-container > .MuiGrid-root > .input-fields > .select-bank-dropdown > .MuiFormControl-root > .MuiFilledInput-root > .MuiAutocomplete-endAdornment > .MuiButtonBase-root > [data-testid="ArrowDropDownIcon"]').click();
    //     cy.get('.MuiDialogContent-root > :nth-child(2) > .css-16a96b4 > .MuiGrid-container > .MuiGrid-root > .input-fields > .select-bank-dropdown > .MuiFormControl-root > .MuiFilledInput-root > .MuiAutocomplete-endAdornment > .MuiButtonBase-root > [data-testid="ArrowDropDownIcon"]').click();
    //     cy.get(':nth-child(1) > .mt-4 > .css-16a96b4 > :nth-child(2) > .input-fields > .select-bank-dropdown > .MuiFormControl-root > .MuiFilledInput-root > .MuiAutocomplete-endAdornment > .MuiButtonBase-root > [data-testid="ArrowDropDownIcon"]').click();
    //     cy.get('#auto-complete-option-220').click();
    //     cy.get(':nth-child(1) > .mt-4 > .css-16a96b4 > .MuiGrid-container > .MuiGrid-root > .input-fields > .select-bank-dropdown > .MuiFormControl-root > .MuiFilledInput-root > .MuiAutocomplete-endAdornment > .MuiButtonBase-root > [data-testid="ArrowDropDownIcon"]').click();
    //     cy.get('#auto-complete-option-0').click();
    //     cy.get('.btn-holders > .MuiButton-contained').click();
    //     cy.get('.mt-10 > .accounts > .lowerG > .MuiGrid-container > .MuiGrid-grid-sm-9 > .mt-5 > .uppercase').click();
    //     cy.get(':nth-child(4) > .accounts > .lowerG > .MuiGrid-container > .MuiGrid-grid-sm-9 > .mt-5 > .uppercase').click();
    //     cy.get(':nth-child(2) > .MuiGrid-grid-sm-9 > .mt-5 > .MuiButton-root').click();
    //     cy.get('.uppercase').click();
    //     cy.get('.MuiGrid-container > :nth-child(2) > .MuiButton-root').click();
    //     cy.get(':nth-child(2) > .MuiButton-root').click();
    //     cy.get('.MuiButton-root').click();
    //     cy.get(':nth-child(1) > .MuiButton-root').click();
    //     cy.get('.MuiGrid-grid-sm-7 > .small-container').click();
    //     cy.get('.MuiButton-root').click();
    //     cy.get(':nth-child(2) > .MuiButton-root').click();
    //     cy.get('.verify-text').should('be.visible');
    //     cy.get('.MuiGrid-container > :nth-child(2) > .MuiButton-root').click();
    //     cy.get('.stepper-logout').click();
    //     /* ==== End Cypress Studio ==== */
    // });

    /* ==== Test Created with Cypress Studio ==== */
    it('add bankdetails ', function() {
        /* ==== Generated with Cypress Studio ==== */
        cy.get('#mui-1').clear();
        cy.get('#mui-1').type('prabhakaran+362@bridgeup.com');
        cy.get('#mui-2').click();
        cy.get('#mui-2').clear();
        cy.get('#mui-2').type('Admin@123$');
        cy.get('.MuiButton-contained').click();
        cy.wait(10000)
        cy.get('.MuiButton-root').click();
        cy.get(':nth-child(2) > .MuiButton-root').click();
        cy.get('.mt-14').click();
        cy.get('.MuiDialogContent-root > :nth-child(2) > .css-16a96b4 > :nth-child(2) > .input-fields > .select-bank-dropdown > .MuiFormControl-root > .MuiFilledInput-root > .MuiAutocomplete-endAdornment > .MuiButtonBase-root > [data-testid="ArrowDropDownIcon"]').click();
        cy.get('#auto-complete-option-62').click();
        cy.wait(10000)
        cy.get(':nth-child(1) > .mt-4 > .css-16a96b4 > :nth-child(2) > .input-fields > .select-bank-dropdown > .MuiFormControl-root > .MuiFilledInput-root > .MuiAutocomplete-endAdornment > .MuiButtonBase-root > [data-testid="ArrowDropDownIcon"]').click();
        cy.get('#auto-complete-option-62').click();
        cy.get(':nth-child(1) > .mt-4 > .css-16a96b4 > .MuiGrid-container > .MuiGrid-root > .input-fields > .select-bank-dropdown > .MuiFormControl-root > .MuiFilledInput-root > .MuiAutocomplete-endAdornment > .MuiButtonBase-root > [data-testid="ArrowDropDownIcon"]').click();
        cy.get('#auto-complete-option-0').click();
        cy.get('.btn-holders > .MuiButton-contained').click();
        /* ==== End Cypress Studio ==== */
    });

    /* ==== Test Created with Cypress Studio ==== */
    it('uploadbank', function() {
        /* ==== Generated with Cypress Studio ==== */
        cy.get('#mui-1').clear();
        cy.get('#mui-1').type('prabhakaran+362@bridgeup.com');
        cy.get('#mui-2').clear();
        cy.get('#mui-2').type('Admin@123$');
        cy.get('.MuiButton-contained').click();
        cy.get('.MuiButton-root').click();
        cy.get(':nth-child(2) > .MuiButton-root').click();
        cy.get('.mt-14').click();
        cy.get('.MuiDialogContent-root > :nth-child(2) > .css-16a96b4 > :nth-child(2) > .input-fields > .select-bank-dropdown > .MuiFormControl-root > .MuiFilledInput-root > .MuiAutocomplete-endAdornment > .MuiButtonBase-root > [data-testid="ArrowDropDownIcon"]').click();
        cy.get('#auto-complete-option-62').click();
        cy.get(':nth-child(1) > .mt-4 > .css-16a96b4 > :nth-child(2) > .input-fields > .select-bank-dropdown > .MuiFormControl-root > .MuiFilledInput-root > .MuiAutocomplete-endAdornment > .MuiButtonBase-root > [data-testid="ArrowDropDownIcon"]').click();
        cy.get(':nth-child(1) > .mt-4 > .css-16a96b4 > :nth-child(2) > .input-fields > .select-bank-dropdown > .MuiFormControl-root > .MuiFilledInput-root > .MuiAutocomplete-endAdornment > .MuiButtonBase-root > [data-testid="ArrowDropDownIcon"]').click();
        cy.get('#auto-complete-option-65').click();
        cy.get(':nth-child(1) > .mt-4 > .css-16a96b4 > .MuiGrid-container > .MuiGrid-root > .input-fields > .select-bank-dropdown > .MuiFormControl-root > .MuiFilledInput-root > .MuiAutocomplete-endAdornment > .MuiButtonBase-root > [data-testid="ArrowDropDownIcon"]').click();
        cy.get('#auto-complete-option-0').click();
        cy.get('.btn-holders > .MuiButton-contained').click();
        cy.get('.mt-10 > .accounts > .lowerG > .MuiGrid-container > .MuiGrid-grid-sm-9 > .mt-5 > .uppercase').click();
        cy.get(':nth-child(4) > .accounts > .lowerG > .MuiGrid-container > .MuiGrid-grid-sm-9 > .mt-5 > .uppercase').click();
        cy.get('.mt-10 > .accounts > .lowerG > :nth-child(2) > .MuiGrid-grid-sm-9 > .mt-5 > .MuiButton-root').click();
        cy.get('.MuiGrid-container > :nth-child(2) > .MuiButton-root').click();
        /* ==== End Cypress Studio ==== */
    });

    /* ==== Test Created with Cypress Studio ==== */
    it('3rd bank', function() {
        /* ==== Generated with Cypress Studio ==== */
        cy.get('#mui-1').clear();
        cy.get('#mui-1').type('prabhakaran+340@bridgeup.com');
        cy.get('#mui-2').clear();
        cy.get('#mui-2').type('Admin@123$');
        cy.get('.MuiButton-contained').click();
        cy.get('.MuiButton-root').click();
        cy.get(':nth-child(2) > .MuiButton-root').click();
        cy.get('.text-right > .text-14').click();
        cy.get(':nth-child(1) > .mt-4 > .css-16a96b4 > :nth-child(2) > .input-fields > .select-bank-dropdown > .MuiFormControl-root > .MuiFilledInput-root > .MuiAutocomplete-endAdornment > .MuiButtonBase-root > [data-testid="ArrowDropDownIcon"]').click();
        cy.get('#auto-complete-option-2').click();
        cy.get(':nth-child(1) > .mt-4 > .css-16a96b4 > .MuiGrid-container > .MuiGrid-root > .input-fields > .select-bank-dropdown > .MuiFormControl-root > .MuiFilledInput-root > .MuiAutocomplete-endAdornment > .MuiButtonBase-root > [data-testid="ArrowDropDownIcon"]').click();
        cy.get('#auto-complete-option-0').click();
        cy.get('.add-another-bank > div').click();
        cy.get(':nth-child(3) > .css-16a96b4 > :nth-child(2) > .input-fields > .select-bank-dropdown > .MuiFormControl-root > .MuiFilledInput-root > .MuiAutocomplete-endAdornment > .MuiButtonBase-root > [data-testid="ArrowDropDownIcon"]').click();
        cy.get(':nth-child(3) > .css-16a96b4 > :nth-child(2) > .input-fields > .select-bank-dropdown > .MuiFormControl-root > .MuiFilledInput-root > .MuiAutocomplete-endAdornment > .MuiButtonBase-root > [data-testid="ArrowDropDownIcon"]').click();
        cy.get(':nth-child(3) > .css-16a96b4 > :nth-child(2) > .input-fields > .select-bank-dropdown > .MuiFormControl-root > .MuiFilledInput-root > .MuiAutocomplete-endAdornment > .MuiButtonBase-root > [data-testid="ArrowDropDownIcon"]').click();
        cy.get('#auto-complete-option-3').click();
        cy.get(':nth-child(3) > .css-16a96b4 > .MuiGrid-container > .MuiGrid-root > .input-fields > .select-bank-dropdown > .MuiFormControl-root > .MuiFilledInput-root > .MuiAutocomplete-endAdornment > .MuiButtonBase-root > [data-testid="ArrowDropDownIcon"]').click();
        cy.get('#auto-complete-option-0').click();
        cy.get('.btn-holders > .MuiButton-contained').click();
        cy.get('.MuiGrid-container > :nth-child(2) > .MuiButton-root').click();
        /* ==== End Cypress Studio ==== */
    });
}); 
