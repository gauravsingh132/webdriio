const  facebook =require ("./facebook");
//import Myphotos from "./myphotos";
//import Myprofile from "./Myprofile";



describe(`[OTMID:45186] - Withdrawal Event can be Checked for Unscheduled Visit`, () => {
    //before(() => browser.windowHandleMaximize());

    it(`Navigating to Study Draft List`, () => {
       browser.url("https://www.facebook.com/");
       facebook.Clickmyprofile();
       console.log('my profile clicked');
       Myprofile.clickphototab();
       console.log('my clickphototab clicked');
       $("#pagelet_timeline_medley_photos").waitForExist(10000);
       console.log(($("#pagelet_timeline_medley_photos")).isExisting());
       console.log((browser.$$("//li[@class='fbPhotoStarGridElement fbPhotoStarGridNonStarred focus_target _53s fbPhotoCurationControlWrapper']")).length);
       var len=(browser.$$("//li[@class='fbPhotoStarGridElement fbPhotoStarGridNonStarred focus_target _53s fbPhotoCurationControlWrapper']")).length;
       var len2=0;
       while(!(len2==len)){
            len=len2; 
            browser.keys("PageDown");
            browser.keys("PageDown");
            browser.pause(4000);
            len2=(browser.$$("//li[@class='fbPhotoStarGridElement fbPhotoStarGridNonStarred focus_target _53s fbPhotoCurationControlWrapper']")).length;
            console.log((browser.$$("//li[@class='fbPhotoStarGridElement fbPhotoStarGridNonStarred focus_target _53s fbPhotoCurationControlWrapper']")).length);
        }

      //  for(var i=1;i<=len2;i++)
      //  {
       //  $("(//li[@class='fbPhotoStarGridElement fbPhotoStarGridNonStarred focus_target _53s fbPhotoCurationControlWrapper']//i[@class='uiMediaThumbImg'])["+1+"]").click();
        
       //  Myphotos.Click_likeButton();
        
     //   }

        browser.pause(10000);
    });


});