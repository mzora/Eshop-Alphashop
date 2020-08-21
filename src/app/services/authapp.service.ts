import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthappService {

  constructor() { }
  autentica(userid, password){
    if(userid==='admin' && password ==='admin')
    {
      sessionStorage.setItem("Utente", userid);
      return true;
    }else{
      return false;
    }
  }
  
  loggedUser(){
    let utente = sessionStorage.getItem("Utente");
    return (sessionStorage.getItem("Utente") != null) ? utente : "";
  }
  
  isLogged(){
    return (sessionStorage.getItem("Utente") != null) ? true : false;
  }

  clearAll(){
    sessionStorage.removeItem("Utente");
  }
}
