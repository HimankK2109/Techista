import jwt from "jsonwebtoken"

const authMiddleware = async(req, res, next) => {
    // we extract token from headers of req(it will only be available if user is logged in)
    const {token} = req.headers;
    // if we dont get token mtlb logout h to error bhej diya
    if(!token){
        return res.json({success:false,message:"Not Authorized Login Again"})
    }

    // yahan aagye mtlb token h aur user log in h
    try {
        // yahn p us token ko JWT se decode kr diya
        const token_decode = jwt.verify(token,process.env.JWT_SECRET);
        // aur fir req ki body m user ki id daal di(mongo wali) token se nikal ke bcz while creating token 
        // we passed user id mongo wali hi to wahi nikal li ab
        req.body.userId = token_decode.id;
        next();
    } catch (error) {
        // console.log(error)
        res.json({success:false,message:"Error"})
    }
}

export default authMiddleware;