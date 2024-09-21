async function getData(){
    console.log("----------------");
    let res=await fetch("http://localhost:3002/api/getdonors")
    // console.log(res);
    if(res.status==200){
        const donors=await res.json();
        // console.log(donors.name);

        str=``
        donors.map((donor)=>{
            console.log(donor.name);
        str+=`<tr>
                        <td><div id="name">${donor.name}</div></td>
                        <td><div id="age">${donor.age}</div></td>
                        <td><div id="dob">${donor.dob}</div></td>
                        <td><div id="phone">${donor.phone}</div></td>
                        <td><div id="place">${donor.place}</div></td>
                        <td><div id="Bgroup">${donor.Bgroup}</div></td>
                        </td>
                        <td> <a href="./pages/editDoner.html?id=${donor._id}"><button class="edit-btn" >EDIT</button></a>
                            <button class="delete-btn"  >DELETE</button></td>

                    </tr>`
        
    })
    document.getElementById("main").innerHTML=str

    }
    
    
    
}

getData()

