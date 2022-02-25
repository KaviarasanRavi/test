/// <reference types ="cypress"/>
import BridgeUpBlogPage from'../BridgeUpDotCom/BridgeUpDotComPageObj/BridgeupBlogPageObj'
import { BlogPagetesturl } from './BridgeUpDotComConfig/BlogPageConfig';
describe('BridgeUp-BlogPage- Test Suite', () => {
    before(function  (){
        cy.visit(BlogPagetesturl);
    })   
        it(`Test 001: BridgeUpdotcom-BlogPage-Default-Text-Blog-Verification`, () => {  
        BridgeUpBlogPage.verifyDefaultTextBlog();
    })
        it(`Test 002: BridgeUpdotcom-BlogPage-Default-Text-ReadOur-Verification`, () => { 
        BridgeUpBlogPage.verifyDefaulTextReadOur();
    })
        it(`Test 003: BridgeUpdotcom-BlogPage-Default-LinkText1-Verification`, () => { 
        BridgeUpBlogPage.verifyDefaultLinkText1();
    })
        it(`Test 004: BridgeUpdotcom-BlogPage-Default-LinkText2-Verification`, () => { 
        BridgeUpBlogPage.verifyDefaultLinkText2();
    })
        it(`Test 005: BridgeUpdotcom-BlogPage-Default-LinkText3-Verification`, () => { 
        BridgeUpBlogPage.verifyDefaultLinkText3();
    })
        it(`Test 006: BridgeUpdotcom-BlogPage-Default-LinkText4-Verification`, () => { 
        BridgeUpBlogPage.verifyDefaultLinkText4();
    })

})