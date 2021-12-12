var fs =require('fs')
fs.appendFile('cal.js','console.log("done")',function(err){
    console.log("Data Saved")
})