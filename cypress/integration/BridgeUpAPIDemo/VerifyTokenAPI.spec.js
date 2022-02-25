/// <reference types ="cypress"/>
/*
AUTHOR: TrackDfect
steps to run the code 
1.In package.json you have to change the path of the Script according to the script you are running
  for example :  "cypress run --spec 'cypress/integration/BridgeUpAPIDemo/VerifyTokenAPI.spec.js' --headed"
2.for getting html report you have to use "npm run test" command
3.input data should be available in verifyToken.json file under fixtures/API Folder
*/

//const testData = require("../fixtures/ctenant.json")
//var SignUpUsers = require('../../fixtures/signUp.json');
const SignUpUsers = require('../../fixtures/verifyToken.json');

describe('Company - verifyToken - API - Test Suit', () => {
    
    
    SignUpUsers.forEach((user) => {
    
    
        it(`Test:${user.TestId} - ${user.Tenant_Type} - ${user.TestAPIName} API - ${user.TestName} - ${user.TestType}`, () => {
           
            const testid = user.TestId
            if(testid == "TC001"){
                cy.writeFile('cypress/responses/verifyTokenApiResponse.json', "")
            }

            const  request = cy.request(
                {
                    method: 'GET',
                    url: 'https://auth.devbridgeup.com/verifyToken',
                    failOnStatusCode: false, 
                    form:true,
                    auth: {
                        //username: Cypress.env('username'),
                       // password: Cypress.env('password')
                       //bearer : "eyJraWQiOiJyYUlMRjJrd2pSQUpKVVZjQVwvcjA0dXk5eEdKb3JFRlM3M2tFcEtuTHo4bz0iLCJhbGciOiJSUzI1NiJ9.eyJ4LWhhc3VyYS1yb2xlIjoiY29tcGFueS11c2VyIiwic3ViIjoiNzEyMTU2YmUtZTgyYi00YzE1LThmMDQtOGMyZjc5OTI4MTQyIiwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLmFwLXNvdXRoZWFzdC0xLmFtYXpvbmF3cy5jb21cL2FwLXNvdXRoZWFzdC0xX3pQeVJjeFIydCIsIngtaGFzdXJhLXRlbmFudC10eXBlIjoiQ09NUEFOWSIsImNvZ25pdG86dXNlcm5hbWUiOiI3MTIxNTZiZS1lODJiLTRjMTUtOGYwNC04YzJmNzk5MjgxNDIiLCJvcmlnaW5fanRpIjoiYjNjNjFmMzUtOGMwYy00OWMxLWI4ZDMtZWU1MWQwY2Y2NThiIiwiYXVkIjoiM2prYXVrM2Rlc2pmM3E4NGF2bXE1NWtoc2oiLCJ4LWhhc3VyYS10ZW5hbnQtaWQiOiIxNjkiLCJldmVudF9pZCI6Ijc5MGFmZWEwLWI2YTItNGQ4My1hNTVhLWZiOGE1NGM0MzM2NyIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjM3NTg5NzM3LCJ4LWhhc3VyYS11c2VyLWlkIjoiMTg5IiwiZXhwIjoxNjM3NTkzMzM3LCJpYXQiOjE2Mzc1ODk3MzcsImp0aSI6IjU0NjBkMTI4LTNkYmYtNGYzMi1hODliLTdhZjUzYTYxNjU0MCIsImVtYWlsIjoicHJhYmhha2FyYW4rM0BicmlkZ2V1cC5jb20ifQ.BZlmULRgBcMLZjlQCQXdMNjo-vEnYr78dSWfUf3jHZPgqIAo5NFMbmsbPl2M4o_sFvLMH2gtTAXgGSHwQzzK7WReaEl-qrghXDJr2dgB4OyOWUzB2YyE9STXJr-EGSZNPuaoaoS5x_-BDX8LKKYV8Q0hiaOww9qkOuTUTUr1rDVE_Vc7r4L2vw4ajX0JOaOvG2Om5yuucXlmZ3Kok7H8wS9hp8X2_OEhW9CKN5SVTM9RhfY6MokAsZwO1Q6ZfCVLwgUEjgsh7i_-AO_95uc8Ty1O4jDjybEC5XEXkz3liMx3o3QxNsogSmunkjekW1O58WrSfe0gdsUXrDOQx3lSgg"
                       bearer : user.signInToken
                      // Token : user.signInToken,
                    },
                    headers: {
                        'Content-Type': 'application/json',
                        //'Authorization' : 'Bearer eyJraWQiOiJyYUlMRjJrd2pSQUpKVVZjQVwvcjA0dXk5eEdKb3JFRlM3M2tFcEtuTHo4bz0iLCJhbGciOiJSUzI1NiJ9.eyJ4LWhhc3VyYS1yb2xlIjoiY29tcGFueS11c2VyIiwic3ViIjoiNzEyMTU2YmUtZTgyYi00YzE1LThmMDQtOGMyZjc5OTI4MTQyIiwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLmFwLXNvdXRoZWFzdC0xLmFtYXpvbmF3cy5jb21cL2FwLXNvdXRoZWFzdC0xX3pQeVJjeFIydCIsIngtaGFzdXJhLXRlbmFudC10eXBlIjoiQ09NUEFOWSIsImNvZ25pdG86dXNlcm5hbWUiOiI3MTIxNTZiZS1lODJiLTRjMTUtOGYwNC04YzJmNzk5MjgxNDIiLCJvcmlnaW5fanRpIjoiZWMwNmJjYmEtMzRlZS00MGUwLTlkZWYtNzJhZmRiOGVkNmQwIiwiYXVkIjoiM2prYXVrM2Rlc2pmM3E4NGF2bXE1NWtoc2oiLCJ4LWhhc3VyYS10ZW5hbnQtaWQiOiIxNjkiLCJldmVudF9pZCI6ImRkNzZmZDVlLWJlMzItNDc1Ny05NzBhLTg2NGNmYTRmOTU1MSIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjM3NjQxNzcyLCJ4LWhhc3VyYS11c2VyLWlkIjoiMTg5IiwiZXhwIjoxNjM3NjQ1MzcyLCJpYXQiOjE2Mzc2NDE3NzIsImp0aSI6ImQ1ODc1MWE1LTdlZGMtNGZkYi1iZTZlLTMzYTg5ZmFkYjJiOSIsImVtYWlsIjoicHJhYmhha2FyYW4rM0BicmlkZ2V1cC5jb20ifQ.ZaRxGPNLaLItyb9uYiafw12sF9087WrfOnK-uqUXAR7EvR1XS9q2g6XTrN3k3qkRtuBYUFQ4AeoHk0OXjaqmcN9P5sAAqD4VFIIqivfnD1iPQYBE6BlYLO9ebkLTBL-aFdWEvEQTp8SPWni-VpvkFg3Sxk1z76PC-S8F268UbmLBe1v6WVvuhazeE6AQQH5m5FXoN1Y22SlsTK1-8_3lCCLgKbmpkW6cXPTCpl0cP2DwdBdkTtU9T0frrQVGYZXBAp39yyXyMGLHztFaVP2IKflhZS6H63QZnicTgFpnaNff_qaRq18ExdmSAQrp6qCyiyeFJr9Fnqe2RLVSbE1lCA',
                        //'X-Hasura-Tenant-Type' : user.Tenant_Type
                        'X-Hasura-Tenant-Type' : 'COMPANY'
                    },
                    body: {
                        
                           // "refreshToken": "eyJraWQiOiJyYUlMRjJrd2pSQUpKVVZjQVwvcjA0dXk5eEdKb3JFRlM3M2tFcEtuTHo4bz0iLCJhbGciOiJSUzI1NiJ9.eyJ4LWhhc3VyYS1yb2xlIjoiY29tcGFueS11c2VyIiwic3ViIjoiNzEyMTU2YmUtZTgyYi00YzE1LThmMDQtOGMyZjc5OTI4MTQyIiwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLmFwLXNvdXRoZWFzdC0xLmFtYXpvbmF3cy5jb21cL2FwLXNvdXRoZWFzdC0xX3pQeVJjeFIydCIsIngtaGFzdXJhLXRlbmFudC10eXBlIjoiQ09NUEFOWSIsImNvZ25pdG86dXNlcm5hbWUiOiI3MTIxNTZiZS1lODJiLTRjMTUtOGYwNC04YzJmNzk5MjgxNDIiLCJvcmlnaW5fanRpIjoiYjkyNTA1ZTYtY2JkOC00ZGI4LTgxODQtMTc1YmNkZjMxNzdiIiwiYXVkIjoiM2prYXVrM2Rlc2pmM3E4NGF2bXE1NWtoc2oiLCJ4LWhhc3VyYS10ZW5hbnQtaWQiOiIxNjkiLCJldmVudF9pZCI6IjQxYmM1NDY3LWFmNTUtNGJmZS04OGNhLTBhMzYwOGE0OTRmYiIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjM3NjQyMjEzLCJ4LWhhc3VyYS11c2VyLWlkIjoiMTg5IiwiZXhwIjoxNjM3NjQ1ODEzLCJpYXQiOjE2Mzc2NDIyMTMsImp0aSI6IjBlZDJmYmFlLTQ4NmYtNDBkZS05YzY2LTQ2NjVkMmFhNjA1OSIsImVtYWlsIjoicHJhYmhha2FyYW4rM0BicmlkZ2V1cC5jb20ifQ.mWFjDOrLIDlBEpnhjyfRIQCyk-FANYkUDrkw6sObeFEM5ftWga5_UqUamNBdaxF99hHGmJEprsAP__0n0WR082Qqa_5SBdXXZW5z86Ji4tsxWTrMoS5Pr41DY2sTWfnIVTEuOFYA96sfgMDJENQiM_1rWtvs7SzzQPX-76VWfVl5I0UAmkeyPEWU2LnU57usuCb1H-Uv79nnSiI9GJkVVcBd-RFANUZ0oGOr11GMtV0TlZhAC1Yt0DaM_grSaplbXwPSrk66WGkS2_kPX4ek37ZHciPmvtXcIlyYOTcpBbnlZLG40vUGzlaSW9eu9OMqDrlLYWV_aYdOLYtmxGpCvQ",
                           // "tenant_name": user.tenant_name,
                           // "email": "prabhakarans0001@bridgeup.com",
                           // "email": user.email,
                           // "password": user.password,
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
                    cy.writeFile('cypress/responses/verifyTokenApiResponse.json', user.TestId,{ flag: 'a+' })   
                    cy.writeFile('cypress/responses/verifyTokenApiResponse.json', response.body,{ flag: 'a+' })
                    
                    cy.log(response.body.success)
                    //cy.log(response.body.message)
                    //expect(response.body.success).to.be.true

                      // expect(response.body.success).contains(user.Expected_success)
                      // expect(response.body.message).contains(user.Expected_message)

                   }else{
                    cy.writeFile('cypress/responses/verifyTokenApiResponse.json', user.TestId,{ flag: 'a+' })
                    cy.writeFile('cypress/responses/verifyTokenApiResponse.json', response.body,{ flag: 'a+' })
                    cy.readFile
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