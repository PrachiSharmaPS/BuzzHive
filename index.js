import bodyParser from "body-parser";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import path from "path";
import morgan from "morgan";
import helmet from "helmet";
import { fileURLToPath } from "url"; // inbuilt


/*configure*/

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const __filename = fileURLToPath(import.meta.url);
dotenv.config();
const app = express();
app.use(morgan("common"));
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy :"cross-origin"}))
app.use(cors());
app.use(bodyParser.json({limit : "40mb", extended : true}));
app.use(bodyParser.urlencoded({limit : "40mb", extended : true}));
app.use("/assets", express.static(path.join(__dirname,'public/assets')))

//Storage

const storage = multer.diskStorage({

    destination: function (req, file, cb) {
         cb(null, 'public/assets');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
}
});
const upload = multer({ storage });

//Mongoose connection configuration

const PORT = process.env.PORT || 3001;
mongoose.connect(process.env.URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
   
}).then(()=>{
    app.listen(PORT,()=>
        console.log(`Chalo shuru ho jaao ${PORT}`));
}) 
.catch((err => console.error(err)))