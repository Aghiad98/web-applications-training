import fs from 'fs' ;
import path from 'path' ;
import { fileURLToPath } from 'url'; 
 import {logInfo , logError} from './logger.js';

 const __filename = fileURLToPath(import.meta.url) ;
 const __dirname = path.dirname(__filename) ;
 const DATA_FILE = path.join(__dirname,'data','users.json') ;

export function readUsers(){
    try{
        const rawData = fs.readFileSync(DATA_FILE , 'utf-8') ;
        return JSON.parse(rawData) ; 
    }catch(error){
        logError(`Wrong in the reading :${error.message}`);
        return[]
    }
 }

 export function writeUsers(users){
    try{
        fs.writeFileSync(DATA_FILE , JSON.stringify(users , null ,2 ) ,'utf-8');
        return true ;
    }catch(error){
        logError(`Wrong in the writing ${error.message}`) ;
        return false ;
    }
 }

 export function getAllUsers(){
    return readUsers() ;
 }

 export function getUserById(id){
    const users = readUsers();
    const user  = users.find(u=>u.id===Number(id)) ;
        return user || null 

 }

 export function addUser(newUser){
    const users = readUsers() ;
    
    const newId = users.length > 0 ? Math.max(...users.map(u=>u.id)) +1 : 1 ;
    
    const userToAdd = {
        id : newId,
        name : newUser.name,
        email : newUser.email,
        age : newUser.age || null
    }
    users.push(userToAdd);

  const success = writeUsers(users);

  if (success) {

    logInfo(`the user added successfully  ${newId}`);
    
    return userToAdd;
  }

  return null;
}
 export function updateUser(id, updatedFields) {
  const users = readUsers();
  const index = users.findIndex((u) => u.id === Number(id));

  if (index === -1) {
    logError(`you don't find the user${id}`);
    return null;
  }

  users[index] = { ...users[index], ...updatedFields, id: users[index].id };
  const success = writeUsers(users);

  if (success) {
    logInfo(`the update is done${id}`);
    return users[index];
  }

  return null;
}

export function deleteUser(id) {
  const users = readUsers();
  const filteredUsers = users.filter((u) => u.id !== Number(id));

  if (filteredUsers.length === users.length) {
    logError(`attempt to delete is faild${id}`);
    return false;
  }

  const success = writeUsers(filteredUsers);
  if (success) {
    logInfo(`the deleted is successed${id}`);
  }
  return success;
}