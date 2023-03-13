var btn=document.getElementById("btn");
var guesstext=document.querySelector(".guesstext");
var number=[Math.floor(Math.random()*11)]
btn.addEventListener("click",()=>{
    var b=document.getElementById("number").value;
    if(b==number){
     guesstext.innerHTML='You Guess Right.....🤖'
    }else if(b<number){
        guesstext.innerHTML="You Guess Too Low!"
    };
    if(b>number){
        guesstext.innerHTML="You Guess Too High!"
    }
    
});