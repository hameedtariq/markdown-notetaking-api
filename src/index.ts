import express from 'express';
import multer from 'multer';
import convertToHTML from './controllers/convertToHTML';

const upload = multer({ dest: 'uploads/' });

const app = express();

app.post('/', upload.single('file'), convertToHTML);

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
