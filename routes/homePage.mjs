import express from "express"
import path from "path";
import url from "url";

const homePage = express.Router();
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

homePage.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, "../views/homePage.html"))
})

export default homePage;