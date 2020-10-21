const fs  = require('fs'); 
const XLSX= require('xlsx');


class filesystem{

    createfileAddtext()
    {
        fsLibrary.writeFile("./test/gaurav.txt",'hellow new file',(error)=>{
            if (error) throw err; 
        })
    }
    readingfile()
    {
        fsLibrary.readFile("./test/gaurav.txt",(error,txtString)=>{
            if(error) throw err;
            console.log(txtString.length)
            console.log(txtString.toString())
            console.log(txtString)
        })
    }

    readxls()
    {
        const file= fs.readFileSync('./test/functional/TestData/RulesRegression_TestData.xls');
        const workbook=XLSX.readFile(file);
        const sheet= workbook.Sheets['Rules_PreReq'];
        console.log(sheet);

    }



}
module.exports= new filesystem();