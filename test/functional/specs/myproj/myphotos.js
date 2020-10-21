class myphotos{
    constructor(){
    }

    get like_button(){
        return $("//form[@class='fbPhotosSnowliftFeedbackForm commentable_item collapsible_comments']//a[@role=\"button\" and text()=\"Like\"]");
    }

   Click_likeButton(){
    console.log('wait start'+new Date());
    const likebtn=this.like_button;
    console.log(likebtn.isClickable());
    console.log('wait end'+new Date());
    this.like_button.click();
   } 
}
module.exports=new myphotos();
//export default new myphotos;