describe('Browser Actions',()=>{
    it('should load correct url',()=>{
        cy.visit('https://example.com',{timeout:10000})
        cy.get('h1')
    })
})