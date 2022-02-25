/// <reference types ="cypress"/>


//const testData = require("../fixtures/ctenant.json")
//var SignUpUsers = require('../../fixtures/signUp.json');
//const SignUpUsers = require('../../fixtures/SignIn.json');

describe('Staff - Trade - API - Test Suit', () => {
    
    
   // SignUpUsers.forEach((user) => {
    
    
        //it(`Test:${user.TestId} - ${user.Tenant_Type} - ${user.TestAPIName} API - ${user.TestName} - ${user.TestType}`, () => {
            it(`Test:STAFF TRADE API -1`, () => {
           /* const testid = user.TestId
            if(testid == "TC001"){
                cy.writeFile('cypress/responses/signInApiResponse.json', "")
            }*/

            const signinToken = "eyJraWQiOiIzQkMzUjd2eE9RN21CYmlvc3lNaWZNMXcwK0o3eGoyWUpGd2V4QzVCdTU4PSIsImFsZyI6IlJTMjU2In0.eyJ4LWhhc3VyYS1yb2xlIjoic3RhZmYtdXNlciIsInN1YiI6IjA5ZTMxY2EyLTA1OWQtNDg4YS05OTE3LTk4NDlhZmRhNmM3MSIsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5hcC1zb3V0aGVhc3QtMS5hbWF6b25hd3MuY29tXC9hcC1zb3V0aGVhc3QtMV9SVEpBU1NrNzYiLCJ4LWhhc3VyYS10ZW5hbnQtdHlwZSI6IlNUQUZGIiwiY29nbml0bzp1c2VybmFtZSI6IjA5ZTMxY2EyLTA1OWQtNDg4YS05OTE3LTk4NDlhZmRhNmM3MSIsIm9yaWdpbl9qdGkiOiJmMzhkNDBhOC1mZjhlLTQ4OGYtODQ1NC03NGQ4ZWE2YjJjYTAiLCJhdWQiOiIzZ3A4MnJwcXQ3NmFwamYybDd2bmQ2bDFubCIsImV2ZW50X2lkIjoiM2Y2ZTNlNTAtNzAxNy00MjkxLWI5MjgtODlmOGM1ZWFjMDk0IiwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE2Mzk3NDA3NDEsIngtaGFzdXJhLXVzZXItaWQiOiIzNDkiLCJleHAiOjE2Mzk3NDQzNDEsImlhdCI6MTYzOTc0MDc0MSwianRpIjoiYmViYzY3NDgtYWMwYi00YTJmLWE3ZTgtN2YxMDczMDQwM2I4IiwiZW1haWwiOiJwcmFiaGFrYXJhbitzdGFmZkBicmlkZ2V1cC5jb20ifQ.ZeGAmpiRa-CvzBOnEiD8foH18qXYK4axZYhCLl_436UsPosyC1ETHLUSLCzKIdSB952HelhgL7WTq3fzrTNAC8kYcPU6h6zrJ-DUmA7ktGgYlIuniEv9MGSa8wWyVaI62_JvqLQYCssJGMjd8yd6Wz657owDulxvdrrY0oshDEG4NJrPkWFa32jD8XfvIatcAuvnjFBWtm6LkIMHepr6mqkGdCn0a2wUr9-1BR0hQ_qX0YWK1rLyy59LAwQzWBuY3K80bzloU_Mn8Ncpy4BoHQ2uvxqKfM5dN9EkxdnodmaE22IvbAAeji87mh3nln-liOloJkr3rzExNkl_Xo_5JA"

            const query = `
                mutation {
                    insert_company_score_one(object: {
                      arr: 10000000,
                      business_growth_score: 10,
                      capital_efficiency_score: 10,
                      company_id: 299,
                      customer_retention: 10,
                      customer_value_score: 10,
                      estimated_runway: 12,
                      facility_limit: 30,
                      financials_score: 10,
                      gross_margin: 10,
                      ltv_cac: 10,
                      management_score: 10,
                      min_bid_price: 0.7,
                      min_recommended_bid: 0.8,
                      payback_period: 12,
                      rating: 10,
                      revenue_retention: 10,
                      version: "v1",
                      max_recommended_bid:0.8
                    }) {
                      id
                    }
                  }
                
            `;
        

            
            const  request = cy.request(
                {
                    method: 'POST',
                    url: 'https://dev-bridgeup.hasura.app/v1/graghql',
                    failOnStatusCode: true, 
                    form:true,
                   auth: {
                       // username: Cypress.env('username'),
                       // password: Cypress.env('password')
                        bearer : signinToken
                    },
                    headers: {
                        'Content-Type': 'application/json',
                        'X-Hasura-Tenant-Type' : '299'
                    },
                    body: { query                   
                        
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
    
     //})
    
   // })
})