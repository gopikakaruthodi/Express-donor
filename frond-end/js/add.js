function validatePhone(phone){
    // console.log(phone);
    let regEx=/^[6-9]\d{2}\d{3}\d{4}/
    console.log(regEx.test(phone));
    
    if ((regEx.test(phone))){
        document.getElementById("phn").textContent=""
    }
    else{
        document.getElementById("phn").textContent="Phone Number Is Invalid"
        document.getElementById("phn").style.color="red"
        document.getElementById("phn").style.fontSize=13+"px"



    }



}

function validateAge(age){
    let regEx=/^[2-7][0-9]|[1][8-9]/
    if (!(regEx.test(age))){
        document.getElementById("ageV").textContent="Not Eligible"
        document.getElementById("ageV").style.color="red"
        document.getElementById("ageV").style.fontSize=13+"px"

    }
    else{
        document.getElementById("ageV").textContent=""

    }
}
function validateName(name){
    let regEx=/^[A-Z,a-z]{3,}/
    if (!(regEx.test(name))){
        document.getElementById("nameV").textContent="Invalid"
        document.getElementById("nameV").style.color="red"
        document.getElementById("nameV").style.fontSize=13+"px"
    }
    else{
        document.getElementById("nameV").textContent=""


    }

}
function validatePlace(place){
    let regEx=/^[A-Z,a-z]{3,}/
    if (!(regEx.test(place))){
        document.getElementById("placeV").textContent="Invalid"
        document.getElementById("placeV").style.color="red"
        document.getElementById("placeV").style.fontSize=13+"px"

    }
    else{
       document.getElementById("placeV").textContent=""

    }
}
function validateDOB(dob){
    let regEx=/^([0][1-9]|[1-2]\d|[3][1-2])-([0][1-9]|[1][0-2])-([1][9]\d{2}|[2][0][1-2][1-4])/
    if (!(regEx.test(dob))){
        document.getElementById("dobV").textContent="Eligible"
        document.getElementById("dobV").style.color="red"
        document.getElementById("dobV").style.fontSize=13+"px"

    }
    else{
        document.getElementById("dobV").textContent=""
      

    }
}















document.getElementById("forms").addEventListener("submit",async(e)=>{
    e.preventDefault();
    // console.log("hii");
    let name=document.getElementById("name").value
    let age=document.getElementById("age").value
    let dob=document.getElementById("dob").value
    let phone=document.getElementById("phone").value
    let place=document.getElementById("place").value
    let Bgroup=document.getElementById("Bgroup").value
    console.log(name,age,dob,phone,place,Bgroup);
    

    await fetch("http://localhost:3002/api/adddonor",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({name,age,dob,phone,place,Bgroup}),
    }).then((res)=>{
        console.log(res);
        
        if(res.status==201){
            alert("Success")
            window.location.href="../index.html"

        }
        else{
            alert("Failed")
        }
    }).catch((error)=>{
        
        console.log(error);
        
    })
    
    
    

})