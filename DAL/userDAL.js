import fs from "fs/promises"

const FILE_PATH="C:/Users/shmuel nabul/Desktop/linkodkod/server/DB/users.txt"

export async function getAllUsersD() {
    const data = await fs.readFile(FILE_PATH, 'utf-8');
    return JSON.parse(data)
}



export async function addUserD(newUser) {
    const users = await getAllUsersD();
    newUser.id = users.length ? users[users.length - 1].id + 1 : 1;
    users.push(newUser)
    await fs.writeFile(FILE_PATH, JSON.stringify(users, null, 2));
}

// export async function getPostById(Id) {    
//     const data = await fs.readFile(FILE_PATH, 'utf-8');
//     const respon = JSON.parse(data);
//     const foundObject = respon.find(item => item.id === Number(Id));

//     if (foundObject) {
//         return foundObject; 
//     } else {
//         return null;
//     }
// }