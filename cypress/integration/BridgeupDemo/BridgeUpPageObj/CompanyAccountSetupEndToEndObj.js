/// <reference types ="cypress"/>
class EndtoendSetup
{
   static EnterEmail(value)
    {
        const field = cy.get('.mt-8 > .MuiFormControl-root > .MuiFilledInput-root > .MuiFilledInput-input')
        field.clear()
        field.type(value)
        return this 
    }

    static EnterPassword(value)
    {
        const field = cy.get('.mt-10 > .MuiFormControl-root > .MuiFilledInput-root > .MuiFilledInput-input')
        field.clear()
        field.type(value)
        return this
    }
    static ClickLogin()
    {
        const button = cy.get('.MuiButton-contained') 
        button.click({ timeout: 40000 })
        cy.wait(15000)

    }
    static ClickLogout()
    {
      cy.wait(5000)
      const button = cy.get('.stepper-logout')
      button.click()
      cy.wait(5000)

    }
    static ClickForgetpassword()
    {
      const button = cy.get('.mt-2 > .color-secondary')
      button.click()

    }

    static ClickSignUp()
    {
      const button = cy.get('.mt-5 > .color-secondary')
      button.click()

    }
    static CheckAndAddPAN(value){
        cy.get('body').then((body) => {
          if (body.find('[focusable="false"]').is(":visible")) {
            cy.get('.MuiButton-root').click({ timeout: 10000})
          } else {
            const field = cy.get('.MuiFilledInput-input.MuiInputBase-input.MuiInputBase-inputAdornedEnd.css-14jjnli')
            field.clear()
            field.type(value)
            cy.get('.MuiTypography-root.MuiTypography-button.css-1i2bach').click()
            cy.wait(5000)
            cy.get('.MuiButton-root').click({ timeout: 10000})
          }
        })
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
      static clickUploadAccountingData()
    {   
        cy.wait(5000)       
        const button = cy.get(':nth-child(6) > .each-box')    
        button.click()
        cy.wait(5000)       
    }
    static UploadPaymentPartnerFile(filepath)
    {
        const filepath1 = filepath
       cy.get("Input[type=file]", {force: true})
           .attachFile(filepath1)
           cy.wait(5000)
    }
    static clickUploadfilebutton()
    {
      cy.wait(7000);
       const button = cy.get('.btn-holders > .MuiButton-root')
        button.click({ force: true})
        cy.wait(7000);
    }
    static ClickAddBank()
    {
      const button = cy.get('.mt-14')
      button.click()
    }
    static ClickVerifyBankData()
    {
      cy.wait(5000);
      cy.xpath('(//button[contains(@class,"MuiButton-root MuiButton-outlined")])[1]').click();
      cy.wait(15000);
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
      static ClickConfirm()
      {
        const button = cy.get('.btn-holders > .MuiButton-contained') 
        button.click()
  
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
        cy.get(':nth-child(5) > .accounts > .lowerG > .MuiGrid-container > .MuiGrid-grid-sm-9 > #upload-button-file')
             .invoke('removeAttr', 'style')
             .attachFile(filepath2)
    }
    static ClickVerifySecondaryBankData()
    {
      cy.wait(5000);
      cy.get('(//button[contains(@class,"MuiButton-root MuiButton-outlined")])[2]').click();
      cy.wait(15000);
    }


    static ClickNext()
    {
       cy.wait(5000)
      const button = cy.get('.MuiGrid-container > :nth-child(2) > .MuiButton-root') 
      button.click()
    }
    static clickUpload()
    {
        const button = cy.get(':nth-child(8) > .each-box')
        button.click({ multiple: true, force: true })
     cy.wait(4000)
    }
    static UploadAccountingDataFile(filepath)
    {
        const filepath1 = filepath
       cy.get("Input[type=file]")
             .invoke('removeAttr', 'style')
             .attachFile({ filePath: filepath1, encoding: 'utf-8' })
        cy.wait(10000)
    }
    static ClickSubmitforReview()
    {
      const button = cy.get(':nth-child(2) > .MuiButton-root') 
      button.click()

    }
    static verifyAccountSetup ()
    {       
    cy.get('.text-bold').should('be.visible')
     
    }
    static secondarySelectBankNameAndTypeValue(value1,value2)
    {
        cy.get(':nth-child(1) > .mt-4 > .css-16a96b4 > :nth-child(2) > .input-fields > .select-bank-dropdown > .MuiFormControl-root > .MuiFilledInput-root > .MuiAutocomplete-endAdornment > .MuiButtonBase-root > [data-testid="ArrowDropDownIcon"]').click();
        cy.get('#auto-complete-option-'+value1).click();
        cy.get(':nth-child(1) > .mt-4 > .css-16a96b4 > .MuiGrid-container > .MuiGrid-root > .input-fields > .select-bank-dropdown > .MuiFormControl-root > .MuiFilledInput-root > .MuiAutocomplete-endAdornment > .MuiButtonBase-root > [data-testid="ArrowDropDownIcon"]').click();
        cy.get('#auto-complete-option-' +value2).click();
    }

}

export default EndtoendSetup