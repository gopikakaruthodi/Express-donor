async function getData(){
    let res=await fetch("http://localhost:3002/api/adddonor")
    console.log(res);
    
    // let donors=await res.json();
    // str=``
    // donors.map((donor)=>{
    //     // console.log(donor);
    //     str+=`
    //     <tr>
    //                     <td><input type="text"  name="name" disabled=true placeholder="Name" value="" id="name"></td>
    //                     <td><input type="text" name="gender" disabled=true placeholder="Gender" value="" id="gender"></td>
    //                     <td><input type="text" name="age" disabled=true placeholder="Age" value="" id="age">
    //                     <td><input type="text" name="dob" disabled=true placeholder="00-00-0000" value="" id="dob">
    //                     <td><input type="text" name="phone" disabled=true placeholder="Phone" value="" id="phone"></td>
    //                     <td><input type="text" name="place" disabled=true placeholder="place" value="" id="place">
    //                     <td><input type="text" name="Bgroup" disabled=true placeholder="Blood-Group" value="" id="Bgroup"></td>
    //                     </td>
    //                     <td> <a href="./pages/editDoner.html"><button class="edit-btn" >EDIT</button></a>
    //                         <button class="delete-btn"  >DELETE</button></td>

    //                 </tr>`
        
    // })
    // document.getElementById("details").innerHTML=str

}

getData()

