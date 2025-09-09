import { insertBook, insertReader } from "../models/querys.mjs";


export function registerBook(req, res){
    const {title, author, category, quantity} = req.body;
    insertBook(title,author, category, quantity, (err, id)=>{
        if(err){
            res.send("error: " + err.message);
        }else{
            res.send("book successfully registered, id:" + id);
        }
    })
}
export function registerReader(req, res){
    const {name, role, email} = req.body;
    insertReader(name,role, email, (err, id)=>{
        if(err){
            res.send("error: " + err.message);
        }else{
            res.send("reader successfully registered, id:" + id);
        }
    })
}