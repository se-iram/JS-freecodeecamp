function studentMsg(totalScores, studentScore) {
    if(hasPassingGrade(studentScore)){
      return"Class average: "+getAverage(totalScores)+". Your grade: "+getGrade(studentScore)+". You passed the course."
    }
    else{
      return "Class average: "+getAverage(totalScores)+". Your grade: "+getGrade(studentScore)+". You failed the course."
    }
  }
  console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));