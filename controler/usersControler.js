import * as userDAL from '../DAL/userDAL.js'
import bcrypt from "bcrypt"



export async function addUser(req, res) {
    try {
        const { username, password } = req.body;
        if (!username || !password) {
            return res.status(400).json({ success: false, message: "usernae and password are request" })
        }

        const exsist = await userDAL.selectUserByUsername(username)
        if (exsist) {
            return res.status(405).json({ success: false, message: "username alredy exsist" })
        }
        
        const hashedPassword = await bcrypt.hash(password,10)

        const newPlayer = await userDAL.addUserD({ username, password:hashedPassword, role: "user" })

        const {password:_,...playerHased} = newPlayer

        res.status(201).json({success:true,player:playerHased})

    }
    catch(error){
        res.status(500).json({success:false,message:error.message})
    }
 }


export async function loginUser(req, res) {
    try {
        const { username, password } = req.body
        const player = await userDAL.selectUserByUsername(username)

        if (!player) {
            return res.status(404).json({ success: false, messege: "user not found" })
        }
        const valid = await bcrypt.compare(password,player.password)
        if(!valid){
            return res.status(401).json({success:false,message:"invalid password"})
        }
        res.json({ success: true, username: player.username, role: player.role })
    }
    catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
}



export async function getUser(req, res) {
    try {
        const username = req.params.username
        const player = await userDAL.selectUserByUsername(username)
        res.json(player)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}
