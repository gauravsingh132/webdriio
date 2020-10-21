import reverserstring from  "./reverserstring";
import filesystem from  "./filesystem";
import vistarahome from  "C:/Mywork/New folder/ClinicalOne-Automation-ClinicalOne-19.2-automation-master/test/functional/specs/myproj/Flightproject/vistaraHome";

describe('check practice',()=>{

it('check math',()=>{
    browser.windowHandleMaximize();
    browser.url("https://www.airvistara.com/trip/");
    browser.pause(2000);
    vistarahome.clickEscapeKey();
    vistarahome.countrypopupcloseButton.click();
    browser.pause(2000);
    vistarahome.getonewayTrip.click();
    vistarahome.fillOrigin("delhi");
    vistarahome.fillDestination("mumbai");
    //browser.pause(10000);
    vistarahome.fillDepartDate();
    browser.pause(2000);

    vistarahome.searchButtom.click();
    browser.pause(2000);


});


});