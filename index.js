function play() {
    var arr = ['paper', 'rock', 'scissor'];
    
    // Randomly select moves for Player 1 and Player 2
    var play1 = arr[Math.floor(Math.random() * arr.length)] + "1.jpg";
    var play2 = arr[Math.floor(Math.random() * arr.length)] + "2.jpg";
    
    // Select the first and second image elements
    var disp1 = document.querySelectorAll("img")[0];
    var disp2 = document.querySelectorAll("img")[1]; // Corrected the index for Player 2
    
    // Set the new image sources
    disp1.setAttribute("src", play1);
    disp2.setAttribute("src", play2);
    
    // Select the heading to display the result
    var result = document.querySelector("h1");

    // Extract moves without the "1.jpg" and "2.jpg" suffix
    var move1 = play1.split("1.jpg")[0];
    var move2 = play2.split("2.jpg")[0];

    // Determine the result
    if (move1 === move2) {
        result.innerHTML = "Tie";
    } else if ((move1 === "rock" && move2 === "scissor") || 
               (move1 === "scissor" && move2 === "paper") || 
               (move1 === "paper" && move2 === "rock")) {
        result.innerHTML = "Player 1 Wins";
    } else {
        result.innerHTML = "Player 2 Wins";
    }
}
