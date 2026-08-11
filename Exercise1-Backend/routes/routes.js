import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { logRequest, logError } from '../modules/logger.js';
import {
  getAllUsers,
  getUserById,
  addUser,
  updateUser,
  deleteUser,
} from '../modules/dataHandler.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PUBLIC_DIR = path.join(__dirname,'..', 'public');


function sendJson(res, statusCode, data) {
  res.writeHead(statusCode, { 'Content-Type': 'application/json; charset=utf-8' });
  res.end(JSON.stringify(data, null, 2));
}


function sendPage(res, statusCode, fileName) {
  const filePath = path.join(PUBLIC_DIR, fileName);
  try {
    const content = fs.readFileSync(filePath);
    res.writeHead(statusCode, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(content);
  } catch (error) {
    logError(error);
    res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('there is a awrong in the server');
  }
}


function readBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk.toString();
    });
    req.on('end', () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch (err) {
        reject(err);
      }
    });
    req.on('error', reject);
  });
}


async function handleApiUsers(req, res, parts) {
  const id = parts[2]; 

  if (req.method === 'GET' && !id) {
    return sendJson(res, 200, getAllUsers());
  }

  
  if (req.method === 'GET' && id) {
    const user = getUserById(id);
    if (!user) return sendJson(res, 404, { error: 'المستخدم غير موجود' });
    return sendJson(res, 200, user);
  }

  
  if (req.method === 'POST' && !id) {
    const body = await readBody(req);
    if (!body.name || !body.email) {
      return sendJson(res, 400, { error: 'الحقول name و email مطلوبة' });
    }
    return sendJson(res, 201, addUser(body));
  }

  
  if (req.method === 'PUT' && id) {
    const body = await readBody(req);
    const updated = updateUser(id, body);
    if (!updated) return sendJson(res, 404, { error: 'المستخدم غير موجود' });
    return sendJson(res, 200, updated);
  }


  if (req.method === 'DELETE' && id) {
    const success = deleteUser(id);
    if (!success) return sendJson(res, 404, { error: 'المستخدم غير موجود' });
    return sendJson(res, 200, { message: 'تم حذف المستخدم بنجاح' });
  }

  return sendJson(res, 404, { error: 'مسار API غير معروف' });
}


function handlePages(req, res, pathname) {
  if (pathname === '/' || pathname === '/home' || pathname==='/index.html') {
    return sendPage(res, 200, 'index.html');
  }

  if (pathname === '/about.html' || pathname==='/About') {
    return sendPage(res, 200, 'about.html');
  }

  return sendPage(res, 404, '404.html');
}


async function router(req, res) {
  logRequest(req); 
  try {
    const url = new URL(req.url, `http://${req.headers.host}`);
    const parts = url.pathname.split('/').filter(Boolean); 

    
    if (parts[0] === 'api' && parts[1] === 'users') {
      return await handleApiUsers(req, res, parts);
    }

    
    return handlePages(req, res, url.pathname);
  } catch (error) {
    logError(error);
    return sendJson(res, 500, { error: 'حدث خطأ داخلي في الخادم' });
  }
}

export { router };