/// <reference types ="cypress"/>
class LoginpageNew {
  visit() {
    //cy.visit("https://app.devbridgeup.com/login")
  }
  EnterEmail(value) {
    const field = cy.get('.mt-8 > .MuiFormControl-root > .MuiFilledInput-root > .MuiFilledInput-input')
    field.clear()
    field.type(value)
    return this
  }

  EnterPassword(value) {
    const field = cy.get('.mt-10 > .MuiFormControl-root > .MuiFilledInput-root > .MuiFilledInput-input')
    field.clear()
    field.type(value)
    return this
  }

  EnterAddPAN(value) {
    cy.get('body').then((body) => {
      if (body.find('[focusable="false"]').is(":visible")) {
        cy.get('.MuiButton-root').click()
      } else {
        const field = cy.get('.MuiFilledInput-input.MuiInputBase-input.MuiInputBase-inputAdornedEnd.css-14jjnli')
        field.clear()
        field.type(value)
        cy.get('.MuiTypography-root.MuiTypography-button.css-1i2bach').click()
        cy.wait(15000)
        cy.get('.MuiButton-root').click()
      }
    })
  }
  ClickLogin() {
    //const button = cy.get('.MuiButton-root')
    cy.get('.MuiLoadingButton-root')
    button.click()
    cy.wait(10000)
  }

   EnterEstimated(){
        cy.get('.MuiSelect-select.MuiSelect-filled.MuiFilledInput-input.MuiInputBase-input.css-1wg0gvl').click()
        cy.get('[data-value="500"]').click()
        cy.wait(5000)
        cy.get(':nth-child(2) > .MuiButton-root').click()
      }
        
        
    //   } else {
    //     cy.wait(20000)
    //     const button = cy.xpath('//button[contains(@class,"MuiButton-root MuiButton-contained")]')
    //     button.click()
    //   }
    // })
  
  
  //     if (cy.get('.notranslate').contains('1.5,10,100,500')) {
  //       // cy.get('.MuiSelect-select.MuiSelect-filled.MuiFilledInput-input.MuiInputBase-input.css-1wg0gvl').click()
  //       //       cy.get('[data-value="1000"]').click()
  //       //       const button = cy.xpath('//button[contains(@class,"MuiButton-root MuiButton-contained")]')
  //       //       button.click()
  //       const button = cy.xpath('//button[contains(@class,"MuiButton-root MuiButton-contained")]')
  //       button.click()
  //       //return cy.contains('No data available')
  //     } else {
  //       cy.get('.MuiSelect-select.MuiSelect-filled.MuiFilledInput-input.MuiInputBase-input.css-1wg0gvl').click()
  //       cy.get('[data-value="1000"]').click()
  //       const button = cy.xpath('//button[contains(@class,"MuiButton-root MuiButton-contained")]')
  //       button.click()

  //       // const button = cy.xpath('//button[contains(@class,"MuiButton-root MuiButton-contained")]')
  //       // button.click()

  //       //return cy.get($el).eq(2).contains(valueInserted);
  //     }
  //  }
  
