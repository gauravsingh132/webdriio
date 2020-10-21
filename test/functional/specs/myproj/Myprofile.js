
class Myprofile{

    constructor(){
    //   const phototab=this.phototab;
    //   phototab.waitForExist(15000);
    //     console.log('constrac start');
    }
    get phototab(){
        console.log('constrac start');
        $("//a[contains(text(),'Photos')]").waitForExist(15000);
        console.log('constrac end');
        return $("//a[contains(text(),'Photos')]");
    }
    clickphototab(){
        this.phototab.click();
    }


}
module.exports=new Myprofile();
//export default  Myprofile;