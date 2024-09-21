const url=window.location.href
console.log(url);
const urlParams=new URLSearchParams(url.split("?")[1])
console.log(urlParams);
const id=urlParams.get("id");
console.log(id);

async function getDonor(){
    const res=await fetch(`http://localhost:3002/api/getdonor/${id}`);
    console.log(res);
    const donors=await res.json()
    console.log(donors);
    document.getElementById("forms").innerHTML=`<table>
                <tr>
                        <td> <label for="name">Name</label></td>
                        <td class="input" ><input type="text" name="name" id="name" value="${donors.name}" placeholder="Dona"></td>
                </tr>
                <tr>
                    <td> <label for="age">Age</label></td>
                    <td class="input" ><input type="number" name="age" id="age" value="${donors.age}"></td>
                </tr> 
                    <td><label for="dob">Date Of Birth</label></td>
                    <td class="input"><input type="date" name="dob" id="dob" placeholder="00-00-0000" value="${donors.dob}"></td>
                </tr>
                <tr>
                        <td><label for="phone">Phone</label></td>
                        <td class="input"><input type="text" name="phone" id="phone" placeholder="999-999-9999" value="${donors.phone}"></td>
                </tr>
                <tr>
                    <td><label for="place">Place</label></td>
                    <td class="input"><input type="text" name="place" id="place" placeholder="place" value="${donors.place}"></td>
                </tr>
                
                <tr>
                        <td><label for="Bgroup">Blood Group</label></td>
                        <td class="input">
                            <select name="Bgroup" id="Bgroup" disabled="true">
                                <option>${donors.Bgroup}</option>
                                <option value="O+">O+</option>
                                <option value="O-">O-</option>
                                <option value="A+">A+</option>
                                <option value="A-">A-</option>
                                <option value="B+">B+</option>
                                <option value="B-">B-</option>
                                <option value="AB+">AB+</option>
                                <option value="AB-">AB-</option>
                            </select>
                        </td>
                </tr>
           
                <tr>
                    <td><input type="submit" value="Add" class="button"></td>                
                </tr>
            </table>`
}
getDonor()