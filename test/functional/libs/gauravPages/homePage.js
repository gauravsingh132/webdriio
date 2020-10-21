class homePage{

    /**
     * waits 3sec for element to be visble
     * @type {WebElement}
     */
    get mainMenu(){
        browser.waitForVisible('#home', 30000);
        return $("#menuButton");
    }
    /**
     * wait for elememt to be visible
     * @type {WebElement}
     */
    get createStudyButton(){
        browser.waitForVisible('#btn-study-create', 30000);
        return $('#btn-study-create');
    }
    /**
     * wait for elememt to be visible
     * @type {WebElement}
     */
    get fillStudyNameText(){
        browser.waitForVisible("//*[@id='studyTitle|input']", 5000);
        return $("//*[@id='studyTitle|input']")
    }
    /**
     * @type {WebElement}
     */
    get fillStudyID(){
        return $("//*[@id='studyID|input']")
    }
    /**
     * @type {WebElement}
     */
    get fillContractCode(){
        return $("//*[@id='contractCode|input']")
    }
    /**
     * @type {WebElement}
     */
    get saveButton(){
        return $("//span[contains(text(),'Save')]");
    }
    /**
     * @param {String} value 
     * select the value from the drop down as per string passed in parameter
     */
    fillTherapeuticArea(value){
        $(`#ojChoiceId_therapeuticArea_selected`).click();
        browser.waitForVisible(`//div[contains(@id,'listbox-result') and text()='`+value+`']`,5000)
        $(`//div[contains(@id,'listbox-result') and text()='`+value+`']`).click();
    }
    /**
     * @param {String} value 
     * select the value from the drop down as per string passed in parameter
     */
    fillOpenLabel(value){
        $(`#ojChoiceId_studyBlinded_selected`).click();
        browser.waitForVisible(`//div[contains(@id,'listbox-result') and text()='`+value+`']`,5000)
        $(`//div[contains(@id,'listbox-result') and text()='`+value+`']`).click();
    }
    /**
     * @param {String} value 
     * select the value from the drop down as per string passed in parameter
     */
    fillStudyPhase(value){
        $(`#ojChoiceId_studyPhase_selected`).click();
        browser.waitForVisible(`//div[contains(@id,'listbox-result') and text()='`+value+`']`,5000)
        $(`//div[contains(@id,'listbox-result') and text()='`+value+`']`).click();
    }
    /**
     * sign out from the application
     */
    clickSignOut(){
        this.mainMenu.click();
        $("//a[@role='menuitem']//span[text()='Sign Out']").click();
    }
    /**
     * 
     * @param {object} studydetails 
     * @param {String} studydetails.StudyTitle
     * @param {String} studydetails.StudyID
     * @param {String} studydetails.StudyPhase
     * @param {String} studydetails.TherapeuticArea
     * @param {String} studydetails.OpenLabel
     * Fill the create study pop-up with all details and click on create study button
     */
    createStudy(studydetails){
        console.log(studydetails);
        this.createStudyButton.click();
        this.fillStudyNameText.setValue(studydetails.StudyTitle);
        this.fillStudyID.setValue(studydetails.StudyID);
        this.fillStudyPhase(studydetails.StudyPhase);
        this.fillTherapeuticArea(studydetails.TherapeuticArea);
    //    this.fillOpenLabel(studydetails.OpenLabel);
        this.fillContractCode.setValue(`ContractCode`);
        this.saveButton.click();
    }

}
module.exports=new homePage();