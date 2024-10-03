import { error } from "console";
import donorSchema from "./models/donor.model.js"
import userSchema from "./models/user.model.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
const {sign}=jwt

export async function addDonors(req,res){
    try {
        // console.log(req.body);
        const{name,age,dob,phone,place,Bgroup}=req.body        
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
            res.status(400).send({msg:"Phone Number Already Exist"})

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

// get donor

export async function getDonor(req,res){
    try {
        console.log(req.params);
        const _id=req.params;
        const data=await donorSchema.findOne({_id})
        res.status(200).send(data);
        
    } catch (error) {
        res.status(404).send(error);
        
    }
}

// Update data

export async function updateDonor(req,res) {
    try {
        // console.log(req.params);
        // console.log(req.body);
        const _id=req.params;
        const {name,age,dob,phone,place,Bgroup}=req.body
        if(!(name&&age&&dob&&phone&&place&&Bgroup)){
            return res.status(404).send({msg:"Fields Are Empty"})
        }
        
        donorSchema.updateOne({_id},{$set:{name,age,dob,phone,place,Bgroup}}).then(()=>{  
            console.log(req.body);         
            res.status(201).send({msg:"Successfully Updated"})

        }).catch((error)=>{
            res.status(404).send(error)
        })
        
    } catch (error) {
        console.log(error);
    }
}

// delete data

export async function deleteDonor(req,res) {
    try {
        const _id=req.params
        console.log(_id);
        donorSchema.deleteOne({_id}).then(()=>{
            res.status(200).send({msg:"Deleted"})
        }).catch((error)=>{
            console.log(error);
        })
    } catch (error) {
        console.log(error); 
    }
}

// user authentification
export async function signUp(req,res) {
    console.log(req.body);
    const{username,email,password,cpassword}=req.body
    if(!(username&&email&&password&&cpassword))
        return res.status(404).send({msg:"Fields empty"})
    const userEmail=await userSchema.findOne({email})
    if(userEmail)
        return res.status(404).send({msg:"Email already exist"})
    if(password!=cpassword)
        return res.status(404).send({msg:"Password mismatch"})
    bcrypt.hash(password,10).then(async(hashedPassword)=>{
        console.log(hashedPassword);
        await userSchema.create({username,email,password:hashedPassword}).then(()=>{
            res.status(201).send({msg:"Successfully Registered"})
        }).catch((error)=>{
            res.status(404).send({msg:error})
        })

    }).catch((error)=>{
        return res.status(404).send({msg:error})
    })
    

           
    
}
// sign in
export async function signIn(req,res) {
    try {
        // console.log(req.body);
    
        const {email,password}=req.body    
        if(!(email&&password))
            return res.status(404).send({msg:"Fields empty"})
        const user=await userSchema.findOne({email})
        if(!user)
            return res.status(404).send({msg:"Invalid Email"})
        const success=await bcrypt.compare(password,user.password)
        if(success!=true)
            return res.status(404).send({msg:"Invalid Password"})
        const token=await sign({userId:user._id},process.env.JWT_KEY,{expiresIn:"24h"})
        // console.log(token);
        res.status(200).send({msg:"Successfully logged in",token})
        


    } catch (error) {
        console.log(error);
        
        
    }
    

    
}