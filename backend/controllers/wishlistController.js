import userModel from '../models/userModel.js'

// wishlist items
const addtoWishlist = async(req, res) => {
    try {
        let userData = await userModel.findById(req.body.userId);
        let wishlistData = await userData.wishlistData;
        if(!wishlistData[req.body.serialNumber]){
            wishlistData[req.body.serialNumber] = true;
        }
        await userModel.findByIdAndUpdate(req.body.userId,{wishlistData})
        return res.json({success: true, message:"Added to Wishlist"})
    } catch (error) {
        // console.log(error)
        return res.json({success:false, message:"Error"})
    }
}

// unwishlist items
const removefromWishlist = async(req, res) => {
    try {
        let userData = await userModel.findById(req.body.userId)
        let wishlistData = await userData.wishlistData;
        if(wishlistData[req.body.serialNumber]){
            // Remove the item from the wishlist
            delete wishlistData[req.body.serialNumber];
        }
        await userModel.findByIdAndUpdate(req.body.userId,{wishlistData})
        return res.json({success: true, message:"Unwishlisted the Product"})
    } catch (error) {
        // console.log(error)
        return res.json({success:false, message:"Error"}) 
    }
}

// fetch user wishlist
const getWishlist = async (req, res) => {
    try {
        let userData = await userModel.findById(req.body.userId)
        let wishlistData = userData.wishlistData;
        res.json({success:true, wishlistData})
    } catch (error) {
        // console.log(error)
        return res.json({success:false, message:"Error"})
    }
}

export {
    addtoWishlist,
    removefromWishlist,
    getWishlist
}