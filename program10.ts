/**Callback with setTimeout
- Create a function downloadFile().
- Accept filename and callback.
- Simulate downloading using setTimeout().
- After 3 seconds, execute callback displaying "Download Completed */

function downloadFile(filename:string, callback:()=>void):void{
    console.log("downloading "+ filename+"...");
    setTimeout(()=>{
        callback();
    },3000)
    
}

function showCompleted():void{
    console.log("Download Completed");
}
downloadFile("report.file",showCompleted);