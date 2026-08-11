import http from 'http';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { router } from './routes/routes.js';
import { logInfo } from './modules/logger.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const envPath = path.join(__dirname, 'config', '.env');
const result = dotenv.config({ path: envPath });

// console.log('المسار اللي بندور فيه:', envPath);
// console.log('نتيجة dotenv.config:', result);

const PORT = process.env.PORT || 3000;

const server = http.createServer(router);

server.listen(PORT, () => {
  logInfo(`the server is work on  http://localhost:${PORT}`);
});