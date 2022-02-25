/// <reference types ="cypress"/>
class LinkPaymentPartner
{
    
    
    static SelectEstimatedARR()
    {
        cy.wait(5000);
      
        cy.get('body').tab().click({force : true});
        cy.wait(5000);
        cy.get('.MuiList-root > [tabindex="0"]').click();
     
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

    static EnterPanNumber(value)
    {
        const field = cy.get('.MuiFilledInput-input')
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
    static ClickNext()
    {
      const button = cy.get(':nth-child(2) > .MuiButton-root') 
      button.click()

    }
    static ClickBack()
    {
      const button = cy.get(':nth-child(1) > .MuiButton-root') 
      button.click()

    }
    static ClickVerify()
    {
      const button = cy.get('.MuiTypography-root')
      button.click()

    }

    static ClickLogout()
    {
      const button = cy.get('.stepper-logout')
      button.click()

    }
    static clickStripe()
    {
        const button = cy.get(':nth-child(1) > .each-box')
        button.click()

    }
    static VerifyStripeWelcomePage()
    {
      cy.get('.db-ConsumerUIWrapper-left--sidebarCopy > :nth-child(1)').should('have.text','BridgeUp partners with Stripe for secure payments.')
     
    }
    static clickStripeSkipthisForm()
    {
      cy.get('#skip-account-app > .Button-align > .Flex-flex > .Button-label > span').click()
     
    }
    static clickReturnToBridgeUp()
    {
      cy.get('.Margin-top--32 > .UnstyledLink > [style="position: relative;"] > .Flex-alignItems--baseline > .ButtonLink-label > span').click()
     
    }

    static clickChargeBee()
    {
        const button = cy.get(':nth-child(2) > .each-box')
        button.click()

    }

    static AddChargebeeAsPaymentpartner(value1,value2) {
      cy.get(':nth-child(2) > .each-box > .brand-logo').click();
      cy.get('#mui-5').clear();
      cy.get('#mui-5').type(value1);
      cy.get('#mui-6').clear();
      cy.get('#mui-6').type(value2);
      cy.get('.btn-holders > .MuiButton-root').click();
      }

      static AddStripeAsPaymentpartner() {
        cy.get(':nth-child(1) > .each-box > .brand-logo').click();
        cy.wait(10000);
        cy.get('.db-ConsumerUITitle > span').should('be.visible');
        cy.go('back')
        cy.wait(20000);
      }

    static clickRazorPay()
    {
        const button = cy.get(':nth-child(3) > .each-box')
        button.click()

    }

    static VerifyDefaultTestAlertMsg()
    {
      cy.get('.MuiDialogContent-root > .text-24').should('have.text','Coming Soon!')
      cy.get('.mt-4').should('have.text','Currently, we do not support this payment partner. Sorry about that! You can add your payment data manually using a CSV file.')

    }

    static clickAlertMsgClose()
    {
        const button = cy.get('[data-testid=CloseOutlinedIcon]')
        button.click()

    }


    static clickAppStore()
    {
        const button = cy.get(':nth-child(4) > .each-box')
        button.click()

    }

    static clickCashFree()
    {
        const button = cy.get(':nth-child(5) > .each-box')
        button.click()

    }

    static clickGooglePlay()
    {
        const button = cy.get(':nth-child(6) > .each-box')
        button.click()

    }

    static clickPayU()
    {
        const button = cy.get(':nth-child(7) > .each-box')
        button.click()

    }

    static clickUpload()
    {
        const button = cy.get(':nth-child(8) > .each-box')
        
        button.click()
        cy.wait(5000)

    }

    static clickAlertMsgUpload()
    {
        const button = cy.get('.btn-holders > .MuiButton-root')
        button.click()

    }

    static clickUploadfileClose()
    {
        if (cy.get('[data-testid=CloseOutlinedIcon] > path').length > 0) {
            cy.get('[data-testid=CloseOutlinedIcon] > path').click();
          }
    }

    static clickUploadfilebutton()
    {
      cy.wait(7000);
       const button = cy.get('.btn-holders > .MuiButton-root')
        button.click({ force: true})
        cy.wait(7000);
    }

    static UploadPaymentPartnerFile(filepath)
    {
        const filepath1 = filepath
       cy.get("Input[type=file]", {force: true})
           .attachFile(filepath1)
           cy.wait(5000)
    }

    static ReplacePaymentPartnerCSVFile(filepath)
    {
        const filepath1 = filepath
       
       cy.get('.upload-file input[type="file"]', {force: true})
           .attachFile(filepath1)
    }
    static VerifyDefaultTexLinkPayementPartner()
    {
        cy.get('.text-24').should('have.text','Link your Payment Partner')
    }
    static VerifyDefaultTextDescribtion()
    {
      cy.get('.text-14').should('have.text','This helps us automatically identify your recurring revenue and sync it with your BridgeUp account.')
    }
    static VerifyDefaultMenuList()
    {
      cy.get('.current > .step-name').should('have.text','Payment Partner')
      cy.get(':nth-child(1) > .step-name').should('have.text','PAN')
      cy.get(':nth-child(3) > .step-name').should('have.text','Bank Data')
      cy.get(':nth-child(4) > .step-name').should('have.text','Accounting Data')
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
    static VerifyEstimatedArrValue(Myvalue)
    {  cy.wait(4000)
        cy.get('#estimated-arr').should('contain.text',Myvalue)              
    }
        
    static VerifyDefaultNextbuttonEnabled()
    {
     cy.get(':nth-child(2) > .MuiButton-root').should('include.text','NEXT')
     cy.get(':nth-child(2) > .MuiButton-root').should('be.enabled')
    }
    static VerifyFileUploadSuccesfully()
    {
      cy.get('.success-hold > p > span').should('include.text','Successfully uploaded'); 
    }
    static VerifyFileUploadNotSuccessfully()
    {
      cy.get('.error-link > p > span', {timeout : 60000}).should('include.text','Retry uploading.'); 
    }
}


export default LinkPaymentPartner


