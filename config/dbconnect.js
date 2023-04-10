import mongoose from "mongoose";

// Mudar o cluster
mongoose.connect("mongodb+srv://berdfandrade:yGsAj1V6UVCddNov@cluster0.lkkxzsu.mongodb.net/bernardo-node").then(() => {
    console.log("DB connected!");
})
.catch((err) => {
    console.log(err);
});

let db = mongoose.connection;

export default db;