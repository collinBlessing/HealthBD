import express from "express";

import fetchAllUsers from "../controllers/userControllers.js";

const userRouter = express.Router();

userRouter.get("/",fetchAllUsers);

userRouter.get("/login",(req,res)=>{
	res.send("login");

});

userRouter.get("/register",(req,res)=>{

	res.send("register");

});

export default userRouter;

