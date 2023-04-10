



// Jogador
class player {
    // constructor(name){
    //     this.name = name;
    // }
    credits = 10;     
}

// Novo jogador
const bernardo = new player() 


// Jogo
function game (player) {
        
        let gameState = false;
        
        function roll (player){

            let results = [];
            const symbols = ['cherry', 'lemon', 'orange', 'watermelon'];
            const values = {'cherry': 10, 'lemon': 20, 'orange': 30,'watermelon': 40};

            gameState = true;
            // Custo
            player.credits -= 1;
            
            // ROLL 
            for (let i = 0; i < 3; i++) { // 
                const index = Math.floor(Math.random() * symbols.length); // RANDOM NUMBER
                const symbol = symbols[index]; 
                results.push(symbol);
                           
                }
                
                console.log(`Result: ${results.join(' | ')}`);
                console.log(`Credits left: ${player.credits}`); 
                
                if (results[0] === results[1] && results[1] === results[2]) {
            
                const reward = values[results[0]];
                
                player.credits += reward;
            
                console.log(`You got ${reward} credits`);
                console.log(`Credits left: ${player.credits}`); 
            }
                    
                    
        }

        let cheatCount = 0;
        let lessThan40 = true;
        let moreThan60 = false;

        if(player.credits > 0){
            roll(player)
        
        } else if (player.credits > 0 && player.credits < 40) {

            
            if (Math.random() < 0.3){
                roll(player)
                
                // No cost spin 
                player.credits += 1;
                cheatCount += 1;
            }
        
        } else if (player.credits > 60) {

            lessThan40 = false;
            moreThan60 = true;

            if(Math.random() < 0.6){
                roll(player)

                // No cost spin 
                player.credits += 1;
                cheatCount += 1;
            }

        } else {
                
                console.log("You are out of credits!")
                console.log("Wanna play again?")

                // Prompt question -> 
                const readline = require('readline');
                const rl = readline.createInterface({
                input: process.stdin,
                output: process.stdout
                });

                rl.question('"Wanna play again?" (y/n) ', (answer) => {

                if (answer === "y") {
                player.credits = 10;

                console.log(`Now you have more ${player.credits} credits!`);
                

                } else if (answer === "n") {
                console.log("See you next time");

                } else {
                console.log("I did get it!");
                }

                rl.close();
                });


            
    }
}    

game(bernardo)


