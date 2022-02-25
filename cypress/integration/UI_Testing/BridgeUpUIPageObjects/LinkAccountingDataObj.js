/// <reference types ="cypress"/>
class LinkAccountingData   
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
            cy.wait(15000)
            cy.get('.MuiButton-root').click()
          }
        })
      }
      static paymentpartner(){
        cy.wait(5000)
        cy.get(':nth-child(2) > .MuiButton-root').click()
       }
       static ClickNext()
    {
      cy.wait(6000)
      const button = cy.get('.MuiGrid-container > :nth-child(2) > .MuiButton-root')
      button.click()
      cy.wait(5000)

    }
    static VerifyDefaultImageBridgeup()
    {
       cy.get('.logo > img').should('be.visible')
    }

    static VerifyDefaultTexLinkAccountData()
    {
    cy.get(':nth-child(2) > .mt-5').should('include.text','Link your Accounting Data')
    }

    static VerifyDefaultTextDescribtion()
    {
    cy.get(':nth-child(2) > .mt-5').should('include.text','This helps us understand your company')
    }

    static VerifyDefaultTextDescription()
    {
        cy.get('.text-14').should('include.text','This helps us understand your company')
    }  

    static VerifyDefaultAccountingData()
    {
        cy.get('.current > .step-name').should('include.text','Accounting Data')
    }
    static VerifyDefaultBankData()
    {
        cy.get(':nth-child(3) > .step-name').should('include.text','Bank Data')
    }
    static VerifyDefaultPaymentPartner()
    {
        cy.get(':nth-child(2) > .step-name').should('include.text','Payment Partner')
    }  
    
    static VerifyDefaultLogout()
    {
        cy.get('.stepper-logout').should('be.visible')
    }         

    static VerifyDefaultBack()
    {
        cy.get(':nth-child(1) > .MuiButton-root').should('be.visible')
    }                 

    static VerifyDefaultSubmitForReview()
    {
        cy.get(':nth-child(2) > .MuiButton-root').should('be.visible')
    }    

    static VerifyDefaultErrorForInvalidSubmit()
    {
        cy.get('.justify-between > .flex > div').should('include.text','Accounting partner linking could not be completed. Please try again.')
    }
    static ClickSubmitforReview()
    {
      const button = cy.get(':nth-child(2) > .MuiButton-root') 
      button.click()

    }
    ClickBack()
    {
      const button = cy.get(':nth-child(1) > .MuiButton-root') 
      button.click()

    }
    ClickVerify()
    {
      const button = cy.get('.MuiTypography-root')
      button.click()

    }
    static verifyQuickBooksPage()
    {
    cy.get(':nth-child(1) > .each-box').click()
    cy.get('#ius-hosted-ui-main-header > #ius-hosted-ui-logo-container > #ius-hosted-ui-header-brand').should('be.visible');
    cy.go('back')
    }
    static verifyZohoPage()
        {
            cy.get(':nth-child(2) > .each-box').should('be.visible');
        }

    static ClickLogout()
    {
      const button = cy.get('.stepper-logout')
      button.click()

    }
  

    clickQuickBooks()
    {
        const button = cy.get(':nth-child(1) > .each-box')
        button.click()

    }

    clickZohoe()
    {
        const button = cy.get(':nth-child(2) > .each-box')
        button.click()

    }

    static clickTally()
    {
        const button = cy.get(':nth-child(3) > .each-box')
        button.click()

    }

    static clickFreshBook()
    {
        const button = cy.get(':nth-child(4) > .each-box')
        button.click()

    }

    static clickXero()
    {
        const button = cy.get(':nth-child(5) > .each-box')
        button.click()

    }

    static clickUpload()
    {
        const button = cy.get(':nth-child(6) > .each-box')
        button.click()
     cy.wait(4000)
    }
    static clickPopUpUploadFile()
    {
        const button =cy.get('.btn-holders > .MuiButton-root')
        button.click({ multiple: true, force: true })
        cy.wait(4000)
    }

    clickUploadfileClose()
    {
        const button = cy.get('[data-testid=CloseOutlinedIcon] > path')
        button.click()

    }

    static clickUploadfilebutton()
    {
        
        const button = cy.get('.btn-holders > .MuiButton-root')
        button.click({ force: true })

    }
  
    static UploadAccountingDataFile(filepath)
    {
        const filepath1 = filepath
       cy.get("Input[type=file]")
             .invoke('removeAttr', 'style')
             .attachFile({ filePath: filepath1, encoding: 'utf-8' })
        cy.wait(10000)
    }
    static VerifySubmit()
    {
        cy.wait(5000)
        cy.get('.error-link > p > span').should('include.text','Retry uploading.')
        cy.wait(5000)
    }    
    
    static VerifyvalidSubmit()
    {
        cy.wait(5000)
        cy.get('.error-link > p > span').should('include.text','Successfully uploaded')
        
    }   
    static verifyDefaultTextInUploadFilePopUp()
    {
        cy.get('.flex > .text-24').should('include.text','Upload File')
        cy.get('.MuiDialogContent-root > .text-regular').should('include.text','Download Accounting Data XLS template to ensure your file is accurately formatted.')
        cy.get('.MuiDialogContent-root > :nth-child(2) > .text-14').should('be.visible')
        cy.get('.mt-2 > .text-bold').should('be.visible')
        cy.get('.btn-holders > .MuiButton-root').should('be.visible')   
    }
    
}

export default LinkAccountingData