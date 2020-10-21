
// Complete the migratoryBirds function below.
// Sample Input 1

// 11
// 1 2 3 4 5 4 3 2 1 3 4
// Sample Output 1

// 3
arr=[1,2,3,4,5,4,3,2,1,3,4]
function migratoryBirds(arr) {

    var temp;
    let jssondata={}
    for(var i=0;i<arr.length;i++)
    {
        temp=1;
        for(var j=i+1;j<arr.length;j++)
        {
            if(arr[i]==arr[j])
            {
                temp++;
                arr[j]=0;
            }
        }
        

    }

}


