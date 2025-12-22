import express, { urlencoded } from 'express'
import cors from 'cors';
import multer from 'multer';

const app = express();
app.use(cors({ origin: ['http://localhost:5173'] }));


app.use(urlencoded({ extended: true }));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "src/server/uploads/");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    },
});

const upload = multer({ storage });

app.get('/', (req, res) => {
    res.status(201).json({
        data: 'Hello World!'
    })
})

app.post('/upload-file', upload.array("photos", 5), (req, res) => {
    console.log(req.files);
    req.files.forEach((file) => {
        console.log(file.path);
    });
    console.log(req.body.name);
    return res.status(200).json({
        data: 'All photos uploaded successfully'
    })
})


app.listen(3000, () => console.log("Server is running.."));