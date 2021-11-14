const { R_OK } = require('constants');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let info = {};
rl.question(('What is your name?'), function(args1) {
  info.name = args1;
  rl.question(('What is an activity you like to do?'), function(args2) {
      info.activity = args2;
      rl.question(('What do you listen to whilst doing that?'), function(args3) {
          info.music = args3;
          rl.question(('Do you prefer breakfast, lunch or dinner?'), function(args4) {
            info.meal = args4;
            rl.question(('What is your favourite thing to eat for that meal?'), function(args5) {
                info.food = args5;
                rl.question(('Which sport is your absolute fave?'), function(args6) {
                    info.sport = args6;
                    rl.question(('What is your superpower? In a few words, tell us what you are amazing at!'), function(args7) {
                      info.superpower = args7;
                      console.log(`Hey there! My name is ${args1}, my favourite thing to do is ${args2}. I love to listen to ${args3} whilst i do it. ${args4} is my favoutire meal of the day, i usually have ${args5}. ${args6} is my favourite sport ever. I would say my best skill is ${args7}`);
                      rl.close();
                  })
                })
            })
          })
      })
  })
});