import { createUserSchema, updateUserSchema } from "../dtos/user.zod.js";

export const checkAuth=(req,res,next)=>{
    // console.log("Auth checked");
    // next();]
    const body= req.body;
    // const body= req.;
    console.log(body)
    const head=req.headers
    console.log("req.headers")
    console.log(head)


    const success = true;
    if(success){
        console.log("auth checked");
        next()
    }else{
        console.log("auth failed");
        return res.status(400).json({
            "message":"failed auth"

        })
        
    }

}

export const validateUserId = (req,res,next)=>{
    const {id}=req.params;
    const {name,email}=req.body;
    if (!id || isNaN(id) || id.length<5){
        return res.status(400).json({
            id:id,
            success:false,
            message : "invalid user ID"
        });
    }
    return res.status(200).json({
        name:name,
        email:email,
        success:true,
        message : "valid user ID"
    });
    next();
}

// export const getUserById = (req,res,next)=>{
//     const {id}=req.body;
//     // const user = users.find((u)=>u.id===id);

//     if(!user){
//         return res.status(404).json({
//             success:false,
//             message:"User not found"
//         });
//     }
//     app.send();
//     next();
// }

export const tokenAuth = (req,res,next)=>{
    // const token = req.headers;
    // if(!token){
    //     return res.status(401).json({
    //         success:false,
    //         message:"No token provided"
    //     });
    // }
    
    const {token} = req.headers;
    console.log("Token received:", token);
    if(!token){
        return res.status(401).json({
            success:false,  
            message:"No token provided"
        });
    }
    if(token !== "mysecrettoken"){
        return res.status(403).json({
            success:false,
            message:"Invalid token"
        });
    }
    next();
}


// export const validateZod=(schema)=>(req,res,next)=>{
//     const result=schema.safeParse(req.body);
//     if (result.success){
//         next();
//     }else{
//         return res.status(400).json({
//             message: "auth failed"
//         })
//     }
// }

export const validateZod = (schema) => (req, res, next) => {
  const result = schema.safeParse(req.body);
  console.log("result errors",result)
  if (!result.success) {
    return res.status(400).json({
      success: false,
      errors: result.error.message
    });
  }

  req.body = result.data; // sanitized data
  next();
};