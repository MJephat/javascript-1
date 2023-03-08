let score = prompt();
let grade;

if(score>79 && score<100){
    grade= "A";
}
else if(score>69 && score<80){
    grade="B";
}
else if(score>59 && score<70){
    grade="c";
}
else if(score>49 && score<60){
    grade="D";
}
else if (score<49 && score>0){
    grade="E";
}
else{
    grade="invalid";
}

console.log("your grade is " + grade)