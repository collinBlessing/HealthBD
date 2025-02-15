
 import express from "express";

import Users  from "../models/userModels.js";

const fetchAllUsers= async(req,res)=>{ 

const allusers=Users.find();

	res.send("Patients");

};

export default fetchAllUsers;


export const createUser  = async(req,res){

const {name,email,password} = req.body;

try{

if(!name){
return res.status(400).json({message:"username is required",});
}
if(!email){
return res.status(400).json({message:"email is required"});
}
if(! password){
return res.status(400).json({message:"password is required"});
}
 

const existingUser = await Users.findOne({email:email});
if(!existingUser){
return res.status(404).json({message:"user was not found"});
}

const newUser =  new Users({name,email,password});
await newUser.save();
res.status(201).json({message:"user created successfully",Users:newUser});
}
catch(error){
res.status(500).json({error:error.message});
}

};


export const updateUser = async(req,res) =>{

const {name,email,password} = req.body;

const {Id}  = req.param;

const{name,email,password}=req.body;

try{

const gotUser =  await Users.findById(id);
if(!gotUser){
return res.status(404).json({message:"user not found",Users:existingUser});

if(name) Users.name = name;
if(email)Users.email=email;
if(password)Users.password=password;

await gotUser.save();
res.status(200).json({message:"user updated  successfully",Users:gotUser});

}

}
catch(error){
res.status(500).json({message:error:error});

}

};

export const deleteUser = async(req,res)=>{

const {Id} = req.param;

const {name,email,password} = req.body;

try{

const wantedUser = await Users.findById(Id);

if(!wantedUser){
return res.status(404).json({message:"user not found"});

await wantedUser.delete();

res.status(200).json({message:"user deleted successfully"});
}


}
catch(error){
res.status(500).json({error:error.message});
}

};

