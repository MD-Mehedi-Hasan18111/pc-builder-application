// pages/api/getData.js
import dbConnect from "../dbConnect";

export default async function getProducts(req, res) {
  try {
    const dbCollection = await dbConnect();

    // Your MongoDB query here
    const query = {
      /* your query object */
    };
    const products = await dbCollection.find(query).toArray();

    res.send({message: "success", status: 200, data: products});
  } catch (error) {
    res.status(500).json({error: "Error fetching data from MongoDB"});
  }
}
