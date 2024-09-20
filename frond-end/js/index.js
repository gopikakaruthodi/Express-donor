async function getData(){
    let res=await fetch("http://localhost:3002/api/getdonors")
    // console.log(res);
    if(res.status==200){
        const donors=await res.json();
        // console.log(donors.name);

        str=``
        donors.map((donor)=>{
            console.log(donor.name);
        str+=`
        <tr>
                        <td><input type="text"  name="name" disabled=true placeholder="Name" value="${donor.name}" id="name"></td>
                        <td><input type="text" name="gender" disabled=true placeholder="Gender" value="${donor.gender}" id="gender"></td>
                        <td><input type="text" name="age" disabled=true placeholder="Age" value="${donor.age}" id="age">
                        <td><input type="text" name="dob" disabled=true placeholder="00-00-0000" value="${donor.dob}" id="dob">
                        <td><input type="text" name="phone" disabled=true placeholder="Phone" value="${donor.phone}" id="phone"></td>
                        <td><input type="text" name="place" disabled=true placeholder="place" value="${donor.place}" id="place">
                        <td><input type="text" name="Bgroup" disabled=true placeholder="Blood-Group" value="${donor.Bgroup}" id="Bgroup"></td>
                        </td>
                        <td> <a href="./pages/editDoner.html"><button class="edit-btn" >EDIT</button></a>
                            <button class="delete-btn"  >DELETE</button></td>

                    </tr>`
        
    })
    document.getElementById("main").innerHTML=str

    }
    
    
    
}

getData()

