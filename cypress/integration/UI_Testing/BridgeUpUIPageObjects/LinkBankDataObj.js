/// <reference types ="cypress"/>
class LinkBankData
{
  static EnterEmail(value) {
    const field = cy.get('.mt-8 > .MuiFormControl-root > .MuiFilledInput-root > .MuiFilledInput-input')
    field.clear()
    field.type(value)
    return this
  }
static  EnterPassword(value) {
  const field = cy.get('.mt-10 > .MuiFormControl-root > .MuiFilledInput-root > .MuiFilledInput-input')
  field.clear()
  field.type(value)
  return this
}

static ClickLogin() {
  const button = cy.get('.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-disableElevation.MuiButton-fullWidth.MuiButtonBase-root.button.primary-button.undefined.css-m2y76l')
  button.click()
  cy.wait(20000)
}
 static Panpage(value){
  cy.get('body').then((body) => {
    if (body.find('[focusable="false"]').is(":visible")) {
      cy.get('.MuiButton-root').click()
    } else {
      const field = cy.get('.MuiFilledInput-input.MuiInputBase-input.MuiInputBase-inputAdornedEnd.css-14jjnli')
      field.clear()
      field.type(value)
      cy.get('.MuiTypography-root.MuiTypography-button.css-1i2bach').click()
      cy.wait(25000)
      cy.get('.MuiButton-root').click()
    }
  })
}
 static paymentpartner(){
  cy.wait(5000)
  cy.get(':nth-child(2) > .MuiButton-root').click()
 }
  
 static SelectBankNameValue(value)
 {
     
   cy.get('.MuiDialogContent-root > :nth-child(2) > .css-16a96b4 > :nth-child(2) > .input-fields > .select-bank-dropdown > .MuiFormControl-root > .MuiFilledInput-root > .MuiAutocomplete-endAdornment > .MuiButtonBase-root > [data-testid=ArrowDropDownIcon]').click()
   cy.get('#auto-complete-option-'+ value).click()
   
 }
 static SelectBankAccountTypeValue(value)
 {
     
   cy.get('.MuiDialogContent-root > :nth-child(2) > .css-16a96b4 > .MuiGrid-container > .MuiGrid-root > .input-fields > .select-bank-dropdown > .MuiFormControl-root > .MuiFilledInput-root > .MuiAutocomplete-endAdornment > .MuiButtonBase-root > [data-testid=ArrowDropDownIcon]').click()
   cy.get('#auto-complete-option-' + value).click()
   cy.wait(10000)
 }
 static secondarySelectBankNameAndTypeValue(value1,value2)
 {
     cy.get(':nth-child(1) > .mt-4 > .css-16a96b4 > :nth-child(2) > .input-fields > .select-bank-dropdown > .MuiFormControl-root > .MuiFilledInput-root > .MuiAutocomplete-endAdornment > .MuiButtonBase-root > [data-testid="ArrowDropDownIcon"]').click();
     cy.get('#auto-complete-option-'+value1).click();
     cy.get(':nth-child(1) > .mt-4 > .css-16a96b4 > .MuiGrid-container > .MuiGrid-root > .input-fields > .select-bank-dropdown > .MuiFormControl-root > .MuiFilledInput-root > .MuiAutocomplete-endAdornment > .MuiButtonBase-root > [data-testid="ArrowDropDownIcon"]').click();
     cy.get('#auto-complete-option-' +value2).click();
 }

    static ClickConfirm()
    {
      const button = cy.get('.btn-holders > .MuiButton-contained') 
      button.click()

    }

    static ClickCancel()
    {
      const button = cy.get('.btn-holders > .MuiButton-outlined')
      button.click()

    }

    static ClickLogout() 
    {
      const button = cy.get('.stepper-logout')
      button.click()
      cy.wait(5000)
    }

    static ClickNext()
    {
      cy.wait(6000)
      const button = cy.get('.MuiGrid-container > :nth-child(2) > .MuiButton-root')
      button.click()
      cy.wait(5000)

    }
    static ClickAddBank()
    {
      const button = cy.get('.mt-14')
      button.click()

    }
    static ClickBack()
    {
      const button = cy.get(':nth-child(1) > .MuiButton-root') 
      button.click()
    }
  
    static ClickAddBankStatement()
    {
      const button = cy.get('.uppercase') 
      button.click()
    }

    static ClickVerifyBankData()
    {
      cy.wait(5000);
      cy.xpath('(//button[contains(@class,"MuiButton-root MuiButton-outlined")])[1]').click();
      cy.wait(15000);
    }
    static ClickVerifySecondaryBankData()
    {
      cy.wait(5000);
      cy.xpath('(//button[contains(@class,"MuiButton-root MuiButton-outlined")])[2]').click();
      cy.wait(15000);
    }
    
    static clickUploadfilebutton()
    {
        
        const button = cy.get('.btn-holders > .MuiButton-root',{timeout : 20000})
         button.click({ force: true })

    }
    static clickAddbankpageClosebutton()
    {
        
        const button = cy.get('[data-testid=CloseOutlinedIcon]')
         button.click({ force: true })

    }

