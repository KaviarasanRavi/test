/*
AUTHOR: TrackDfect
CompanyPaymentPartner Scenario
steps to run the code 
1.In package.json you have to change the path of the Script according to the script you are running
  for example :  "cypress run --spec 'cypress/integration/UI_Testing/Company/CompanyPaymentPartner.spec.js --headed"'
2.for getting html report you have to use "npm run test" command
3.no changes needed in userid
4.new mail id needed in the following testcases (change it in PaymentPartnerconfig.js)
006     razorpay
007     Appstore
008     cashfree
009     googleplay
010     pay u userid
011     valid csv user id
012     chargebee
5.chargebee credentials provided was not working in the live site so you can add the valid credentials and
remove the command slash from the code and it will run.
*/
export const ValidPPPassword = 'Admin@123$'
export const ValidCSVUserid = 'prabhakaran+413@bridgeup.com'
export const ValidCSVLT20MBUserid = 'prabhakaran+407@bridgeup.com'
export const INValidCSVMT20MBUserid = 'prabhakaran+407@bridgeup.com'
export const INValidPDFUserid = 'prabhakaran+407@bridgeup.com'
export const INValidXLSXUserid = 'prabhakaran+407@bridgeup.com'
export const INValidTXTUserid = 'prabhakaran+407@bridgeup.com'
export const INValidDOCUserid = 'prabhakaran+407@bridgeup.com'
export const ValidCSVStripeUserid = 'prabhakaran+407@bridgeup.com'
export const ValidCSVChargebeeUserid = 'prabhakaran+414@bridgeup.com'
export const ValidCSVRazorpayUserid = 'prabhakaran+408@bridgeup.com'
export const ValidCSVAppstoreUserid = 'prabhakaran+409@bridgeup.com'
export const ValidCSVCashFreeUserid = 'prabhakaran+410@bridgeup.com'
export const ValidCSVGooglePlayUserid = 'prabhakaran+411@bridgeup.com'
export const ValidCSVPayUUserid = 'prabhakaran+412@bridgeup.com'
export const INValidPDFtoCSVReplaceUserid = 'prabhakaran+407@bridgeup.com'
export const Authid ='auth.devbridgeup.com'
export const hasuraid ='api.devbridgeup.com'
export const paymentTestUrl='https://app.devbridgeup.com/login'
