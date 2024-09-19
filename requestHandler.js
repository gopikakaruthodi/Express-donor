import donorSchema from "./donor.model.js"
export function addDonors(req,res){
        // const{name,gender,age,dob,phone,place,Bgroup}=req.body
        // console.log(name,gender);
        // console.log("hy");
        // res.send({msg:"hhhh"})
        

  
    try {
        console.log(req.body);
        const{name,gender,age,dob,phone,place,Bgroup}=req.body
    
        donorSchema.create({name,gender,age,dob,phone,place,Bgroup}).then((data)=>{
            res.status(201).send({msg:data})            
        }).catch((error)=>{
            res.status(404).send({msg:error})            

        })
        
    } catch (error) {
        res.status(404).send({msg:error})            

        
        
    }


    
}