import { users } from '../data/users.js';
import { createUserService } from '../services/userservice.js';

export const getUsers = (req, res) => {
    try {
        res.status(200).json({
            success: true,
            data: users
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}


export const createUser = (req, res) => {
    try {

        const { name, email } = req.body;
        
        createUserService(name,email);
        // const newUser={
        //     id: Date.now().toString(),
        //     // name,
        //     // email   
        //     ...req.body
        // }
    
        // users.push(newUser);
    
        res.status(201).json({
            success: true,
            data: {}
        });


    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }

}

export const updateUser = (req, res) => {
    try {
        const { id } = req.params;
        const { name, email } = req.body;   
        const user = users.find((u) => u.id === id);

        if(!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        if (name) user.name = name;
        if (email) user.email = email;
    
        res.status(200).json({
            success: true,
            data: user
        });

    }catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

export const deleteUser = (req, res) => {
    try {
        const {id}=req.params;
        const user=users.find((u)=>{u.id===id})

        if(!user){
            res.status(404).json({
                success:false,
                message: "User not found"
            });
        }

        const index=users.indexOf(user);
        users.splice(index,1);

        res.status(200).json({
            success:true,
            message:"User deleted successfully"
        })

    }catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

export const getUsersthatId=(req,res)=>{
    try {
        const {id}=req.body;
        const user = users.find((u)=>u.id===id);

        if(!user){
            return res.status(404).json({
                success:false,
                message:"User not found"
            });
        }
        res.status(200).json({
            success:true,
            data:user
        });
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        });
    }
}