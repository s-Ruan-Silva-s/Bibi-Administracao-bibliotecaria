import con from "../config/conDB.mjs"

export function insertBook(title, author, category, quantity, callback){
    con.run(
        `INSERT INTO books (title, author, category, quantity) values (?,?,?,?)`,
        [title, author, category, quantity],
        function(err){
            if(callback){
                callback(err, this.lastID);
            }
        }
    )
}
