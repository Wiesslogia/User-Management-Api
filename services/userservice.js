import { users } from '../data/users.js';

export const createUserService=(name,email)=>{
    // const { name, email } = req.body;
    const newUser={
        id: Date.now().toString(),  
        name:name,
        email
    }
    users.push(newUser);
    console.log (users);
    return true;
}