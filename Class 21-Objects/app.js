var studentObj = {
    name : "Mustafa",
    fatherName : "Shahzad",
    age : 15,
    rollNo : 10012 ,
    country : "Pakistan" , 
    city : "Karachi"

}
studentObj.arr = [1 , 2 ,3 ,4 , 5]



// delete studentObj.rollNo

// studentObj["name"] = `Shafay`
// studentObj["fatherName"] = `Shahzad`
// studentObj["age"] = 17
// studentObj["country"] = `U.S.A`
// studentObj["city"] = `Los Angeles`
// studentObj["rollNo"] = 10023
// studentObj["email"] = `shafayshahzad@gmail.com`

// studentObj.name = `Mahad`
// studentObj.fatherName = "Muhammad Shahzad"
// studentObj.age = 11
// studentObj.rollNo = 1002321
// studentObj.country = "Pakistan"
// studentObj.city = "Lahore"
// studentObj.email = "mahad@gmail.com"

// console.log("name" in studentObj)

for(var key in studentObj){
    // console.log(key);
    console.log(` ${key} : ${studentObj[key]} `);
    
}

console.log(studentObj);




var numbers = [100 , 73 , 71 , 90]

for(var val of numbers){
    console.log(val);
    
}