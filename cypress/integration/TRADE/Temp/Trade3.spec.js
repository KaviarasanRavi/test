/// <reference types ="cypress"/>


//const testData = require("../fixtures/ctenant.json")
//var SignUpUsers = require('../../fixtures/signUp.json');
//const SignUpUsers = require('../../fixtures/SignIn.json');

describe('Staff - Trade - API - Test Suit', () => {
    
    
    // SignUpUsers.forEach((user) => {
     
     
         //it(`Test:${user.TestId} - ${user.Tenant_Type} - ${user.TestAPIName} API - ${user.TestName} - ${user.TestType}`, () => {
             it(`Test:STAFF TRADE API -1`, () => {
            
               
                const signinToken = "eyJraWQiOiIzQkMzUjd2eE9RN21CYmlvc3lNaWZNMXcwK0o3eGoyWUpGd2V4QzVCdTU4PSIsImFsZyI6IlJTMjU2In0.eyJ4LWhhc3VyYS1yb2xlIjoic3RhZmYtdXNlciIsInN1YiI6IjA5ZTMxY2EyLTA1OWQtNDg4YS05OTE3LTk4NDlhZmRhNmM3MSIsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5hcC1zb3V0aGVhc3QtMS5hbWF6b25hd3MuY29tXC9hcC1zb3V0aGVhc3QtMV9SVEpBU1NrNzYiLCJ4LWhhc3VyYS10ZW5hbnQtdHlwZSI6IlNUQUZGIiwiY29nbml0bzp1c2VybmFtZSI6IjA5ZTMxY2EyLTA1OWQtNDg4YS05OTE3LTk4NDlhZmRhNmM3MSIsIm9yaWdpbl9qdGkiOiIzMjZjOTc3NS02ZjQxLTQ4NGYtODA5NC1mMDFhYmE5YjgzOTUiLCJhdWQiOiIzZ3A4MnJwcXQ3NmFwamYybDd2bmQ2bDFubCIsImV2ZW50X2lkIjoiOGVjNTZjMTctMmQ2Ni00YTE2LThkM2MtODA5M2RmMjgzYzYwIiwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE2NDAxNTA2MTgsIngtaGFzdXJhLXVzZXItaWQiOiIzNDkiLCJleHAiOjE2NDAxNTQyMTgsImlhdCI6MTY0MDE1MDYxOCwianRpIjoiZTQ0ZjY2MTItMTc4Yi00OWI4LTg3NGMtMzgyN2UyMjE5YWU2IiwiZW1haWwiOiJwcmFiaGFrYXJhbitzdGFmZkBicmlkZ2V1cC5jb20ifQ.J8MSLa1rSBcU69uMmaQagrUaZzKhIMPGnRBIbfzt6BqZuBfbdqDvA1UqqF5ciFUzFljKb3YtBJs_1MB0kSdX38wuebSxHIT9A5wPNlPbNCaK1vrTrKWvfquJI8kA15x6omY6dtRsaYp2ApzbE8iH51kxH9yYFdxeDyA7bLye8a8unFdGh0KVKiWBwyyVsvrbgmWXCX5KOfV4nj8L4k9WTFA242lOiesYupVjvJOfqej6NgkW_ipr_Yxg2NAb91PkNaZspq1sI4ze6MORqAZiyZq0NiZZWtcB5_okDvRyOk9MznwU01hGhmWY2WqWAWqUsiXgwBewTxh4iiWuQ9aaXw"
                
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

                  cy.log(mutation)
                           /* cy.request({
                              url: '/',
                              method: 'POST',
                              body: {
                                query: mutation,
                                variables: {"company_score_id":32}

                              }
                            });*/
                            const query2 = `mutation{
                              createDeal(args: {company_score_id: 32}) {
                                deal_id
                               }
                               }`;
                  
             
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
                        
                         'x-hasura-tenant-id' : '3',
                         'Authorization': 'Bearer '+ signinToken ,
                         'Content-Type': 'application/json',
                     },
                     //body: JSON.stringify({ query2 }),
                     //data : data,
                     body: {
                      query: mutation,
                      variables: {"company_score_id":32}
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