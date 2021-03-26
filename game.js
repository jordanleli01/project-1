function playGame(rounds) {
    let wins = 0,
    losses = 0,
    ties   = 0;

    let userChoice, compChoice;
    for(let i = 0; i < rounds; i++) {
        userChoice = prompt("Do you pick rock, paper or scissors? (enter r, p or s)");
        if(userChoice == "r") {
            userChoice = 0;
        }
            else if(userChoice == "p") {
                userChoice = 1;
            }
            else {
                userChoice = 2;
            }
        compChoice = Math.floor(Math.random() * 3);

        /* 0=rock, 1=paper 2=scissors */
        if(compChoice == (userChoice + 1) % 3) {
            alert("user lost." );
            losses++;
        }
        else if (userChoice == ((compChoice + 1) % 3)) {
            alert("user won!");
            wins++;
        }
        else {
            alert("user tied. ");
            ties++;
        }
    }
    alert("You Won" + wins + " time(s), you lost" + losses + "time(s), and tied" +ties + "time(s).")
}


let rounds = prompt("how many rounds do you want to play?");
playGame(rounds);