    static UploadBankDataPdfFile(filepath)
    {
        cy.wait(5000);
        const filepath1 = filepath
        cy.get("Input[type=file]", {force: true})
       cy.get("Input[type=file]")
             .invoke('removeAttr', 'style')
             .attachFile(filepath1)
    }
    static UploadSecondaryBankDataPdfFile(filepathtwo)
    {
        const filepath2 = filepathtwo
        cy.get(':nth-child(4) > .accounts > #upload-button-file', {force: true})
        cy.get(':nth-child(4) > .accounts > #upload-button-file')
             .invoke('removeAttr', 'style')
             .attachFile(filepath2)
    }

    static VerifyAddBankDataPage()
    {
      cy.get('.MuiGrid-grid-sm-8 > .text-24').should('have.text','Select your Bank Account')
    }
    static VerifyDefaultTextinAddBankDataPage()
    {
      cy.get('.MuiGrid-grid-sm-5 > .text-18').should('have.text','Primary Account')
      cy.get(':nth-child(1) > .mt-4 > .css-16a96b4 > .MuiGrid-grid-sm-5 > p').should('have.text','Secondary Account ')
      cy.get('.mt-6').should('have.text','Do you want to integrate a secondary account?')
      cy.get('.MuiDialogContent-root > .text-regular').should('have.text','This helps us understand your company\'s cash flow and transaction history.')
    }
    static VerifyDefaultTexLinkBankData()
    {
      cy.get('.mt-4').should('have.text','Link your Banking Data')
    }
    static verifysecondary()
    {
      cy.get(':nth-child(4) > .MuiGrid-grid-sm-12 > .text-18 > :nth-child(1)').should('have.text','Secondary Bank Account')
    }
   
    static VerifyDefaultTextBankDescribtion()
    {
      cy.get(':nth-child(1) > .ml-6').should('have.text','Select your Primary bank account.')
      cy.get(':nth-child(2) > .ml-6').should('have.text','Add statements for last 12 months.')
      cy.get(':nth-child(3) > .ml-6').should('have.text','Verify them with us and you’re set for trading.')
    }
    
    static VerifyDefaultMenuList()
    {
      cy.get('.current > .step-name').should('have.text','Bank Data')
      cy.get(':nth-child(1) > .step-name').should('have.text','PAN');
      cy.get(':nth-child(2) > .step-name').should('have.text','Payment Partner');
      cy.get(':nth-child(4) > .step-name').should('have.text','Accounting Data');
    }
    static VerifyDefaultNextbuttonDisabled()
    {
      cy.get(':nth-child(2) > .MuiButton-root').should('include.text','NEXT')
      cy.get(':nth-child(2) > .MuiButton-root').should('not.be.enabled')

    }

    static VerifyDefaultLogoutbuttonEnabled()
    {
      cy.get('.stepper-logout').should('include.text','LOGOUT')
      cy.get('.stepper-logout').should('not.be.disabled')
    }
    static VerifyDefaultBackbuttonEnabled()
    {
        cy.get(':nth-child(1) > .MuiButton-root').should('include.text','BACK')
        cy.get(':nth-child(1) > .MuiButton-root').should('not.be.disabled')
    }
    static verifybankname()
    {
      cy.get('.ml-0').should('be.visible')
    } 
    static verifyinvalidsecondary()
    {
      cy.get(':nth-child(5) > .accounts > .py-2 > .justify-end > .verify-text').should('include.text','VERIFYING')
    }
    static verifystatementuploaded()
    {
      cy.wait(5000)
      cy.get('.verify-text').should('have.text','VERIFYING')
    } 
    static verifyvalidpassed()
    {
      cy.wait(5000)
      cy.get('.verify-text').should('have.text','VERIFIED')
    } 
    static verifyfailed()
    {
      cy.wait(5000)
      cy.get('.verify-text').should('have.text','FAILED')
    }
    //updated codes
    static clickEditBank() {
      cy.wait(5000);
      cy.get('.text-right > .text-14').click();
      cy.wait(3000);
    }
    static SelectEstimatedARRValue(Value)
    {
        cy.wait(5000)
        cy.get('body').tab().click({force : true});
        switch (Value) {
          case '0':
            cy.get('.MuiList-root > [tabindex="0"]').click();
            break;
            case '1':
              cy.get('[data-value="10"]').click();
            break;
            case '2':
              cy.get('[data-value="100"]').click();
            break;
            case '3':
              cy.get('[data-value="500"]').click();
            break;
            case '4':
              cy.get('[data-value="501"]').click();
            break;
                      
          default:
            break;
        }
    }
    static ClickNextInPayment()
    {   
      const button = cy.get(':nth-child(2) > .MuiButton-root') 
      button.click()
      cy.wait(10000);
    }
    
}

export default LinkBankData