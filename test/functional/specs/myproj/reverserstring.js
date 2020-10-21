

class reverserstring{

   constructor (){
       console.log('constructor');
   }

        getstring(str) {
            let newname = "";
            for (let i = str.length-1;i>=0;i--)
            {
                newname+=str[i];
            }
        return newname;
        }


        reverseString(str) {
            var newString = "";
            let str2=str.split('');
            str2=str2.reverse();
            str=str.join;
          //  console.log(str2)
            
           
            return str2;
        }

        checkpalimdrome(str){    // 12321   // 123321
            let len=str.length;
            let len1=str.length;
            for(let i=0;i<=len/2;i++)
            {
                console.log( "value "+i+ " " + str[i] + " "+ str[len1-1])
                if(str[i]===str[len1-1])
                {
                    len1--;
                }
                else{
                    return false;
                }
            }
            return true;
        }

        findcharinstring(str,chr)
        {
           
            let temp=0;
            for(let i=0;i<str.length;i++)
            {
                if(str[i]===chr)
                {
                    temp++;
                }
            }
            console.log(chr +" " + "is appearing "+temp+" times" + "in string "+str)
        }
        
        fibnoseries() // 0 1 1 2 3 5 8 13 21
        {
        let num1=0;
        let num2=1;
        var num3=0;
        let fin="";
        console.log(num1);
        console.log(num2);
        fin=num1 + " " +num2;
        while(num3<=100)
        {
                    
            num3=num1+num2;
            if(num3>100)
            {
                break
            }
            console.log(num3);
            fin=fin + " " + num3;
            num2= num3;
            num1= num3-num1;
           
        }
        console.log(fin);
        }

        sumarray(arr)
        {

            var arra=[2,3,4,5,3,2];
            let temp=0;
            for(let i=0;i<arra.length;i++)
            {
                temp=temp+arra[i];
            }
            console.log(temp);
            //console.log(arra.reverse());
            this.revarr();
        }
        revarr()
        {
            console.log(arra.reverse());

        }
        
}
module.exports= new reverserstring();