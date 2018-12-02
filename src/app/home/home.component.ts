import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user';
import { TestBed } from '@angular/core/testing';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { 
    let usuario: User = {
      nick: "francves",
      age: 25,
      email: "francves@Test.com",
      friend: true,
      uid: 1
    }
    console.log(usuario);
  }

  ngOnInit() {
  }

}