   //{
  //   cy.get('[data-testid=ArrowDropDownIcon]').click()
  //   cy.get('#disable-clearable-option-' + Value).click()
  // }
  EnterBankName(Value) {
    cy.get('.MuiDialogContent-root > :nth-child(2) > .css-16a96b4 > :nth-child(2) > .input-fields > .select-bank-dropdown > .MuiFormControl-root > .MuiFilledInput-root > .MuiAutocomplete-endAdornment > .MuiButtonBase-root > [data-testid=ArrowDropDownIcon]').click()
    cy.get('#auto-complete-option-' + Value).click()
  }
  ClickNextInExtimated() {


    //const button = cy.get('.MuiButton-root')
    const button = cy.xpath('//button[contains(@class,"MuiButton-root MuiButton-contained")]')
    button.click()

  }
  ClickAddBank() {
    //const button = cy.get('.MuiButton-root')
    const button = cy.xpath('//div[contains(@class,"mt-12 text-color-3")]//a[1]')
    button.click()
  }
  ClickVerifyPan() {
    //const button = cy.get('.MuiButton-root')
    const button = cy.xpath('//span[contains(@class,"MuiTypography-root MuiTypography-button")]')
    button.click()

  }
  ClickNextInPan() {
    //const button = cy.get('.MuiButton-root')
    const button = cy.get('.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-disableElevation.MuiButton-fullWidth.MuiButtonBase-root.button.primary-button.undefined.css-m2y76l').click()
    //cy.wait(10000)
  }
  AddStripeAsPaymentpartner() {
    cy.get('body').then((body) => {
      if (body.find(':nth-child(1) > .each-box > .success-hold').is(":visible")) {
         cy.get('.logo > img')
      } else {   
    cy.get(':nth-child(1) > .each-box > .brand-logo').click();
    cy.wait(10000);
    cy.get('#skip-account-app > .Button-align > .Flex-flex > .Button-label > span').click();
    cy.wait(20000);
      }   
    })
  }
  clicknext(){
    cy.get('.MuiButton-root').click();
  }
  AddBankDetails(){
    // cy.get('body').then((body) => {
    //   cy.wait(7000)
    //   if (body.find('.mt-4.text-24.text-bold').is(":visible")) {
        cy.get('.mt-14').click();
    cy.get('.MuiDialogContent-root > :nth-child(2) > .css-16a96b4 > :nth-child(2) > .input-fields > .select-bank-dropdown > .MuiFormControl-root > .MuiFilledInput-root > .MuiAutocomplete-endAdornment > .MuiButtonBase-root > [data-testid="ArrowDropDownIcon"]').click();
    cy.get('#auto-complete-option-62').click();
    cy.get(':nth-child(1) > .mt-4 > .css-16a96b4 > :nth-child(2) > .input-fields > .select-bank-dropdown > .MuiFormControl-root > .MuiFilledInput-root > .MuiAutocomplete-endAdornment > .MuiButtonBase-root > [data-testid="ArrowDropDownIcon"]').click();
    //   } else { 
    // cy.wait(5000)
    
    cy.get('#auto-complete-option-220').click();
    cy.get(':nth-child(1) > .mt-4 > .css-16a96b4 > .MuiGrid-container > .MuiGrid-root > .input-fields > .select-bank-dropdown > .MuiFormControl-root > .MuiFilledInput-root > .MuiAutocomplete-endAdornment > .MuiButtonBase-root > [data-testid="ArrowDropDownIcon"]').click();
    cy.get('#auto-complete-option-0').click();
    cy.get('.add-another-bank > div').click();
    cy.wait(5000)
    cy.get(':nth-child(3) > .css-16a96b4 > :nth-child(2) > .input-fields > .select-bank-dropdown > .MuiFormControl-root > .MuiFilledInput-root > .MuiAutocomplete-endAdornment > .MuiButtonBase-root > [data-testid="ArrowDropDownIcon"]').click();
    cy.get('#auto-complete-option-65').click();
    cy.get(':nth-child(3) > .css-16a96b4 > .MuiGrid-container > .MuiGrid-root > .input-fields > .select-bank-dropdown > .MuiFormControl-root > .MuiFilledInput-root > .MuiAutocomplete-endAdornment > .MuiButtonBase-root > [data-testid="ArrowDropDownIcon"]').click();
    cy.get('#auto-complete-option-0').click();
    // cy.get('.btn-holders > .MuiButton-contained').click();
  }   
// })
// }
  // UploadBankStatements(){

  // }

