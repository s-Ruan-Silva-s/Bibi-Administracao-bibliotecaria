import express from "express";
import path from "path";
import url from "url";

//routes
import homepage from "./routes/homePage.mjs"
import con from "./config/conDB.mjs"
import db from "./routes/db.mjs";
// --------------------
const app = express();
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended:true}));
app.use("/", homepage);
app.use("/books", db)

app.listen(3000, console.log("server ligado!"));