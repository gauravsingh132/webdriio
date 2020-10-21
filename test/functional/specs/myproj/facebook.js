//import Myprofile from "./Myprofile";

class facebook
{
    constructor(){

    }

    get username(){
        return $("#email");
    }

    get password(){
        return $("#pass");
    }

    get loginbutton(){
        return $("#loginbutton");
    }
     
    login(username,password) {
        this.username.setValue(username);
        this.password.setValue(password);
        this.loginbutton.click();
    }

    Clickmyprofile(){
        $("//img[contains(@id,'profile_pic_header')]//parent::span").click();
        //return  new Myprofile();
    }

}
module.exports = new facebook();
//export default new facebook;