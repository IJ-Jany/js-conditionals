 let myScore = 89;
 let friendScore = 70;

if(myScore > 80){
    if(friendScore > 80){
        console.log("go for lunch")
    }else if(friendScore < 80 && friendScore >= 60){
        console.log(" good luck next time")
    } else if(friendScore < 60 && friendScore >= 40){
        console.log("message unseen")
    }
  else{
  console.log("block him")
  }
    
}else{
 console.log("go to home and sleep and act sad")
}