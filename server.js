import app from "./app.js"
import dotenv from "dotenv"
import connectDB from "./config/db.js"

dotenv.config();

connectDB()

const PORT=process.env.PORT


app.listen(PORT,()=>{
  console.log(`server is running on the port ${PORT}`);
});