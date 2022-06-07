import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  //message of string array is first going to be an empty array......
  message : string [] =[];

  constructor() { }


  add(message : string){
    this.message.push(message);
  }

  clear(){
    this.message =[] ; 
  }
}
