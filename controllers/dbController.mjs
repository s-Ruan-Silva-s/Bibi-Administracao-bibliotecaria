import { insertBook } from "../models/querys.mjs";


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