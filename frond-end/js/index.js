let donors
let Token=localStorage.getItem("Token")
console.log(Token);
Token?document.getElementById("check").innerHTML=`<span id="username"></span>
                <a href="./pages/addDoners.html"><button class="add-btn">ADD</button></a>
                <button class="add-btn" onclick="signOut()">sign Out</button>`:document.getElementById("check").innerHTML=
                `<a href="./pages/signup.html"><button class="add-btn">signup</button></a>`

async function getData(){
    // console.log("----------------");
    let res=await fetch("http://localhost:3002/api/getdonors",{headers
        :{"authorization":`Bearer ${Token}`}
    })
    console.log(res);
    donors=await res.json();
    if(res.status==200){
        console.log(donors);
        str=``
        donors.donors.map((donor)=>{
            console.log(donor.name);
        document.getElementById("username").innerText=donors.user

        str+=`<tr>
                        <td><div id="name">${donor.name}</div></td>
                        <td><div id="age">${donor.age}</div></td>
                        <td><div id="dob">${donor.dob}</div></td>
                        <td><div id="phone">${donor.phone}</div></td>
                        <td><div id="place">${donor.place}</div></td>
                        <td><div id="Bgroup">${donor.Bgroup}</div></td>
                        </td>
                        <td> <a href="./pages/editDoner.html?id=${donor._id}"><button class="edit-btn" >EDIT</button></a>
                            <button class="delete-btn"  id="dlt" onclick="deleteDonor('${donor._id}')">DELETE</button></td>

                    </tr>`
        
    })
    document.getElementById("main").innerHTML=str

    }
    else{
        alert(donors.msg)
    }
    
    
    
}

getData()

// Delete

async function deleteDonor(id){
    console.log(id); 
    if(confirm("Do You Want To Delete The Employee?")){
        const res=await fetch(`http://localhost:3002/api/deletedonor/${id}`,{
            method:"DELETE"
        })

        if(res.status==200){
            let data=await res.json()
            alert(data.msg)
            getData()
    
        }
        else{
            alert("Failed To Delete");
        }
    }  
}



// Search

document.getElementById("search").addEventListener("keyup",(e)=>{
    console.log(e.target.value);
    // console.log(donors);
    let fData=donors.filter((donor)=>donor.Bgroup.toLowerCase().startsWith(e.target.value.toLowerCase()));
    str=``

    fData.map((donor)=>{
        str+=`      <tr>
                        <td><div id="name">${donor.name}</div></td>
                        <td><div id="age">${donor.age}</div></td>
                        <td><div id="dob">${donor.dob}</div></td>
                        <td><div id="phone">${donor.phone}</div></td>
                        <td><div id="place">${donor.place}</div></td>
                        <td><div id="Bgroup">${donor.Bgroup}</div></td>
                        </td>
                        <td> <a href="./pages/editDoner.html?id=${donor._id}"><button class="edit-btn" >EDIT</button></a>
                            <button class="delete-btn"  id="dlt" onclick="deleteDonor('${donor._id}')">DELETE</button></td>

                    </tr>`

    })
    document.getElementById("main").innerHTML=str  

    
})

function signOut(){
    localStorage.removeItem("Token")

}
