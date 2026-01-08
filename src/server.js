// src/server.js
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

import router from './routes/index.js';

const app = express();
// const PORT = process.env.PORT || 3000;

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on ${PORT}`));


// ESM-friendly __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// View engine config
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Static assets
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', router);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

console.log(__dirname);

