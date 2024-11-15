import mongoose from 'mongoose';

// Get all prices from DB
const getAllPrices = async(req, res) => {
    try {
        const collection = mongoose.connection.collection('products');
        
        // Query the collection
        const allPrices = await collection.find({}).toArray()
        res.status(200).json({ data: allPrices }); 
    } catch (error) {
        // console.error("Error fetching laptop prices data:", error);
        res.status(500).json({ error: "Failed to fetch laptop prices data" });
    }
}

export {
    getAllPrices
}