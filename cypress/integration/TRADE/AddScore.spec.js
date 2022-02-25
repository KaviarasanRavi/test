/// <reference types ="cypress"/>


//const testData = require("../fixtures/ctenant.json")
//var SignUpUsers = require('../../fixtures/signUp.json');
//const SignUpUsers = require('../../fixtures/SignIn.json');
const myCompanyId = '301'
var access_token1 = ""
var  refresh_token1 = ""
describe('Staff - Trade - API - Test Suit', () => {
    
    beforeEach(function(){
       
        cy.intercept({hostname: 'auth.devbridgeup.com'}).as('auth');
        cy.intercept({hostname: 'api.devbridgeup.com'}).as('hasura');

        //cy.wait('@auth');
        //cy.wait('@hasura');
        const  request1 = cy.request(
            {
                method: 'POST',
                url: 'https://auth.devbridgeup.com/signIn',
                failOnStatusCode: true, 
                //form:true,
                headers: {
                    'Content-Type': 'application/json',
                    'X-Hasura-Tenant-Type' : 'STAFF',
                },
                body: {
                    
                        "email": "prabhakaran+staff@bridgeup.com",
                        //"email": user.email,
                        "password": "admin123",
                        //"password": user.password,
                },
                log: true
            })
            .then((response1) => {
        
              
                const resSC1 = response1.status
                cy.log(resSC1)
                if(resSC1.toString() == "200"){
                
                cy.log(response1.body.success)
                access_token1 = response1.body.access_token
                cy.log(response1.body.access_token)
                refresh_token1 = response1.body.refresh_token
                cy.log(response1.body.refresh_token)
          } 
        })
    
    })
    
    // SignUpUsers.forEach((user) => {
     
     
         //it(`Test:${user.TestId} - ${user.Tenant_Type} - ${user.TestAPIName} API - ${user.TestName} - ${user.TestType}`, () => {
             it(`Test:STAFF TRADE API -1`, () => {
            
               
                //const signinToken = "eyJraWQiOiIzQkMzUjd2eE9RN21CYmlvc3lNaWZNMXcwK0o3eGoyWUpGd2V4QzVCdTU4PSIsImFsZyI6IlJTMjU2In0.eyJ4LWhhc3VyYS1yb2xlIjoic3RhZmYtdXNlciIsInN1YiI6IjA5ZTMxY2EyLTA1OWQtNDg4YS05OTE3LTk4NDlhZmRhNmM3MSIsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5hcC1zb3V0aGVhc3QtMS5hbWF6b25hd3MuY29tXC9hcC1zb3V0aGVhc3QtMV9SVEpBU1NrNzYiLCJ4LWhhc3VyYS10ZW5hbnQtdHlwZSI6IlNUQUZGIiwiY29nbml0bzp1c2VybmFtZSI6IjA5ZTMxY2EyLTA1OWQtNDg4YS05OTE3LTk4NDlhZmRhNmM3MSIsIm9yaWdpbl9qdGkiOiIxMDk5MGZjMy1mY2Y3LTQ3MDYtYWMzZC00ZDdlYThkYjRkZDgiLCJhdWQiOiIzZ3A4MnJwcXQ3NmFwamYybDd2bmQ2bDFubCIsImV2ZW50X2lkIjoiNTIxMDIxZTAtNWJkZi00NzE0LTgwNzItYmZlZGY4OWI4YjNiIiwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE2NDAxNjk3NjIsIngtaGFzdXJhLXVzZXItaWQiOiIzNDkiLCJleHAiOjE2NDAxNzMzNjIsImlhdCI6MTY0MDE2OTc2MiwianRpIjoiZDhhMjhmODEtODc0Yi00ZGFhLTk5ZTgtNTBlZDA2YzQyNzBlIiwiZW1haWwiOiJwcmFiaGFrYXJhbitzdGFmZkBicmlkZ2V1cC5jb20ifQ.mAhQDr3w60C1uN34Bsfx91iTuHneyqk6CcZYVK0oovOcCMA9t9sMw3QrB0ja6NDR_5dxAbHPHVxMUqQ4ZefBbbUKvdq7h7RUVgUqTuw_tShm2new1LlN6KKFQtVOjnWX3PR0kw6X6LMDPz1XfJkvZlfUI1zWBW389m8-d2LpJ6998Y57Yw_X1tlJQmc3yHfRPxek3Lxc3daDiLx7FaF_BC1jqqQ23VfbRzl0ggzW2xy0c5wPXCDMf2qDoZdhu6uwvoEvl24xdyoxd7VSETam9MTsOgGc2S4JtYKA8R16jQ2hb1JmyEbpBppIrAiO6B9b1cWtRrOdMwGw_V_uS02Nrw"
                const signinToken = access_token1
                
                            const query3 = `mutation {
                                insert_company_score_one(object: {
                                  arr: 10000000,
                                  business_growth_score: 10,
                                  capital_efficiency_score: 10,
                                  company_id: ${myCompanyId},
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
                              }`;

                               cy.log(query3)
                  
             
                const  request = cy.request(
                 {
                     method: 'POST',
                     url: 'https://dev-bridgeup.hasura.app/v1/graphql',
                     failOnStatusCode: true, 
                     //form:true,
                   /* auth: {
                        // username: Cypress.env('username'),
                        // password: Cypress.env('password')
                         bearer : signinToken
                     },*/
                     headers: {
                        
                         'x-hasura-tenant-id' : myCompanyId,
                         'Authorization': 'Bearer '+ signinToken ,
                         'Content-Type': 'application/json',
                     },
                     //body: JSON.stringify({ query2 }),
                     //data : data,
                     body: {
                     // query: mutation,
                      query: query3,
                     // variables: {"company_score_id":32}
                     }, 
                     log: true
                 })
                 .then((response) => {
             
                   
                    const resSC = response.status
                     cy.log(resSC)
                     if(resSC.toString() == "200"){
                     
                    // cy.log(response.body.success)
                    cy.log(response.body.message)
                     cy.log(JSON.stringify(response.body));
                    
                    }else{
                     cy.log(response.body.statusCode)
                     cy.log(response.body.message)
                     cy.log(response.body.errorCode)
                        
                    }
                    
                     
                 })
               
            
         })    
     
   
 })