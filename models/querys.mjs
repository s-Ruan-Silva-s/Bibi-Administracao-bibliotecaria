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
export function insertReader(name, role, email, callback){
    con.run(
        `INSERT INTO readers (name, role, email ) values (?,?,?)`,
        [name, role, email],
        function(err){
            if(callback){
                callback(err, this.lastID);
            }
        }
    )
}

