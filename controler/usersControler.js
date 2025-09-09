import { getAllUsersD ,addUserD} from "../DAL/userDAL.js";
import bcrypt from "bcrypt"

export async function getAllUsers(req, res) {
    try {
        const users = await getAllUsersD();
        res.json({ success: true, users });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

export async function addUser(req, res) {
    try {
        const { username, password } = req.body;
        if (!username || !password) {
            return res.status(400).json({ success: false, message: "usernae and password are request" })
        }

        // const exsist = await playerDal.selectPlayerByUsername(username)
        // if (exsist) {
        //     return res.status(405).json({ success: false, message: "username alredy exsist" })
        // }
        
        const hashedPassword = await bcrypt.hash(password,10)

        const newUser = await addUserD({ username, password:hashedPassword})

        const {password:_,...userHased} = newUser

        res.status(201).json({success:true,user:userHased})

    }
    catch(error){
        res.status(500).json({success:false,message:error.message})
    }
 }