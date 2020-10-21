
class mathproblem{

    sum(firstnum,secondNum,thirdnum)
    {
        if(thirdnum ='undefined')
        {
            return firstnum+secondNum;
        }
        return firstnum+secondNum+thirdnum;
    }
    sub(firstnum,secondNum)
    {
        return firstnum-secondNum;
    }
   
    multi(firstnum,secondNum,thirdnum)
    {
        if(thirdnum ='undefined')
        {
            return firstnum*secondNum;
        }
        return firstnum*secondNum*thirdnum;
    }
    fundata()
    {
        var school = {
            name:'gaurav',
            schoo: 'abc',
            clas: '3rd',
            phone:9015774
        }
        return school;
    }
    


}
module.exports= new mathproblem();