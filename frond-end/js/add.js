document.getElementById("forms").addEventListener("submit",async(e)=>{
    e.preventDefault();
    console.log("hii");
    let name=document.getElementById("name").value
    let gender=document.getElementById("gender").value
    let age=document.getElementById("age").value
    let dob=document.getElementById("dob").value
    let phone=document.getElementById("phone").value
    let place=document.getElementById("place").value
    let Bgroup=document.getElementById("Bgroup").value
    console.log(name,gender,age,dob,phone,place,Bgroup);
    

    await fetch("http://localhost:3002/api/adddonor",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({name,gender,age,dob,phone,place,Bgroup}),
    }).then((res)=>{
        console.log(res);
        
        if(res.status==201){
            alert("Success")

        }
        else{
            alert("Failed")
        }
    }).catch((error)=>{
        console.log("jj");
        
        console.log(error);
        
    })
    
    
    

})