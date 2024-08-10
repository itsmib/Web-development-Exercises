for(var i=0;i<7;i++)
    {
        document.querySelectorAll("button")[i].addEventListener("click",function (){
            gg(this.innerHTML);
            btAnimation(this.innerHTML);
        });
        document.addEventListener("keydown",function(event) {
            gg(event.key);
            btAnimation(event.key);
        });
    }
function gg(buttonhtml)
{
    switch (buttonhtml)
            {
                case "w":
                    var audio = new Audio("sounds/tom-1.mp3");
                    audio.play();
                    break;
                case "a":
                    var audio = new Audio("sounds/tom-1.mp3");
                    audio.play();
                    break;
                case "s":
                    var audio = new Audio("sounds/tom-1.mp3");
                    audio.play();
                    break;
                case "d":
                    var audio = new Audio("sounds/tom-1.mp3");
                    audio.play();
                    break;
                case "j":
                    var audio = new Audio("sounds/tom-1.mp3");
                    audio.play();
                    break;
                case "k":
                    var audio = new Audio("sounds/tom-1.mp3");
                    audio.play();
                    break;
                case "l":
                    var audio = new Audio("sounds/tom-1.mp3");
                    audio.play();
                    break;
            }
}
function btAnimation(bt)
{
    var clbt=document.querySelector("."+bt);
    clbt.classList.add("pressed");

    setTimeout(function(){
        clbt.classList.remove("pressed");
    },100);
}