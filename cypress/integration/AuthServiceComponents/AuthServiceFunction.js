/// <reference types ="cypress"/>
// Functions to do BridgeUP API Http Post.

 function fnAPIHttpsPOST( testEnv1)  //,    testAPI,    AuthBeareertoken,    tenentType,    tenentName,    userEmail,    userPassword,    userFirstName,    userLastName,    userDesignation,    userMobileNumber,    userCountryCode)
    {
       cy.log(testEnv1)
       return true
    }
   /* const  request = cy.request(
        {
            method: 'POST',
            //url: 'https://auth.devbridgeup.com/signUp',
            url: `https://${testEnv}/${testAPI}`,
            
            failOnStatusCode: true, 
            form:true,
            
           auth: {
            bearer : AuthBeareertoken,
            },
            headers: {
                'Content-Type': 'application/json',
                'X-Hasura-Tenant-Type' : tenentType
            },
            body: {
                
                   // "tenant_name": "TrackDefectTwo",
                    "tenant_name": tenentName,
                   // "email": "prabhakarans0001@bridgeup.com",
                    "email": userEmail,
                    "password": userPassword,
                    "first_name": userFirstName,
                    "last_name": userLastName,
                    "designation": userDesignation,
                    "mobile_number": userMobileNumber,
                    "country_code": userCountryCode,
                
            },
            log: true
        })
        

         return true;


}*/
