import mongoose from "mongoose";

// Mudar o cluster
mongoose.connect("mongodb+srv://berdfandrade:yGsAj1V6UVCddNov@cluster0.lkkxzsu.mongodb.net/bernardo-node");

let db = mongoose.connection;

export default db;