  // AddStripeAsPaymentpartner() {
  //   cy.get(':nth-child(1) > .each-box > .brand-logo').click();
  //   cy.wait(10000);
  //   cy.get('#skip-account-app > .Button-align > .Flex-flex > .Button-label > span').click();
  //   cy.wait(20000);
  //   const button = cy.xpath('//button[contains(@class,"MuiButton-root MuiButton-contained")]')
  //       button.click()
  // }
  // AddChargebeeAsPaymentpartner() {
  //   cy.get(':nth-child(2) > .each-box > .brand-logo').click();
  //   cy.get('#mui-5').clear();
  //   cy.get('#mui-5').type('test_SZlGsnwAI7bT14ci6UDcxrmxnVNtNymA');
  //   cy.get('#mui-6').clear();
  //   cy.get('#mui-6').type('aditya-bridgeup-test');
  //   cy.get('.btn-holders > .MuiButton-root').click();
  //   }
  // AddChargebeeAsPaymentpartner(value1,value2) {
  //   cy.get('body').then((body) => {
  //     if (body.find('Successfully linked').is(":visible")) {
  //       const button = cy.xpath('//button[contains(@class,"MuiButton-root MuiButton-contained")]')
  //  button.click()
  //     } else {
  //     cy.get(':nth-child(2) > .each-box > .brand-logo').click();
  //     cy.get('#mui-5').clear();
  //     cy.get('#mui-5').type(value1);
  //     cy.get('#mui-6').clear();
  //     cy.get('#mui-6').type(value2);
  //     cy.get('.btn-holders > .MuiButton-root').click();
  //     cy.wait(5000)
  //     const button = cy.xpath('//button[contains(@class,"MuiButton-root MuiButton-contained")]')
  //     }
  //   })
  // }
  AddChargebeeAsPaymentpartner(value1,value2) {
    cy.get('body').then((body) => {
      if (body.find(':nth-child(2) > .each-box > .success-hold').is(":visible")) {
        const button = cy.xpath('//button[contains(@class,"MuiButton-root MuiButton-contained")]')
   button.click()
  // const button = cy.xpath('//button[contains(@class,"MuiButton-root MuiButton-contained")]')
      } else {
      cy.wait(10000);
      cy.get(':nth-child(2) > .each-box > .brand-logo').click();
      cy.wait(10000);
      cy.get('input#mui-5').click();
      cy.get('input#mui-5').type(value1);
      cy.get('input#mui-6').click();
      cy.get('input#mui-6').type(value2);
      cy.get('.btn-holders > .MuiButton-root').click();
      cy.wait(5000)
      cy.get(':nth-child(2) > .MuiButton-root').click();
      cy.wait(10000);
      const button = cy.get(':nth-child(2) > .MuiButton-root') 
       button.click()
       cy.wait(5000)
      }
    })
  }
  BankStatementUpload(filepath1,filepath2,filepath3){
    // const pdfile = 'Hdfcbankstatement.pdf'
    //     cy.get('.mt-10 > .accounts > .lowerG > .MuiGrid-container > .MuiGrid-grid-sm-9 > .mt-5 > .uppercase').attachFile(pdfile)
        const filepathone = filepath1
       cy.get("Input[type=file]")
             .invoke('removeAttr', 'style')
             .attachFile(filepathone)
            //  .attachFile({ filePath: filepath1, encoding: 'utf-8' })
          //cy.get('.upload-file > :nth-child(2) > :nth-child(1)').attachFile(filepath1,{ subjectType: 'drag-n-drop' })
        cy.wait(3000)
        cy.get('.mt-10 > .accounts > .lowerG > :nth-child(2) > .MuiGrid-grid-sm-9 > .mt-5 > .MuiButton-root').click()
        cy.wait(8000)
        const filepathtwo = filepath2
        cy.get(':nth-child(4) > .accounts > .lowerG > .MuiGrid-container > .MuiGrid-grid-sm-9 > #upload-button-file')
        
                 .invoke('removeAttr', 'style')
                 .attachFile(filepathtwo)
        cy.wait(10000)
        cy.get(':nth-child(4) > .accounts > .lowerG > :nth-child(2) > .MuiGrid-grid-sm-9 > .mt-5 > .MuiButton-root').click()
        cy.wait(15000)
        const filepaththree = filepath3
        cy.get(':nth-child(5) > .accounts > .lowerG > .MuiGrid-container > .MuiGrid-grid-sm-9 > #upload-button-file')
                 .invoke('removeAttr', 'style')
                 .attachFile(filepaththree)
        cy.wait(10000)
        
        cy.xpath('(//a[contains(@class,"uppercase text-14")])[3]').click()
        cy.wait(8000)
        cy.get('.MuiGrid-container > :nth-child(2) > .MuiButton-root').click()
        cy.wait(8000)

      }
      // StatementUpload2(filepath){
        // const pdfile = 'Hdfcbankstatement.pdf'
        //     cy.get('.mt-10 > .accounts > .lowerG > .MuiGrid-container > .MuiGrid-grid-sm-9 > .mt-5 > .uppercase').attachFile(pdfile)
            // const filepath2 = filepath
            // cy.get(':nth-child(4) > .accounts > .lowerG > .MuiGrid-container > .MuiGrid-grid-sm-9 > #upload-button-file')
            //      .invoke('removeAttr', 'style')
            //      .attachFile(filepath2)
                //  .attachFile({ filePath: filepath1, encoding: 'utf-8' })
              //cy.get('.upload-file > :nth-child(2) > :nth-child(1)').attachFile(filepath1,{ subjectType: 'drag-n-drop' })
            // cy.wait(10000)
        
          // }
    // AddChargebeeAsPaymentpartner(value1,value2) {
    //   cy.get(':nth-child(2) > .each-box > .brand-logo').click();
    //   cy.get('#mui-5').clear();
    //   cy.get('#mui-5').type(value1);
    //   cy.get('#mui-6').clear();
    //   cy.get('#mui-6').type(value2);
    //   cy.get('.btn-holders > .MuiButton-root').click();
    //   const button = cy.xpath('//button[contains(@class,"MuiButton-root MuiButton-contained")]')
    // button.click()
    //   }
  ClickForgetpassword() {
    const button = cy.get('.mt-2 > .color-secondary')
    button.click()

  }

  ClickSignUp() {
    const button = cy.get('.mt-5 > .color-secondary')
    button.click()

  }
  VerifyDefaultTextLogin() {
    cy.get('.text-24').should('have.text', 'Login')
  }
  VerifyDefaultTextWelcomeBack() {
    cy.get('.bridgeup-carousel-item > :nth-child(2) > .text-bold').should('have.text', 'Welcome back to BridgeUp')
  }
  VerifyDefaultTextSlogan() {
    cy.get('.bridgeup-carousel-item > :nth-child(2) > .text-14').should('have.text', 'Turn your recurring revenue streams into instant, upfront capital.No debt. No dilution. No strings.')

  }
  VerifyDefaultTextAccountyet() {
    cy.get('.btn-holders > .mt-5').should('include.text', 'Don’t have an account yet?')
  }
  VerifyDefaultTextForgetpassword() {
    cy.get('.mt-2 > .color-secondary').should('have.text', 'FORGOT PASSWORD')
  }
  VerifyDefaultTextLoginbutton() {
    cy.get('.MuiButton-root').should('include.text', 'LOGIN')
    cy.get('.MuiButton-root').should('not.be.disabled')
  }

  VerifyInvalidLoginMsg() {
    cy.get('.justify-between > .flex > div').should('have.text', 'Invalid user name or password')
  }

  VerifyValidLoginMsg() {
    cy.url('').should('include', 'pan-connect')
  }

}

export default LoginpageNew