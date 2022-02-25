/// <reference types ="cypress"/>
import BridgeUpcareerpage from'../BridgeupHomeUIpageObjects/BridgeupCareerObj'
describe('BridgeUp- UI- CareerPage- Test Suite', () => {
    beforeEach(function  (){
        // cy.visit('https://bridgeup.com/');
    })
    it(`Test 001: Bridgeup-UI-BlogPage-positive`, () => {
        cy.clearCookies()
        cy.visit('https://bridgeup.com/');
        cy.wait(5000);
        cy.get(':nth-child(2) > .container > .collapse > #menu-main > .menu-item-794 > .dropdown-toggle').click();
        cy.wait(5000);
        cy.get(':nth-child(2) > .container > .collapse > #menu-main > .menu-item-794 > .dropdown-menu > .menu-item-501 > a').click({force: true});
        cy.wait(10000);  
        cy.get('.styles_component__UCLp3.styles_defaultLink__eZMqw.styles_anchor__Zq69Z').click();
    })

})