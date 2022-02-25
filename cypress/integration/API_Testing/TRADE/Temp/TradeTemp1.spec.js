/// <reference types ="cypress"/>


//const testData = require("../fixtures/ctenant.json")
//var SignUpUsers = require('../../fixtures/signUp.json');
//const SignUpUsers = require('../../fixtures/SignIn.json');
const myid = '40'
describe('Staff - Trade - API - Test Suit', () => {
    
    
    // SignUpUsers.forEach((user) => {
     
     
         //it(`Test:${user.TestId} - ${user.Tenant_Type} - ${user.TestAPIName} API - ${user.TestName} - ${user.TestType}`, () => {
             it(`Test:STAFF TRADE API -1`, () => {
            
               
                const signinToken = "eyJraWQiOiIzQkMzUjd2eE9RN21CYmlvc3lNaWZNMXcwK0o3eGoyWUpGd2V4QzVCdTU4PSIsImFsZyI6IlJTMjU2In0.eyJ4LWhhc3VyYS1yb2xlIjoic3RhZmYtdXNlciIsInN1YiI6IjA5ZTMxY2EyLTA1OWQtNDg4YS05OTE3LTk4NDlhZmRhNmM3MSIsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5hcC1zb3V0aGVhc3QtMS5hbWF6b25hd3MuY29tXC9hcC1zb3V0aGVhc3QtMV9SVEpBU1NrNzYiLCJ4LWhhc3VyYS10ZW5hbnQtdHlwZSI6IlNUQUZGIiwiY29nbml0bzp1c2VybmFtZSI6IjA5ZTMxY2EyLTA1OWQtNDg4YS05OTE3LTk4NDlhZmRhNmM3MSIsIm9yaWdpbl9qdGkiOiIxMDk5MGZjMy1mY2Y3LTQ3MDYtYWMzZC00ZDdlYThkYjRkZDgiLCJhdWQiOiIzZ3A4MnJwcXQ3NmFwamYybDd2bmQ2bDFubCIsImV2ZW50X2lkIjoiNTIxMDIxZTAtNWJkZi00NzE0LTgwNzItYmZlZGY4OWI4YjNiIiwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE2NDAxNjk3NjIsIngtaGFzdXJhLXVzZXItaWQiOiIzNDkiLCJleHAiOjE2NDAxNzMzNjIsImlhdCI6MTY0MDE2OTc2MiwianRpIjoiZDhhMjhmODEtODc0Yi00ZGFhLTk5ZTgtNTBlZDA2YzQyNzBlIiwiZW1haWwiOiJwcmFiaGFrYXJhbitzdGFmZkBicmlkZ2V1cC5jb20ifQ.mAhQDr3w60C1uN34Bsfx91iTuHneyqk6CcZYVK0oovOcCMA9t9sMw3QrB0ja6NDR_5dxAbHPHVxMUqQ4ZefBbbUKvdq7h7RUVgUqTuw_tShm2new1LlN6KKFQtVOjnWX3PR0kw6X6LMDPz1XfJkvZlfUI1zWBW389m8-d2LpJ6998Y57Yw_X1tlJQmc3yHfRPxek3Lxc3daDiLx7FaF_BC1jqqQ23VfbRzl0ggzW2xy0c5wPXCDMf2qDoZdhu6uwvoEvl24xdyoxd7VSETam9MTsOgGc2S4JtYKA8R16jQ2hb1JmyEbpBppIrAiO6B9b1cWtRrOdMwGw_V_uS02Nrw"
                
                var data1 = JSON.stringify({
                    query: `mutation {
                    placeBid(args: {deal_id: 21, price:0.85}) {
                      bid_id
                    }
                  }`,
                    variables: {}
                  });

                var data = JSON.stringify({
                    query: `mutation createDeal($company_score_id: Int!) {
                    createDeal(args: {company_score_id: $company_score_id}) {
                      deal_id
                    }
                  }`,
                    variables: {"company_score_id":32}
                  });

                  const mutation = `mutation createDeal($company_score_id: Int!) {
                    createDeal(args: {company_score_id: $company_score_id}) {
                      deal_id
                    }
                  }`

                  
                           /* cy.request({
                              url: '/',
                              method: 'POST',
                              body: {
                                query: mutation,
                                variables: {"company_score_id":32}

                              }
                            });*/
                            const query2 = `mutation{
                              createDeal(args: {company_score_id: ${myid}}) {
                                deal_id
                               }
                               }`;

                               cy.log(query2)
                  
             
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
                        
                         'x-hasura-tenant-id' : '299',
                         'Authorization': 'Bearer '+ signinToken ,
                         'Content-Type': 'application/json',
                     },
                     //body: JSON.stringify({ query2 }),
                     //data : data,
                     body: {
                     // query: mutation,
                      query: query2,
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