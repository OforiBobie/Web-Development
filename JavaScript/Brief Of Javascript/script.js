function generateNumbers(){
    let output="";
    let count=0;
    while(count < 10){
        let randomNum=Math.floor(Math.random()*100);
        output+=randomNum + "";
    }
    document.getElementById("output").innerText=output;
}