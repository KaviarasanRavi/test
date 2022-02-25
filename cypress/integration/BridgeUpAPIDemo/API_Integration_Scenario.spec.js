/// <reference types ="cypress"/>
/*
AUTHOR: TrackDfect

steps to run the code 
1.In package.json you have to change the path of the Script according to the script you are running
  for example :  "cypress run --spec 'cypress/integration/BridgeUpAPIDemo/API_Integration_Scenario.spec.js' --headed"
2.for getting html report you have to use "npm run test" command
3.input data should be available in SignUpValidate.json file under fixtures/API Folder
*/
//const cypress = require("cypress")
//for test

//const SignUpUsers = require('../../fixtures/SignUpValidate.json');

describe('Company - API Integration - Test Suit', () => {
    
    
    
    
    
        it(`Test 001:Company - UserStep1SignUp && SignUpValidation - API`, () => {
           
            
            const  request1 = cy.request(
                {
                    method: 'POST',
                    url: 'https://auth.devbridgeup.com/step1SignUpValidate',
                    failOnStatusCode: true, 
                    form:true,
                    headers: {
                        'Content-Type': 'application/json',
                        'X-Hasura-Tenant-Type' : 'COMPANY',
                    },
                    body: {
                        
                           "tenant_name": "APIIntegrationOne+2",
                           // "tenant_name": user.tenant_name,
                            "email": "prabhakaran+22@bridgeup.com",
                            //"email": user.email,
                            "password": "Admin@123",
                            //"password": user.password,
        
                    },
                    log: true
                })
                .then((response1) => {
            
                  
                    const resSC1 = response1.status
                    cy.log(resSC1)
                    if(resSC1.toString() == "200"){
                    
                    cy.log(response1.body.success)
                    cy.log(response1.body.message)
     
                    const  request2 = cy.request(
                        {
                            method: 'POST',
                            url: 'https://auth.devbridgeup.com/signUp',
                            failOnStatusCode: false, 
                            form:true,
                            headers: {
                                'Content-Type': 'application/json',
                                'X-Hasura-Tenant-Type' : 'COMPANY',
                            },
                            body: {
                                
                                   "tenant_name": "APIIntegrationOne+38",
                                   // "tenant_name": user.tenant_name,
                                    "email": "prabhakaran+38@bridgeup.com",
                                    //"email": user.email,
                                    "password": "Admin@123",
                                    //"password": user.password,
                                    "first_name": "prabha",//user.first_name,
                                    "last_name": "Karan",//user.last_name,
                                    "designation": "tESTING",//user.designation,
                                    "mobile_number": "6381794677",//user.mobile_number,
                                    "country_code": "91"//user.country_code,
                                
                            },
                            log: true
                        })
                        .then((response2) => {
                    
                            const resSC2 = response2.status
                            cy.log(resSC2)
                            if(resSC2.toString() == "200"){
                                cy.log(response2.body.success)
                                cy.log(response2.body.message)
  
                            }else{
                                cy.log(response2.body.statusCode)
                                cy.log(response2.body.message)
                                cy.log(response2.body.errorCode)
                                
                                
                            }
                        })
                   }else{
                    
                    cy.log(response1.body.statusCode)
                    cy.log(response1.body.message)
                    cy.log(response1.body.errorCode)
      
                   }
                   
                    
                })
              
           
        })    
    

// 2nd test case 

    it(`Test 002:Company - UsersignIn && signOut - API`, () => {
           
        
        var access_token1 = ""
        var  refresh_token1 = ""

        const  request1 = cy.request(
        {
            method: 'POST',
            url: 'https://auth.devbridgeup.com/signIn',
            failOnStatusCode: true, 
            form:true,
            headers: {
                'Content-Type': 'application/json',
                'X-Hasura-Tenant-Type' : 'COMPANY',
            },
            body: {
                
                    "email": "prabhakaran+20@bridgeup.com",
                    //"email": user.email,
                    "password": "Admin@123",
                    //"password": user.password,

            },
            log: true
        })
        .then((response1) => {
    
          
            const resSC1 = response1.status
            cy.log(resSC1)
            if(resSC1.toString() == "200"){
            
            cy.log(response1.body.success)
            //cy.log(response1.body.message)

            access_token1 = response1.body.access_token
            cy.log(response1.body.access_token)
            //cy.log(access_token1)
            refresh_token1 = response1.body.refresh_token
            cy.log(response1.body.refresh_token)
            //cy.log(refresh_token1)
           

            const  request2 = cy.request(
                {
                    method: 'POST',
                    url: 'https://auth.devbridgeup.com/signOut',
                    failOnStatusCode: true, 
                    form:true,
                    auth: {
                        bearer : access_token1,
                    },
                    headers: {
                        'Content-Type': 'application/json',
                        'X-Hasura-Tenant-Type' : 'COMPANY',
                    },
                    body: {
                        
                           
                    },
                    log: true
                })
                .then((response2) => {
            
                    const resSC2 = response2.status
                    cy.log(resSC2)
                    if(resSC2.toString() == "200"){
                        cy.log(response2.body.success)
                        cy.log(response2.body.message)

                    }else{
                        cy.log(response2.body.statusCode)
                        cy.log(response2.body.message)
                        cy.log(response2.body.errorCode)
                        
                        
                    }
                })
           }else{
            
            cy.log(response1.body.statusCode)
            cy.log(response1.body.message)
            cy.log(response1.body.errorCode)

           }
           
            
        })
      
   
       })

// 3rd test case

    it(`Test 003:Company - UsersignIn && ResetPassword && Userlogin with new password && signOut - API`, () => {
           
        
    var access_token1 = ""
    var refresh_token1 = ""
    var access_token2 = ""
    var refresh_token2 = ""
    var access_token3 = ""

    const  request1 = cy.request(
    {
        method: 'POST',
        url: 'https://auth.devbridgeup.com/signIn',
        failOnStatusCode: true, 
        form:true,
        headers: {
            'Content-Type': 'application/json',
            'X-Hasura-Tenant-Type' : 'COMPANY',
        },
        body: {
            
                "email": "prabhakaran+20@bridgeup.com",
                "password": "Admin@123"             
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
               
// child request 2
        
const  request2 = cy.request(
    {
        method: 'POST',
        url: 'https://auth.devbridgeup.com/resetPassword',
        failOnStatusCode: false, 
        form:true,
        auth: {
            
             bearer : access_token1,
        },
        headers: {
            'Content-Type': 'application/json',
            'X-Hasura-Tenant-Type' : 'COMPANY'
        },
        body: {
            
                "newPassword" : "admin123"
        },
        log: true
    })
    .then((response2) => {

      
       const resSC2 = response2.status
        cy.log(resSC2)
        if(resSC2.toString() == "200"){
        
        cy.log(response2.body.success)
        cy.log(response2.body.message)
        
        //Child request 3
        const  request3 = cy.request(
            {
            method: 'POST',
            url: 'https://auth.devbridgeup.com/signIn',
            failOnStatusCode: true, 
            form:true,
            headers: {
            'Content-Type': 'application/json',
            'X-Hasura-Tenant-Type' : 'COMPANY',
            },
            body: {

                "email": "prabhakaran+20@bridgeup.com",
                "password": "admin123"             
            },
            log: true
            })
            .then((response3) => {


            const resSC3 = response3.status
            cy.log(resSC3)
            if(resSC3.toString() == "200"){

            cy.log(response3.body.success)
            access_token2 = response3.body.access_token
            cy.log(response3.body.access_token)
            refresh_token2 = response1.body.refresh_token
            cy.log(response3.body.refresh_token)
   

        //Child request 4
        
        const  request4 = cy.request(
    {
        method: 'POST',
        url: 'https://auth.devbridgeup.com/refreshToken',
        failOnStatusCode: true, 
        form:true,

        headers: {
            'Content-Type': 'application/json',                    
            'X-Hasura-Tenant-Type' : 'COMPANY'
        },
        body: {
            
                 "refreshToken": refresh_token2,
                                      
        },
        log: true
    })
    .then((response4) => {

      
       const resSC4 = response4.status
        cy.log(resSC4)
        if(resSC4.toString() == "200"){                   
        cy.log(response4.body.success)
        //access_token
        access_token3 = response4.body.access_token
        cy.log(response4.body.access_token)

        //Child request 5
        
        const  request5 = cy.request(
{
    method: 'POST',
    url: 'https://auth.devbridgeup.com/signOut',
    failOnStatusCode: true, 
    form:true,
    auth: {
        bearer : access_token3,
    },
    headers: {
        'Content-Type': 'application/json',
        'X-Hasura-Tenant-Type' : 'COMPANY',
    },
    body: {
        
           
    },
    log: true
})
.then((response5) => {

    const resSC5 = response5.status
    cy.log(resSC5)
    if(resSC5.toString() == "200"){
        cy.log(response5.body.success)
        cy.log(response5.body.message)

    }else{
        cy.log(response5.body.statusCode)
        cy.log(response5.body.message)
        cy.log(response5.body.errorCode)
        
        
    }
})


        
        //Child request End 5
       
       }else{
        cy.log(response.body.statusCode)
        cy.log(response.body.message)
        cy.log(response.body.errorCode)
           
       }                  
        
    })             


        
        //Child request End 4
        



}else{

cy.log(response3.body.statusCode)
cy.log(response3.body.message)
cy.log(response3.body.errorCode)

}
  
})


        
        
        //Child request End 3
        
       }else{
        cy.log(response2.body.statusCode)
        cy.log(response2.body.message)
        cy.log(response2.body.errorCode)
            
       }
                          
    })
            
   

// child request end 2

       }else{
        
        cy.log(response1.body.statusCode)
        cy.log(response1.body.message)
        cy.log(response1.body.errorCode)

       }
       
        
    })
  

   })

})

