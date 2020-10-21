import flightutil from "../Flightproject/FlightUitilities";

class vistaraHome{


   get countrypopupcloseButton()
    {
        return $("//div[@id='domainModal']//button[@class='close']");
    }

    get getonewayTrip()
    {
        return $('#onewaytrip a');
    }

    get searchButtom()
    {
        console.log($("#search_book_flights_1").isEnabled());
        return $("#search_book_flights_1");
    }

    clickEscapeKey()
    {
        browser.keys("Escape");
    }

    fillOrigin(origin)
    {
        $("//input[@placeholder='Origin']").setValue(origin);
        let originname=origin.slice(0,1).toUpperCase().concat(origin.slice(1,(origin.length)))
        browser.pause(3000);
        $("//div[@id='departsfrom-div']//span[contains(text(),'"+originname+"')]").click();
    }
    fillDestination(destination)
    {
        $("//input[@placeholder='Destination' and @name='flightSearchTo']").setValue(destination);
        let destinationnname=destination.slice(0,1).toUpperCase().concat(destination.slice(1,(destination.length)))
        browser.pause(3000);
        $("//div[@class='scombobox-list destinationList']//span[contains(text(),'"+destinationnname+"')]").click();
    }
    fillDepartDate()
    {

        let datestring="22/6/2020";
        let arrydate= datestring.split("/");
        let year=arrydate[2];
        let monthnumber=arrydate[1]-1;
        let day=arrydate[0]
        $('#departCalendar').click();
        browser.pause(2000);
        $("//div[@id='custom_year']//div[text()='"+year+"']").click();
        let month=flightutil.getmonthname(parseInt(monthnumber));
        month=month.slice(0,3);
        $("//div[@id='custom_menu']//span[contains(text(),'"+month+"')]").click(); // select month
        $("//a[@class='ui-state-default' and text()='"+day+"']").click();
     }


}
module.exports= new vistaraHome();