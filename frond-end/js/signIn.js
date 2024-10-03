document.getElementById("forms").addEventListener("submit",async(e)=>{
    e.preventDefault();
    const email=document.getElementById("email").value
    const password=document.getElementById("password").value

    console.log(email,password);
    await fetch("http://localhost:3002/api/signin",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({email,password})
    }).then(async(res)=>{
        // console.log(res);
        
        const data=await res.json()
        if(res.status==200){
            // console.log(data.token);
            localStorage.setItem("Token",data.token)
            alert(data.msg)
            window.location.href="../index.html"
        }
        else{
            alert(data.msg)
        }
    }).catch((error)=>{
        console.log(error);
        
    })


})