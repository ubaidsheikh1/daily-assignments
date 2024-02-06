var score=prompt("What is your score out of 100?")

score=parseFloat(score);



if( score>80 || score===80 )
{
  console.log("Grade A");
}
else if(score>70 || score===70){
    console.log("Grade B");

}
else if(score>60 || score===60){
    console.log("Grade C");

}
else if(score>50 || score===50){
    console.log("Grade D");

}
else if(score<50 || score===40){
    console.log("Grade F");
}
else{
    console.log("invalid Grade");
}
