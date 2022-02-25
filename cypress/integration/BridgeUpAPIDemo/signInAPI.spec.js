/// <reference types ="cypress"/>
/*
AUTHOR: TrackDfect

steps to run the code 
1.In package.json you have to change the path of the Script according to the script you are running
  for example :  "cypress run --spec 'cypress/integration/BridgeUpAPIDemo/signInAPI.spec.js' --headed"
2.for getting html report you have to use "npm run test" command
3.input data should be available in SignIn.json file under fixtures/API Folder
*/

const SignUpUsers = require('../../fixtures/SignIn.json');

describe('Company - SignInValidation - API - Test Suit', () => {
    
    
    SignUpUsers.forEach((user) => {
    
    
        it(`Test:${user.TestId} - ${user.Tenant_Type} - ${user.TestAPIName} API - ${user.TestName} - ${user.TestType}`, () => {
           
            const testid = user.TestId
            if(testid == "TC001"){
                cy.writeFile('cypress/responses/signInApiResponse.json', "")
            }

            
            const  request = cy.request(
                {
                    method: 'POST',
                    url: 'https://auth.devbridgeup.com/signIn',
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
                        
                           // "tenant_name": "TrackDefectTwo",
                           // "tenant_name": user.tenant_name,
                           // "email": "prabhakaran+13@bridgeup.com",
                            "email": user.email,
                            "password": user.password
                           // "first_name": user.first_name,
                           // "last_name": user.last_name,
                           // "designation": user.designation,
                           // "mobile_number": user.mobile_number,
                           // "country_code": user.country_code,
                        
                    },
                    log: true
                })
                .then((response) => {
            
                  
                   const resSC = response.status
                    cy.log(resSC)
                    if(resSC.toString() == "200"){
                    
                    cy.log(response.body.success)
                   
                   
                   }else{
                    cy.log(response.body.statusCode)
                    cy.log(response.body.message)
                    cy.log(response.body.errorCode)
                       
                   }

                })
        })    
    })
})