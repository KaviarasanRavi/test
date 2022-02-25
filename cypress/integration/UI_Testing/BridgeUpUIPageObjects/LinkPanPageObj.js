/// <reference types ="cypress"/>
class LinkPanPage
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

   static EnterPanNumber(value)
    {
        const field = cy.get('.MuiFilledInput-input')
        field.clear()
        field.type(value)
        return this 
    }

    static ClickNext()
    {
      const button = cy.get('.MuiButton-root') 
      button.click()
    }

    static ClickVerify()
    {
      const button = cy.get('.MuiTypography-root')
      button.click({ timeout: 50000 })

    }

    static ClickLogout()
    {
      const button = cy.get('.stepper-logout')
      button.click()

    }
    static VerifyDefaultTextAddyourPan()
    {
      cy.get('.text-24 > span').should('have.text','Add your PAN')
    }
    static VerifyDefaultTextPanInfo()
    {
      cy.get('.text-14').should('have.text','We’ll review your company’s financials with the information accessible through your PAN number')
    }
    static VerifyDefaultTextonverifyPan()
    {
      cy.get('.MuiTypography-root').should('have.text','VERIFY PAN')

    }
    static VerifyDefaultLabelPANNumber()
    {
      cy.get('#mui-4-label').should('include.text','PAN Number')
    }
    static VerifyDefaultMenuList()
    {
      cy.get('.current > .step-name').should('have.text','PAN')
      cy.get(':nth-child(2) > .step-name').should('have.text','Payment Partner')
      cy.get(':nth-child(3) > .step-name').should('have.text','Bank Data')
      cy.get(':nth-child(4) > .step-name').should('have.text','Accounting Data')
    }
    static VerifyDefaultNextbuttonDisabled()
    {
      cy.get('.btn-holders').should('include.text','NEXT')
    }

    static VerifyDefaultLogoutbuttonEnabled()
    {
      cy.get('.stepper-logout').should('include.text','LOGOUT')
      cy.get('.stepper-logout').should('not.be.disabled')
    }


    static VerifyInvalidPANMsg()
    {
      cy.get('#mui-4-helper-text').should('have.text','Please enter a valid company PAN number')
    }

    static VerifyInvalidCompanyNameMismatchMsg()
    {
      
      cy.get('.mt-2').should('include.text','Company Name does')

    }

    static ClickClose()
    {
      const button = cy.get('[data-testid=CloseOutlinedIcon]')
      button.click({ timeout: 15000 })

    }

    static ClickReenterPAN()
    {
      const button = cy.get('.MuiButton-outlined')
      button.click({ timeout: 15000 })

    }
    static ClickConfirmPAN()
    {
      const button = cy.get('.MuiDialogActions-root > .MuiLoadingButton-root')
      button.click({ timeout: 15000 })

    }
    static CheckAndAddPAN(value){
      cy.get('body').then((body) => {
        if (body.find('[focusable="false"]').is(":visible")) {
          cy.get('.MuiButton-root').click()
        } else {
          const field = cy.get('.MuiFilledInput-input.MuiInputBase-input.MuiInputBase-inputAdornedEnd.css-14jjnli')
          field.clear()
          field.type(value)
          cy.get('.MuiTypography-root.MuiTypography-button.css-1i2bach').click({ multiple: true, force: true })
          cy.wait(15000)
          cy.get('.MuiButton-root').click()
        }
      })
    }
    
    static VerifyvalidPANMsg()
    {
      cy.url('').should('include','pan-connect')
      cy.get('.MuiTypography-root > :nth-child(2)').should('include.text','VERIFIED')
    }

    static VerifyvalidCompanyName()
    {
     
      cy.get('.mt-10 > :nth-child(3) > :nth-child(2)').should('include.text','BRIDGEUP TECH PRIVATE LIMITED')
    }


}

export default LinkPanPage