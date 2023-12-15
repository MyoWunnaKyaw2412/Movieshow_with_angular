import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email?:string;
  password?:string;
  
  constructor(private http : HttpClient,private cookieService: CookieService,private myroute : Router){
    this.cookieService.set('Test', 'Hello World');
  }
  //   async login(){
  //    var  response = await this.http.post('http://localhost:3000/api/v1/users/signin',
  //    {
  //    email : this.email,
  //    password : this.password,
  //    }
  //    );
  
  //    console.log (response)
  //   response.subscribe({
  //   next: (data :any)=>{
  //     console.log (data)
  //     this.cookieService.set('token',data['token'])
  //     this.myroute.navigateByUrl('home')
  //   },
  //   error:(err:any) =>{
  //     console.log (err.message)
  //     alert (err.message)
  //   }
  //   })}




  login(){
    if (this.email == 'myowunna7777',this.password="79797979"){
      this.myroute.navigateByUrl("/home")
    }else{
      alert("Something Wrong")
    }
    console.log("<<<login>>>>")
  }
}
