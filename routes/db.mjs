import express from "express"
import path from "path";
import url from "url";
import { registerBook } from "../controllers/dbController.mjs";

const db = express.Router();
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

db.post("/registerBook", registerBook)

export default db;