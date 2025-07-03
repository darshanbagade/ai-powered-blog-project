import jwt from 'jsonwebtoken'

export const adminController = async (req, res) => {
    try {
        const { email, password } = req.body;

        if(!email || !password){
            return res.json({success : failed, message: "Invalid Credentials"})
        }

        if(email === process.env.ADMIN_EMAIL &&  password === process.env.ADMIN_PASSWORD){
            const token = jwt.sign({email}, process.env.JWT_SECRET)
            return res.json({success: true , token})
        }

    } catch (error) {
        res.json({success : false , message : "Login failed" } )
    }
}