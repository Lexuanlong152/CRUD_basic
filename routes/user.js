import express from "express";
import {v4 as uuidv4} from "uuid";
let User = [];

const router = express.Router();

router.get("/",(req,res)=>{
    res.send(User);
})

router.post("/",(req,res)=>{
    const addUser =req.body;
    const useId = uuidv4();
    const userWithId = {...addUser,id: useId}
    User.push(userWithId);
    res.send(`User with the ame name ${addUser.firstName} added in db`);
})

router.get("/:id",(req,res)=>{
    const {id} = req.params;
    const findUser = User.find((user)=>user.id===id)
    res.send(findUser);
})

router.delete("/:id",(req,res)=>{
    const {id} = req.params;
    User = User.filter((user)=>user.id !== id);
    res.send(`User with id ${id} is removed from database`);
})

router.patch("/:id",(req,res)=>{
    const {id} = req.params;
    const {firstName,lastName,age}= req.body;
    const user = User.find((user)=> user.id===id)
    if(firstName) user.firstName=firstName;
    if(lastName) user.lastName=lastName;
    if(age) user.age=age;
    res.send(`User with id ${id} has been update`)
    res.send(user);
})

export default router;