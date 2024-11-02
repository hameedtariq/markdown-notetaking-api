import marked from 'marked';
import fs from 'fs/promises';
import { Request, Response } from 'express';

export default async function convertToHTML(req: Request, res: Response) {
  if (req.file) {
    // Path to the uploaded file
    const filePath = req.file.path;

    // Read the file contents as a string
    const fileContent = await fs.readFile(filePath, 'utf-8');

    res.send(marked.parse(fileContent));

    await fs.unlink(filePath);
    return;
  }
  res.send('No file uploaded');
}
