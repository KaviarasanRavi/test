/// <reference types ="cypress"/>
 class Loginpage
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
    static VerifyDefaultTextLogin()
    {
      cy.get('.text-24').should('have.text','Login')
    }
    static VerifyDefaultTextWelcomeBack()
    {
      cy.get('.bridgeup-carousel-item > :nth-child(2) > .text-bold').should('have.text','Welcome back to BridgeUp')
    }
    static VerifyDefaultTextSlogan()
    {
      cy.get('.bridgeup-carousel-item > :nth-child(2) > .text-14').should('have.text','Turn your recurring revenue streams into instant, upfront capital.No debt. No dilution. No strings.')

    }
    static VerifyDefaultTextAccountyet()
    {
      cy.get('.btn-holders > .mt-5').should('include.text','Don’t have an account yet?')
    }
    static VerifyDefaultTextForgetpassword()
    {
      cy.get('.mt-2 > .color-secondary').should('have.text','FORGOT PASSWORD')
    }
    static VerifyDefaultTextLoginbutton()
    {
      cy.get('.MuiButton-root').should('include.text','LOGIN')
      cy.get('.MuiButton-root').should('not.be.disabled')
    }

    static VerifyInvalidLoginMsg()
    {
      cy.get('.justify-between > .flex > div').should('have.text','Invalid user name or password')
    }

    static VerifyValidLoginMsg()
    {
      cy.url('').should('include','pan-connect')
    }

}

export default Loginpage