describe('working with inputs',()=>{
it('should load the site',()=>{
        cy.visit('http://zero.webappsecurity.com/login.html').click()
})
it('should fill username',()=>{
    cy.get('#user_login').clear()
    cy.get('#user_login').type('kavi')
})
    it('should fill the password',()=>{
    cy.get('#user_password').clear()
    cy.get('#user_password').type('12345')
})
it('should submit the loginform',()=>{
    cy.contains('#btn btn-primary').click()
})
it('should display error message', () => {
    cy.get('.alert-error').should('be.visible')
  })
})