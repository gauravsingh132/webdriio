
class FlightUtilities{

    getmonthname(month_number)
    {
        let month=["Janury",'Febuary','March', 'April','May','June','July','August','September','October','November','December'];
        return month[month_number].toString();
    }

}
module.exports=new FlightUtilities();