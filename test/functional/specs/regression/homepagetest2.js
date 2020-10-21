const { assert } = require("chai");


describe('test the regression',()=>{

    it('secind test the title of the page',()=>{
        browser.url("https://www.google.com/")
        const hometitle=browser.getTitle();
        assert.equal('hometitle',"Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in","title not matched")

    })
    it('secind second it block',()=>{
        console.log("printing secind it block1")
        console.log("printing secind it block2")
        console.log("printing secind it block3")
        console.log("printing secind it block4")
    })
})