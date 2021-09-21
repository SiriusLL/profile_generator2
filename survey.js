const readline = require("readline");
// console.log("rl", readline);
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
console.log("process", process.cpuUsage);

rl.question("What is your name? ", (answer1) => {
  rl.question("what is an activity you like doing?", (answer2) => {
    rl.question("What do you listen to while doing that?", (answer3) => {
      rl.question(
        "Which meal is your favourite thing to eat for that meal?",
        (answer4) => {
          rl.question("Which sport is your absolute favourite?", (answer5) => {
            rl.question(
              "What is your superpower? In a few words tell us what you are amazing at!",
              (answer6) => {
                console.log(
                  `My name is ${answer1} and I like ${answer2}. I will listen to ${answer3} while doing this.  I love eating ${answer4} and playing ${answer5}.  My superPower is ${answer6}, and I am very strong!!!`
                );
                rl.close();
              }
            );
          });
        }
      );
    });
  });
});
