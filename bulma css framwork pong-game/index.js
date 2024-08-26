const p1 = {
    score: 0,
    button: document.querySelector("#p1button"),
    display: document.querySelector("#p1Display")
}
const p2 = {
    score: 0,
    button: document.querySelector("#p2button"),
    display: document.querySelector("#p2Display")
}

const resetbutton = document.querySelector("#reset");
const playto = document.querySelector("#playto");
let winningScore = 3;
let isGameOver = false;

function update_scores(player, opponent){
    if (!isGameOver){
        player.score+=1;
        if (player.score === winningScore){
            isGameOver = true;
            player.display.classList.add("has-text-success");
            opponent.display.classList.add("has-text-danger");
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
    }
    player.display.textContent = player.score;
}

p1.button.addEventListener("click", function(){
    update_scores(p1,p2)
})

p2.button.addEventListener("click", function(){
    update_scores(p2,p1)
})

playto.addEventListener("change", function(){
    winningScore = parseInt(this.value);
    reset();
})
resetbutton.addEventListener("click", reset);

function reset(){
    isGameOver = false;
    for (let p of [p1,p2]){
        p.score = 0;
        p.display.textContent = p.score
        p.display.classList.remove("has-text-success", "has-text-danger")
        p.button.disabled = false
    }
}