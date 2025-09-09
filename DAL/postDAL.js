import fs from "fs/promises"

const FILE_PATH = 'C:/Users/shmuel nabul/Desktop/linkodkod/server/DB/postes.txt'


export async function getAllPostesD() {
    const data = await fs.readFile(FILE_PATH, 'utf-8');
    return JSON.parse(data)
}

export async function addPostD(newPost) {
    const postes = await getAllPostesD();
    newPost.id = postes.length ? postes[postes.length - 1].id + 1 : 1;
    postes.push(newPost)
    await fs.writeFile(FILE_PATH, JSON.stringify(postes, null, 2));
}




export async function getPostById(Id) {    
    const data = await fs.readFile(FILE_PATH, 'utf-8');
    const respon = JSON.parse(data);

    const foundObject = respon.find(item => item.id === Number(Id));

    if (foundObject) {
        return foundObject; 
    } else {
        return null;
    }
}

