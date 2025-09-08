import * as postDAL from '../DAL/postDAL.js';

// get all the riddles
export async function getAllPostes(req, res) {
    try {
        const postes = await postDAL.getAllPostesD();
        res.json({ success: true, postes });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}


export async function addPost(req, res) {
    try {
        const { img, description, like, username, time } = req.body

        if (!img || !description || !like || !username || !time) {
            return res.status(400).json({ success: false, message: "all fields are required" });
        }
        const id = await postDAL.addPostD({ img, description, like, username, time })
        res.status(200).json({ success: true, postes: { _id: id, img, description, like, username, time } })
    }
    catch (err) {
        res.status(500).json({ success: false, message: err.message })
    }
}

// export async function getPostById(req,res){
//     try{
        
//     }
// }