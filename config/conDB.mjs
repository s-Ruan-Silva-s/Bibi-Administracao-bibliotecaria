import sql from "sqlite3";
import path from "path";
import url from "url";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dbPath = path.join(__dirname, "../database/database.db");
const con = new sql.Database(dbPath, (err)=>{
    if(err){
        console.log("erro de conexão", err.message);
    }else{
        console.log("banco conectado.")
    }
})

export default con;