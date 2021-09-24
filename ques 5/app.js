var readlineSync= require('readline-sync');

var name="";
var unitTest=0;
var preFinals=0;
var finals=0;
var total=0;
var highest=0;
var topper="";

for(var i=0;i<3;i++){
  name=readlineSync.question('\nMay I have your name ?');
  unitTest= readlineSync.question('Unit Test Marks: ');
  preFinals= readlineSync.question('Pre Final Marks: ');
  finals= readlineSync.question('Finals Marks: ');
  total= Number(unitTest)+Number(preFinals)+Number(finals);
  console.log("\nYour total score is "+total);
  console.log("Your average score is "+total/3);
  console.log("____________________________")


  if(total>highest){
    highest=total;
    topper= name;
  }
}

console.log("\n\nHighest marks is "+highest+" secured by "+topper)