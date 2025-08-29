import express from "express";
import path from "path";
import url from "url";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename); 
const app = express();


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get('/', (req, res)=>{
    res.render("home", {title: "Bibi"});
});

app.use(express.static(path.join(__dirname, "public")));
app.listen(3000, ()=>console.log('server on!'))