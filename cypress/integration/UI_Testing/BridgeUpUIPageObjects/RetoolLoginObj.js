/// <reference types ="cypress"/>
class RetoolLogin {
   EnterEmail(value) {
      const field = cy.get('#email')
      field.clear()
      field.type(value)
      return this
    }
  
     EnterPassword(value) {
      const field = cy.get('#password')    
      field.clear()
      field.type(value)
      return this
    }

    ClickLogin()
    {
        const button = cy.get('.ant-form > .auth-button-row > .ant-btn') 
        button.click({ timeout: 40000 })
        cy.wait(15000)
    }
}

export default RetoolLogin