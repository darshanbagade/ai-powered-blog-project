import jwt from 'jsonwebtoken'

export const auth = (req, res, next) => {
    try {
        const token = req.headers.authorization;
        if (!token) {
            return res.json({success: false, message: "No token provided"})
        }
        
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decoded; // Add user info to request
        next();
        
    } catch (error) {
        res.json({success: false, message: "Invalid Token"})
    }
}