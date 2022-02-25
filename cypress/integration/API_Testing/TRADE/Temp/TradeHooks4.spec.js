/// <reference types ="cypress"/>

import { Context } from "mocha"


//const testData = require("../fixtures/ctenant.json")
//var SignUpUsers = require('../../fixtures/signUp.json');
//const SignUpUsers = require('../../fixtures/SignIn.json');

describe('Staff - Trade - API - Test Suit -1', () => {
    before(function(){
         cy.log("Describe Before Function")
    })
    beforeEach(function(){
        cy.log("Describe BeforeEach Function")
   })
             it(`Test:Case -1`, () => {
          
              cy.log("Test Suit 1 - Test case -1") 
            
             })    
             it(`Test:Case -2`, () => {
          
                cy.log("Test Suit 1 - Test case -2") 
              
               })    
     

 })
 context('company - Trade - API - Test Suit -2', () => {
    
    before(function(){
        cy.log("Describe Before Function in context")
   })
    specify(`Test:Case -1`, () => {
 
     cy.log("Test Suit 2 - Test case -1") 
   
    })    
    specify(`Test:Case -2`, () => {
 
       cy.log("Test Suit 2 - Test case -2") 
     
      })    


})