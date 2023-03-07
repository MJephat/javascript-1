let score = prompt();
let grade;

if(score>79){
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
else{
    grade="E";
}

console.log("your grade is " + grade)