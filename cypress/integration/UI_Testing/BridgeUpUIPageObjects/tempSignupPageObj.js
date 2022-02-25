/// <reference types ="cypress"/>
class SignupPage
{
    VerifyDefaultTextGetStartedWithBridgeUp()
    {
     cy.get('div.text-24.text-bold').should('be.visible').contains('Get Started With BridgeUp')
    }
    VerifyDefaultTextmandatoryfields()
    {
     cy.get('div.text-12.text-regular.text-color-3').should('be.visible').contains('mandatory fields')
    }
    VerifyDefaultTextcompanyname()
    {
     cy.get('#mui-1-label').should('be.visible').contains('Company Name')
    }
    VerifyDefaultTextInvalidCompanyNameErrorNotification()
    {
     cy.get('p#mui-1-helper-text').should('be.visible').contains('Please enter the full legal name of your company as mentioned in the company PAN card')
    }
    VerifyDefaultTextWorkEmailAddress() 
    {
     cy.get('#mui-2-label').should('be.visible').contains('Work Email Address').should('be.visible')
    }
    VerifyInvalidEmailAddressErrorNotification() 
    {
      cy.get('.MuiButton-contained').should('be.visible')
    }
    VerifyDefaultTextSetPassword()
    {
      cy.get('#mui-3-label').should('be.visible').contains('Set a Password').should('be.visible')
    }
    VerifyDefaultTextMinimum8Characters()
    {
      cy.get('span').should('be.visible').contains('Minimum 8 characters').should('be.visible')
    }
    VerifyDefaultTextContainsaSpecialCharacter()
    {
      cy.get('span').should('be.visible').contains('Contains a special character').should('be.visible')
    }  
    VerifyDefaultTextContainsANumber()
    {
      cy.get('span').should('be.visible').contains('Contains a number').should('be.visible')
    }
    VerifyDefaultTextContainsALowercaseLetter()
    {
      cy.get('span').should('be.visible').contains('Contains a lowercase letter').should('be.visible')
    }
    VerifyDefaultTextContainsAUppercaseLetter()
    {
      cy.get('span').should('be.visible').contains('Contains an uppercase letter').should('be.visible')
    }
    VerifyDefaultTextContainsContinue()
    {
      cy.get('.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-disableElevation.MuiButton-fullWidth.MuiButtonBase-root.button.primary-button.undefined.css-m2y76l').should('be.visible').contains('CONTINUE').should('be.visible')
    }
    VerifyDefaultTextContainsABackToLogin()
    {
      cy.get('.MuiTypography-root.MuiTypography-inherit.MuiLink-root.MuiLink-underlineAlways.MuiButton-root.MuiButton-text.MuiButton-textPrimary.MuiButton-sizeMedium.MuiButton-textSizeMedium.MuiButtonBase-root.mt-6.color-secondary.text-14.text-bold.css-1lcn8b0').should('be.visible').contains('BACK TO LOGIN').should('be.visible')
    }  
    VerifyDefaultTextInvalidCompanyNameErrorNotification()
    {
    cy.get('p#mui-1-helper-text').should('be.visible').contains('Please enter the full legal name of your company as mentioned in the company PAN card').should('be.visible')
    }
    VerifyDefaultTextInvalidEmailAddressErrorNotification() 
    {
     cy.get('p#mui-2-helper-text').should('be.visible').contains('Enter a valid work email').should('be.visible')

    }
    VerifyDefaultTextInvalidPasswordErrorNotification()
    {
      cy.get('#mui-3-label').contains('Set a Password').should('be.visible')

    }
    VerifyInvalidEmailLengthErrorNotification(){
     cy.get('.justify-between > div:nth-child(1) > div:nth-child(2)').should('be.visible').contains('length must be at least 8 characters long').should('be.visible')
    }
    VerifyGetToKnowYou()
    {
    cy.get('span.text-24.text-bold').should('be.visible').contains('We’d Love To Get To Know You').should('be.visible')
    }
    EnterCompanyName(value)
    {
        const field = cy.get(':nth-child(3) > .MuiFormControl-root > .MuiFilledInput-root > .MuiFilledInput-input')
        field.clear()
        field.type(value)
        return this 
    }
    EnterEmail(value)
    {
        const field = cy.get(':nth-child(4) > .MuiFormControl-root > .MuiFilledInput-root > .MuiFilledInput-input')
        field.clear()
        field.type(value)
        return this 
    }
    EnterPassword(value)
    {
        const field = cy.get(':nth-child(5) > .MuiFormControl-root > .MuiFilledInput-root > .MuiFilledInput-input')
        field.clear()
        field.type(value)
        return this
    }
    ClearPassword()
    {
      const field = cy.get(':nth-child(5) > .MuiFormControl-root > .MuiFilledInput-root > .MuiFilledInput-input')
        field.clear()
        return this
    }
    EnterFirstName(value)
    {
         cy.get('input#mui-4').clear().type(value)
        return this 
    }
    ClearFirstName()
    {
        const field = cy.get('.MuiFilledInput-root.MuiFilledInput-underline.MuiInputBase-root.MuiInputBase-colorPrimary.Mui-error.MuiInputBase-fullWidth.MuiInputBase-formControl.css-ntvj14>#mui-4')
        field.clear()
        return this 
    }
    EnterLastName(value)
    {
        const field = cy.get('.MuiGrid-grid-xs-5 > .mt-8 > .MuiFormControl-root > .MuiFilledInput-root > .MuiFilledInput-input')
        field.clear()
        field.type(value)
        return this 
    }
    ClearLastName()
    {
        const field = cy.get('.MuiGrid-grid-xs-5 > .mt-8 > .MuiFormControl-root > .MuiFilledInput-root > .MuiFilledInput-input')
        field.clear()
        return this 
    }
    EnterDesignation(value)
    {
        const field = cy.get(':nth-child(4) > .MuiFormControl-root > .MuiFilledInput-root > .MuiFilledInput-input')
        field.clear()
        field.type(value)
        return this
    }
    EnterPhonenumber(value)
    {
      const field = cy.get('.form-control')
        field.clear()
        field.type(value)
        return this
    }
    ClearPhonenumber()
    {
      const field = cy.get('.form-control')
        field.clear()
        return this
    }
    ClickContinue()
    {
      const button = cy.get('.MuiLoadingButton-root') 
      button.click()
      cy.wait(3000)
    }
    ClickBacktoLogin()
    {
      const button = cy.get('.mt-6')
      button.click()
    }
    CheckIAccept()
    {
      const button = cy.get('.PrivateSwitchBase-input')
      button.click()
    }
    ClickSignUp()
    {
      const button = cy.get('.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-disableElevation.MuiButton-fullWidth.MuiButtonBase-root.button.primary-button.undefined.css-m2y76l').click()
      cy.wait(5000)
    }
    VerifyNegativeEmailSignUp(value)
    {
      cy.url('').should('include','signup')
      cy.get('div').should('be.visible').contains('An account with this email address already exists')
    }
    VerifySignup()
    {
      const button = cy.url('').should('include','resend-email')
      cy.get('h4').should('be.visible').contains('Woohoo! You’re All Set!')
    }
    VerifyUseralreadyexists()
    {
      cy.get('div').should('be.visible').contains('An account with this email address already exists')
    }
    VerifyInvalidFirstName()
    {
      cy.get('p#mui-4-helper-text').should('be.visible').contains('Enter a valid first name')
    }
    VerifyInvalidLastName()
    {
      cy.get('p#mui-5-helper-text').should('be.visible').contains('Enter a valid last name')
    } 
    VerifyInvalidPhonenumber()
    {
      cy.get('.MuiFormHelperText-root').should('be.visible').contains('Enter a valid Phone Number')
    }
}
export default SignupPage 

