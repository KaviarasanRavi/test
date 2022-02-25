/// <reference types ="cypress"/>
class Homepage
{
   static OpenURL(value)
    {
      cy.visit(value);

      cy.get('body').find('#cookie-law-info-bar').its('length').then(res=>{
        if(res > 0){
            //// do task that you want to perform
          //cy.log("I am inside res>0")
            //cy.get('#cookie-law-info-bar').select('100').wait(2000);
            cy.get('#wt-cli-accept-all-btn').click();
            //resolve();
        }else{
            //reject();
              //  cy.log("I am inside else part")
            }
        });

        return this 
    }

    

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
    static VerifyDefaultTextLogin()
    {
      cy.get('.text-24').should('have.text','Login')
    }
    static VerifyDefaultTextWelcomeBack()
    {
      cy.get('.elementor-element-2e64f02d > .elementor-widget-container > .elementor-heading-title').should('have.text','Revenue Is Your Best Asset')
    }
    static VerifyDefaultTextSlogan()
    {
      cy.get('.elementor-element-62507c9b > .elementor-widget-container > .elementor-heading-title').should('include.text','Access instant capital by encashing your recurring revenue')

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

export default Homepage