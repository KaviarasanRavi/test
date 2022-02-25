/// <reference types ="cypress"/>
/*
AUTHOR: TrackDfect

steps to run the code 
1.In package.json you have to change the path of the Script according to the script you are running
  for example :  "cypress run --spec 'cypress/integration/BridgeUpAPIDemo/ForgotPasswordAPI.spec.js' --headed"
2.for getting html report you have to use "npm run test" command
3.input data should be available in forgotPassword.json file under fixtures/API Folder
*/

const SignUpUsers = require('../../fixtures/forgotPassword.json');

describe('Company - forgotPassword - API - Test Suit', () => {
    
    
    SignUpUsers.forEach((user) => {
    
    
        it(`Test:${user.TestId} - ${user.Tenant_Type} - ${user.TestAPIName} API - ${user.TestName} - ${user.TestType}`, () => {
           
            const testid = user.TestId
            if(testid == "TC001"){
                cy.writeFile('cypress/responses/forgotPasswordApiResponse.json', "")
            }

            const  request = cy.request(
                {
                    method: 'POST',
                    url: 'https://auth.devbridgeup.com/forgotPassword',
                    failOnStatusCode: false, 
                    form:true,
                   /* auth: {
                        username: Cypress.env('username'),
                        password: Cypress.env('password')
                    },*/
                    headers: {
                        'Content-Type': 'application/json',
                        'X-Hasura-Tenant-Type' : user.Tenant_Type
                    },
                    body: {
                        
                            "email": user.forgotPasswordemail,  
                        
                    },
                    log: true
                })
                .then((response) => {
            
                  
                   const resSC = response.status
                    cy.log(resSC)
                    if(resSC.toString() == "200"){
                    cy.writeFile('cypress/responses/forgotPasswordApiResponse.json', user.TestId,{ flag: 'a+' })   
                    cy.writeFile('cypress/responses/forgotPasswordApiResponse.json', response.body,{ flag: 'a+' })
                    
                    cy.log(response.body.success)
                    cy.log(response.body.message)
                    expect(response.body.success).to.be.true

                      // expect(response.body.success).contains(user.Expected_success)
                       expect(response.body.message).contains(user.Expected_message)

                   }else{
                    cy.writeFile('cypress/responses/forgotPasswordApiResponse.json', user.TestId,{ flag: 'a+' })
                    cy.writeFile('cypress/responses/forgotPasswordApiResponse.json', response.body,{ flag: 'a+' })
                    cy.log(response.body.statusCode)
                    cy.log(response.body.message)
                    cy.log(response.body.errorCode)
                       expect(response.body.statusCode).to.eq(user.Expected_statusCode)
                       expect(response.body.message).contains(user.Expected_message)
                       expect(response.body.errorCode).contains(user.Expected_errorCode)

    
                   }
                   
                    
                })
              
           
        })    
    
     //})
    
    })
})