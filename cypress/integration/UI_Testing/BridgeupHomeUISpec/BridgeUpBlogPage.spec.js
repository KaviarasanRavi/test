/// <reference types ="cypress"/>
import BridgeUpBlogPage from'../BridgeupHomeUIpageObjects/BridgeupBlogPageObj'
describe('BridgeUp- UI- BlogPage- Test Suite', () => {
    beforeEach(function  (){
        cy.visit('https://bridgeup.com/blog/');

    })
    it(`Test 001: Bridgeup-UI-BlogPage-positive`, () => {  
        BridgeUpBlogPage.verifyDefaultTextBlog();
        BridgeUpBlogPage.verifyDefaulTextReadOur();
        BridgeUpBlogPage.verifyDefaultLinkText1();
        BridgeUpBlogPage.verifyDefaultLinkText2();
        BridgeUpBlogPage.verifyDefaultLinkText3();
        BridgeUpBlogPage.verifyDefaultLinkText4();
    })

})