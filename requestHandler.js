import donorSchema from "./donor.model.js"
export async function addDonors(req,res){
        // const{name,age,dob,phone,place,Bgroup}=req.body
        // console.log(name);
        // console.log("hy");
        // res.send({msg:"hhhh"})
        

  
    try {
        // console.log(req.body);
        const{name,age,dob,phone,place,Bgroup}=req.body
        console.log("---------------");
        
        console.log(name,age,dob,phone,place,Bgroup);

        // Validation
        if(!(name&&age&&dob&&phone&&place&&Bgroup)){
            return res.status(404).send({msg:"Fields Are Empty"})
        }
        // if Phone number already exist

        let checkPhn=await donorSchema.findOne({phone})
        // console.log(checkPhn);
        
        if(!checkPhn){
            donorSchema.create({name,age,dob,phone,place,Bgroup}).then((data)=>{
                res.status(201).send({msg:data})            
            }).catch((error)=>{
                res.status(404).send({msg:error})            
    
            })

        }
        else{
            res.status(404).send({msg:"Phone Number Already Exist"})    

        }  
        
    } catch (error) {
        res.status(404).send({msg:error})            

        
        
    }


    
}

export async function getDonors(req,res){
    try {
        const donors=await donorSchema.find();
        console.log(donors);
        res.status(200).send(donors)
        
    } catch (error) {
        res.status(404).send({msg:error})
        
    }

}