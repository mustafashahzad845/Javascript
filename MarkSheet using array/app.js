var subjectMarks = [+prompt("Enter Physics Marks") , +prompt("Enter Chemistry Marks") , +prompt("ENter Bio Marks")]
var obatinedMarks = Math.round(subjectMarks[0] + subjectMarks[1] + subjectMarks[2])
var totalMarks = 300;
var percentage = Math.round((obatinedMarks / totalMarks) * 100)

console.log("Obtained Marks" , obatinedMarks);
console.log("totalMarks" , totalMarks);
console.log("percentage: " + percentage + "%");


if(percentage >= 80 && percentage <= 100){
console.log("Grade A+")
}else if(percentage < 80 && percentage >=70){
console.log("Grade A");

}else if(percentage < 70 && percentage >= 60){
    console.log("Grade B");
    
}else if(percentage<60 && percentage >= 50){
        console.log("Grade C");

}else if(percentage < 50 && percentage >= 40){
    console.log("Grade D");
    
}else if(percentage < 40){
    console.log("Grade F");
    
}else{
    console.log("Invalid Percentage");
    
}