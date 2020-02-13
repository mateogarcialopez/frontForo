import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user'; //importando el modelo de usuario

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public register_title: String;
  public user: User; //objeto que recibe datos de los formularios y los envia al back

  constructor() {
    this.register_title = 'Registrate';
    this.user = new User('','','','','','','ROLEUSER'); //instacia de un nuevo objeto del modelo de usuario
  }

  ngOnInit() {
  }


  onSubmin(form){
    console.log(this.user);
  }

}
