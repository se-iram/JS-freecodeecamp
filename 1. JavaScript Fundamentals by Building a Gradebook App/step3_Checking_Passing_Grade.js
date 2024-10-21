// Concepts:
// functions
// function call
// conditionals

// step 2 function used in step 3
function getGrade(score) {
    if(score === 100){
      return "A++"
    }
    else if(score>=90 & score<=99){
      return "A"
    }
    else if(score>=80 & score<=89){
      return "B"
    }
    else if(score>=70 & score<=79){
      return "C"
    }
    else if(score>=60 & score<=69){
      return "D"
    }
    else{
      return "F"
    }
  }

// step 3 function -- using step 2 (previous) function
function hasPassingGrade(score) {
    let grade = getGrade(score) //function call
    if(grade !== "F"){
      return true
    }
    else {
      return false
    }
  
  }
  
  console.log(hasPassingGrade(100));
  console.log(hasPassingGrade(53));
  console.log(hasPassingGrade(87));