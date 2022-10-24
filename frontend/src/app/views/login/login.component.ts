import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  public username: string = "";
  public password: string = "";

  public widthPx: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  public handleSubmit(e: Event): void {
    e.preventDefault();
    console.log(this.username, this.password);
  }

}
