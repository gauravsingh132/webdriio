const { assert } = require("chai");


describe('first test the regression',()=>{

    it('first test the title of the page',()=>{
        browser.url("https://www.amazon.in/")
        const hometitle=browser.getTitle();
        assert.equal('hometitle',"Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in","title not matched")

    })
    it('first second it block',()=>{
        console.log("printing secind it block1")
        console.log("printing secind it block2")
        console.log("printing secind it block3")
        console.log("printing secind it block4")
    })
})