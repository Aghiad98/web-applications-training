import fs from 'fs' ;
import path from 'path' ;
import { fileURLToPath } from 'url' ;

const __filename = fileURLToPath(import.meta.url) ;
const __dirname = path.dirname(__filename) ;
const LOG_FILE = path.join(__dirname,'logs.txt');

export function writeLog(level,message){
    const timestamp = new Date().toISOString();
    const logLine = `[${timestamp}] [${level}] ${message}\n `;
if (level === 'ERROR') {
        console.error(logLine.trim());
    } else {
        console.log(logLine.trim());
    }
    fs.appendFile(LOG_FILE,logLine,(err)=>{
          if (err) {
            console.log("Wrong in the writting ", err.message);
        }
    })
}

export function logRequest(req){
    const message = `${req.method} ${req.url}` ;
    writeLog("INFO",message)
}

export function logInfo(message){
    writeLog("INFO",message) ; 
}

export function logWarning(message){
    writeLog("WARN",message) ;
}
export function logError(error){
    const message = error instanceof Error ? (error.stack||error.message):error ;
    writeLog("ERROR" ,message) ;
}