import AuthModel from "../Models/Auth.model.js";
import bcrypt from 'bcrypt';

export const Register = async (req,res) => {
    try{
        const {name, email, password} = req.body;
        if(!name || !email || !password) return res.status(401).json({success:false, message:"All fields are mandatory"});
       
        const hashedPassword = await bcrypt.hash(password,10);

        const user = new AuthModel({
            name,
            email,
            password:hashedPassword
        })

        await user.save();

        return res.status(201).json({success:true, message:"user registered successfully", user: {name: user.name, email: user.email}})
    } catch(error){
        res.status(500).json({success:false, message: error.message})
    }
}

export const Login = async (req, res) => {
    const {email, password} = req.body;
    if(!email || !password) return res.status(401).json({success:false, message:"All fields are mandatory"});

    const user = await AuthModel.findOne({email:email});
    if(!user) return res.status(401).json({success:false, message:"User not found"});

    const isCorrectPassword = await bcrypt.compare(password, user.password);
    if(!isCorrectPassword) return res.status(401).json({success:false, message:"Incorrect password"});

    return res.status(200).json({success:true, message:"Login successfull", user:{name: user.name, email: user.email}});
}