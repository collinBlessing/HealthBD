import express from "express";

import users  from "../models/userModels.js";

const fetchAllUsers= async(req,res)=>{ 

const users=Users.find();

	res.send("users");

};

export default fetchAllUsers;
