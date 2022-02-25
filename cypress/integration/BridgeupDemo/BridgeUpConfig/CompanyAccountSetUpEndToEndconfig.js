/* 
AUTHOR: TrackDfect
CompanyAccountSetUpEndToEnd Scenario
steps to run the code 
1.In package.json you have to change the path of the Script according to the script you are running
  for example :  "cypress run --spec 'cypress/integration/UI_Testing/Company/CompanyAccountSetUpEndToEnd.spec.js --headed"'
2.for getting html report you have to use "npm run test" command
3. give a newly or not modified user ids to all three testcases 
*/
export const Authid ='auth.bridgeup.com'
export const hasuraid ='api.bridgeup.com'
export const ValidPassword = 'Admin@123$'
export const ValidUser01 = 'Prabhakaran+8@bridgeup.com'
export const endtoendurl = 'https://app.bridgeup.com/login'