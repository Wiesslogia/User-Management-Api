import User  from '../models/users.js';
import { createUserService, getUsersService, getUsersServiceisActive,upardateUserService,updatebymailService, deletebymail} from '../services/userservice.js';


export const deleteUser = async (req, res) => {
    try {
        const {email}=req.body;
        const user=await deletebymail(email)    
        if(!user){
            return res.status(404).json({
                success:false,
                message: "User not found"
            });
        }
        res.status(200).json({
            success:true,
            data:user
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

export const updateUserbyemail = async (req,res)=>{
    try{
        const {email,updateUser}=req.body;
        // const data=req.body;
        const updatedUser=await updatebymailService(email,updateUser);
        res.status(200).json({
            success:true,
            data:updatedUser
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

export const getUsers = async (req, res) => {
    try {
        const udata=await getUsersService()
        res.status(200).json({
            success: true,
            data: udata
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}
export const activeusers = async (req, res) => {
    try {
        const udata=await getUsersServiceisActive()
        res.status(200).json({
            success: true,
            data: udata
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

export const updateUser = async (req,res)=>{
    try{
        const {id}=req.params;
        const data=req.body;
        const updatedUser=await upardateUserService(id,data);
        res.status(200).json({
            success:true,
            data:updatedUser
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

export const createUser = async(req, res) => {
    try {

        // const { name, email,password,role, } = req.body;
        
        const userdata=await createUserService(req.body);
        // const newUser={
        //     id: Date.now().toString(),
        //     // name,

        //     // email   
        //     ...req.body
        // }
    
        // users.push(newUser);


    
        res.status(201).json({
            success: true,
            data: userdata
        });


    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }

}

// export const updateUser = (req, res) => {
//     try {
//         const { id } = req.params;
//         const { name, email } = req.body;   
//         const user = users.find((u) => u.id === id);

//         if(!user) {
//             return res.status(404).json({
//                 success: false,
//                 message: "User not found"
//             });
//         }

//         if (name) user.name = name;
//         if (email) user.email = email;
    
//         res.status(200).json({
//             success: true,
//             data: user
//         });

//     }catch (error) {
//         res.status(500).json({
//             success: false,
//             message: error.message
//         });
//     }
// }

// export const deleteUser = (req, res) => {
//     try {
//         const {id}=req.params;
//         const user=users.find((u)=>{u.id===id})

//         if(!user){
//             res.status(404).json({
//                 success:false,
//                 message: "User not found"
//             });
//         }

//         const index=users.indexOf(user);
//         users.splice(index,1);

//         res.status(200).json({
//             success:true,
//             message:"User deleted successfully"
//         })

//     }catch (error) {
//         res.status(500).json({
//             success: false,
//             message: error.message
//         })
//     }
// }

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


