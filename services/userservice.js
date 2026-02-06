// import { users } from '../data/users.js';
import { email } from 'zod';
import User from '../models/users.js'


export const createUserService=async(body)=>{
    // // const { name, email } = req.body;
    // const newUser={
    //     id: Date.now().toString(),  
    //     name:name,
    //     email
    // }
    const newUser = await User.create({
        ...body
    })

    // User.push(newUser);
    console.log (newUser);
    return newUser;
}


export const getUsersService = async()=>{
    const users = await User.find().sort({name:1})
    return users
}
export const getUsersServiceisActive = async()=>{
    const users = await User.find({isActive: true}).limit(5).skip(5)
    return users
}


export const upardateUserService = async(id,data)=>{
    const user = await User.findByIdAndUpdate(id,{$set:data},{
        new:true,
        runValidators:true
    })
    return user;
}

export const updatebymailService = async(email,data)=>{
    const user = await User.findOneAndUpdate({email:email},{$set:data},{
        new:true,
        runValidators:true
    })
    return user;


}


export const deletebymail= async(email)=>{
    const user = await User.findOneAndDelete({email:email})
    return user;
}   