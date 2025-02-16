var document_length = document.querySelectorAll(".drum").length;

for (var i = 0; i < document_length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
        var buttonhtml = this.innerHTML;
        make_sound(buttonhtml);  
        currentAnimation(buttonhtml);
    });
};

document.addEventListener("keypress", function(event){
    make_sound(event.key);
    currentAnimation(event.key);
});

function make_sound(key){
    switch (key) {
        case "w":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
    
        default:
            console.log(buttonhtml)
            break;
        };
    };

function currentAnimation(current_key){
    var pressed_key = document.querySelector("." + current_key);
    pressed_key.classList.add("pressed");

    setTimeout(function(){
        pressed_key.classList.remove("pressed");
    }, 200);

}

